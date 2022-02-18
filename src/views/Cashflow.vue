<template>
  <div class="home">
    <Line
      :animation-delay="1.5 + i * 0.3"
      :top="`${250 + 70 * i}px`"
      :height="`${3 + 4 * i}px`"
      v-for="i in 3"
      :key="i"
    />
    <!-- <Buttoncta nom="Voir les détails" ref="test1" /> -->
    <main>
      <el-space wrap fill alignment="flex-start" class="w-full">
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
</template>

<script lang="ts" setup>
import List from "../components/List.vue";
import ListRecap from "../components/ListRecap.vue";
import { onMounted, ref } from "vue";
import { useCashflowStore } from "../stores/cashflow";
import gsap from 'gsap';
import ScrollAnimation from "@/components/Utils/ScrollAnimation.vue";
import Line from "@/components/Utils/Line.vue";

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
    delay: (el as any).dataset.index * 0.2,

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

const topline = ref("300px");
</script>
<style scoped>
.home {
  /* background-image: url("../assets/bg2.jpg");
  background-size: cover; */
  background-color: #06102d;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  align-content: center;
  text-align: center;
  padding-bottom: 30px;
  overflow-x: hidden;
  position: relative;
}

/* .line {
  background-color: rgba(156, 187, 228, 0.651);
  height: 5px;
  position: absolute;
  top: v-bind(topline);
  right: -10vw;
  left: -10vw;
  transform: rotate(5deg);
}

.line:nth-of-type(2) {
  top: 550px;
  height: 10px;
}
.line:nth-of-type(3) {
  top: 600px;
  height: 15px;
} */
</style>
