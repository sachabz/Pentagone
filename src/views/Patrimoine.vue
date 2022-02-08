<template>
  <div class="home">
    <div class="bg-black">
      <Navbar />
      <!-- <Buttoncta nom="Voir les détails" ref="test1" /> -->
      <el-space wrap fill alignment="flex-start">
        <ListRecap
          title="Patrimoine Net"
          subtitle="Le patrimoine net est le montant total des actifs détenus par un ménage (patrimoine brut) duquel est déduit le montant du capital qu'il doit encore au titre de ses emprunts contractés pour acquérir un bien immobilier, un bien d'équipement, ou pour tout autre motif personnel ou professionnel."
          :amountActif="patrimoine.getTotalImmo"
          :amountPassif="patrimoine.getTotalFiancier"
          :amountTotalCF="patrimoine.getTotalPatrimoine"
          actif="Immobilier"
          passif="Financier"
        />
        <List
          v-for="(list, index) of patrimoine.rows"
          :key="index"
          :title="list.title"
          :rows="list.rows"
          :index="index"
          :totalAmount="patrimoine.getTotal(index)"
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
import { usePatrimoineStore } from "../stores/patrimoine";
// const test1 = ref<typeof Buttoncta>();
onMounted(() => {
  // console.log(test1.value);
  // test1.value.shout();
});

const patrimoine = usePatrimoineStore();

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
  margin-top: 60px;
}

.bg-black {
  background-color: rgba(0, 0, 0, 0.363);
}
</style>
