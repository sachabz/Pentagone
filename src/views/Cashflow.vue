<template>
  <div class="home">
    <Navbar />
    <!-- <Buttoncta nom="Voir les détails" ref="test1" /> -->
    <el-space wrap fill alignment="flex-start">
      <List
        v-for="(list, index) of cashflow.rows"
        :key="index"
        :title="list.title"
        :rows="list.rows"
      />
    </el-space>
    <p @click="counter.updatedName('roby')">{{ counter.name }}</p>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
import List from "../components/List.vue";
import Buttoncta from "../components/Utils/Buttoncta.vue";
import { ref, onMounted } from "vue";
import { useCounterStore } from "../stores/counter";
import { useCashflowStore } from "../stores/cashflow";
// const test1 = ref<typeof Buttoncta>();
onMounted(() => {
  // console.log(test1.value);
  // test1.value.shout();
});
const counter = useCounterStore();
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
