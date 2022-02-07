<template>
    <el-card class="box-card maxwidth">
        <template #header>
            <div class="card-header">
                <span>{{ title }}</span>
            </div>
            <p>{{ subtitle }}</p>
        </template>
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content">Actif</div>
                <div class="grid-content">{{ cashflow.getTotalActif }} €</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">Passif</div>
                <div class="grid-content">€</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">Total</div>
                <div class="grid-content">€</div>
            </el-col>
        </el-row>
    </el-card>
</template>


<script lang="ts" setup>
import { toRefs, ref, computed } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { useCashflowStore } from "../stores/cashflow";

const cashflow = useCashflowStore();

interface Row {
    name: string;
    amount: number;
}

interface Props {
    title?: string;
    subtitle?: string;
    rows?: Row[];
}
const props = withDefaults(defineProps<Props>(), {
    title: "Titre",
    subtitle: "Définition"
});

//pour utiliser les props dans le JS
const { rows, title, subtitle } = toRefs(props);


const total = computed(() => {
    let value = 0;
    for (const row of rows.value) {
        value += row.amount;
    }
    return value;
})
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
