<template>
  <div class="home">
    <div class="bg-black">
      <Navbar />
      <!-- <Buttoncta nom="Voir les détails" ref="test1" /> -->
      <main>
        <el-space wrap fill alignment="flex-start">
          <ListRecap
            title="Cashflow Net par mois"
            subtitle="Le cashflow, dont la traduction littérale est flux de liquidités,  est un indicateur qui permet de mesurer le flux de trésorerie."
            :amount-actif="cashflow.getTotalActif"
            :amount-passif="cashflow.getTotalPassif"
            :amount-total-c-f="cashflow.getTotalCF"
            title-amount-actif="Actif"
            title-amount-passif="Passif"
          />
          <TransitionGroup tag="ul" appear @before-enter="beforeEnter" @enter="enter">
            <List
              v-for="(list, index) of cashflow.rows"
              :key="index"
              :title="list.title"
              :rows="list.rows"
              :index="index"
              :data-index="index"
              :total-amount="cashflow.getTotal(index)"
              :use-cashflow-store="true"
            />
          </TransitionGroup>
        </el-space>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
import List from "../components/List.vue";
import ListRecap from "../components/ListRecap.vue";
import { onMounted } from "vue";
import { useCashflowStore } from "../stores/cashflow";
import gsap from 'gsap';

const beforeEnter = (el: any) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(100px)'
}

const enter = (el: Element, done: () => void) => {
  console.log(el)
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    onComplete: done,
    delay: (el as any).dataset.index * 0.4,

  })
}


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

// const test1 = ref<typeof Buttoncta>();
onMounted(() => {
  // console.log(test1.value);
  // test1.value.shout();
});
</script>
<style scoped>
.home {
  background-image: url("../assets/bg2.jpg");
  background-size: cover;
  width: 100%;
  margin-top: 60px;
  min-height: 100vh;
}

.bg-black {
  background-color: rgba(0, 0, 0, 0.363);
  width: 100%;
  margin-top: 60px;
  min-height: 100vh;
}
</style>
