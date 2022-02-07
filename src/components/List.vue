<template>
    <el-card class="box-card maxwidth">
        <template #header>
            <div class="card-header">
                <span>{{ title }}</span>
            </div>
        </template>
        <el-row :gutter="20" v-for="row of rows" :key="row.name">
            <el-col :span="8">
                <div class="grid-content">{{ row.name }}</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">{{ row.amount }} €</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">
                    <el-icon :size="20" @click="open(row)">
                        <edit />
                    </el-icon>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content">Total</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">{{ total }} €</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content"></div>
            </el-col>
        </el-row>
    </el-card>
</template>


<script lang="ts" setup>
import { toRefs, ref, computed } from "vue";
import { Edit } from "@element-plus/icons-vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { useCashflowStore } from "../stores/cashflow";

const cashflow = useCashflowStore();

interface Row {
    name: string;
    amount: number;
}

interface Props {
    title?: string;
    rows?: Row[];
}
const props = withDefaults(defineProps<Props>(), {
    title: "Titre",
    rows: () => [],
});

//pour utiliser les props dans le JS
const { rows, title } = toRefs(props);


const total = computed(() => {
    let value = 0;
    for (const row of rows.value) {
        value += row.amount;
        // rowStore.addItem(value);
    }
    return value;
})

const open = (row: Row) => {
    ElMessageBox.prompt(`Mettez le montant par mois de ${row.name}`, row.name, {
        confirmButtonText: 'Enregistrer',
        cancelButtonText: 'Annuler',
        inputPattern:
            /[0-9]+,{0,1}[0-9]{0,2}/,
        inputErrorMessage: 'Le format ne correspond pas',
    })
        .then(({ value }) => {
            ElMessage({
                type: 'success',
                message: `Le nouveau montant est:${value}`,
            })
            cashflow.updateRow(title.value, row.name, parseFloat(value));
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Vous avez annulé',
            })
        })
}
</script>

<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 480px;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
}
</style>
