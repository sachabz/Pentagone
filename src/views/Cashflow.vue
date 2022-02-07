<template>
  <div class="home">
    <div class="bg-black">
      <Navbar />
      <!-- <Buttoncta nom="Voir les détails" ref="test1" /> -->
      <el-space wrap fill alignment="flex-start">
        <ListRecap
          title="Cashflow Net par mois"
          subtitle="Le cashflow, dont la traduction littérale est flux de liquidités,  est un indicateur qui permet de mesurer le flux de trésorerie."
        />
        <List
          v-for="(list, index) of cashflow.rows"
          :key="index"
          :title="list.title"
          :rows="list.rows"
          :index="index"
        />
      </el-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
import List from "../components/List.vue";
import ListRecap from "../components/ListRecap.vue";
import Buttoncta from "../components/Utils/Buttoncta.vue";
import { ref, onMounted } from "vue";
import { useCashflowStore } from "../stores/cashflow";
// const test1 = ref<typeof Buttoncta>();
onMounted(() => {
  // console.log(test1.value);
  // test1.value.shout();
});

const cashflow = useCashflowStore();

// const lists = ref([
//   {
//     title: "Revenus actifs par mois", rows: [
//       { name: "salaire", amount: 1200 },
//       { name: "autres", amount: 0 }
//     ]
//   },
//   {
//     title: "Revenus Passifs par mois", rows: [
//       { name: "autres", amount: 0 }
//     ]
//   },
//   {
//     title: "Depenses par mois", rows: [
//       { name: "Impôts", amount: 0 },
//       { name: "autres", amount: 0 }
//     ]
//   }
// ])


</script>
<style scoped>
.home {
  background-image: url("../assets/bg2.jpg");
  background-size: cover;
  width: 100%;
}

.bg-black {
  background-color: rgba(0, 0, 0, 0.363);
}
</style>
