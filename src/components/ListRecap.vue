<template>
  <el-card class="box-card maxwidth">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
      <p class="subtitle">{{ subtitle }}</p>
    </template>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content">{{ titleAmountActif }}</div>
        <div class="grid-content bg-blue">{{ amountActif }} €</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">{{ titleAmountPassif }}</div>
        <div class="grid-content bg-blue">{{ amountPassif }} €</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">Total</div>
        <div class="grid-content bg-blue">{{ amountTotalCF }} €</div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

interface Row {
  name: string;
  amount: number;
}

interface Props {
  title?: string;
  subtitle?: string;
  rows?: Row[];
  amountActif?: number;
  amountPassif?: number;
  amountTotalCF?: number;
  titleAmountActif?: string;
  titleAmountPassif?: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: "Titre",
  subtitle: "Définition",
  amountActif: 0,
  amountPassif: 0,
  amountTotalCF: 0,
  titleAmountActif: "Actif",
  titleAmountPassif: "Passif",
});

//pour utiliser les props dans le JS
const { title, subtitle, amountActif, amountPassif, titleAmountActif, titleAmountPassif } =
  toRefs(props);

// const total = computed(() => {
//     let value = 0;
//     for (const row of rows.value) {
//         value += row.amount;
//     }
//     return value;
// })
</script>

<style scoped>
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

.subtitle {
  font-style: italic;
  font-size: 14px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.bg-blue {
  background-color: #0c1c52;
  font-weight: bold;
  padding: 2px;
  border-radius: 30px;
}
.box-card {
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  z-index: 1;
}
</style>
