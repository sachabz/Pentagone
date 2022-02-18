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
          <el-button type="text">
            <el-icon @click="open(row)">
              <edit class="blue-link" />
            </el-icon>
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="total">
      <el-col :span="8">
        <div class="grid-content">Total</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">{{ totalAmount }} €</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
import { Edit } from "@element-plus/icons-vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { useCashflowStore as cashflowStore } from "../stores/cashflow";
import { usePatrimoineStore } from "@/stores/patrimoine";

const cashflow = cashflowStore();
const patrimoine = usePatrimoineStore();

interface Row {
  name: string;
  amount: number;
}

interface Props {
  title?: string;
  rows?: Row[];
  totalAmount?: number;
  useCashflowStore: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  title: "Titre",
  rows: () => [],
  totalAmount: 0,
});

//pour utiliser les props dans le JS
const { rows, title, totalAmount, useCashflowStore } = toRefs(props);

// const total = computed(() => {
//     let value = 0;
//     for (const row of rows.value) {
//         value += row.amount;
//     }
//     return value;
// })

const open = (row: Row) => {
  ElMessageBox.prompt(`Mettez le montant par mois de ${row.name}`, row.name, {
    confirmButtonText: "Enregistrer",
    cancelButtonText: "Annuler",
    inputPattern: /[0-9]+,{0,1}[0-9]{0,2}/,
    inputErrorMessage: "Le format ne correspond pas",
  })
    .then(({ value }) => {
      ElMessage({
        type: "success",
        message: `Le nouveau montant de ${row.name} est: ${value} €`,
      });
      if (useCashflowStore.value) {
        cashflow.updateRow(title.value, row.name, parseFloat(value));
      } else {
        patrimoine.updateRow(title.value, row.name, parseFloat(value));
      }
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Vous avez annulé",
      });
    });
};
</script>

<style scoped lang="scss">
@use "sass:map";
@import "@/styles/element/index.scss";

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.total {
  background-color: lighten(map.get($card, "bg-color"), 15%);
  font-weight: bold;
  border: none;
  border-radius: 5px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 20px;
}
</style>
