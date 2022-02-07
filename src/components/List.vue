<template>
    <el-card class="box-card maxwidth">
        <template #header>
            <div class="card-header">
                <span>{{ title }}</span>
            </div>
        </template>
        <el-row :gutter="20" v-for="(row, index) of rows" :key="index">
            <el-col :span="8">
                <div class="grid-content">{{ row.name }}</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">{{ row.amount }} €</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">
                    <el-icon :size="20" @click="open(row)">
                        <edit class="blue-link" />
                    </el-icon>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="total">
            <el-col :span="8">
                <div class="grid-content">Total</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">{{ cashflow.getTotal(index) }} €</div>
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
    index?: number;
}
const props = withDefaults(defineProps<Props>(), {
    title: "Titre",
    rows: () => [],
    index: 0,
});

//pour utiliser les props dans le JS
const { rows, title, index } = toRefs(props);


const total = computed(() => {
    let value = 0;
    for (const row of rows.value) {
        value += row.amount;
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
                message: `Le nouveau montant de ${row.name} est: ${value} €`,
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
    justify-content: center;
    font-weight: bold;
}

.total {
    background-color: rgb(235, 235, 235);
    font-weight: bold;
    border: none;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 580px;
    max-width: 580px;
    margin-left: auto;
    margin-right: auto;
}

.blue-link {
    color: #00c0ff;
}
</style>
