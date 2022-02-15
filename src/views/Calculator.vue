<template>
  <div class="home">
    <Navbar />
    <main class="bg-black">
      <el-space direction="vertical padding-chart">
        <div style="height:300px;width: 300px;">
          <vue3-chart-js
            :id="doughnutChartCashflow.id"
            :type="doughnutChartCashflow.type"
            :data="doughnutChartCashflow.data"
            @before-render="beforeRenderLogic"
          ></vue3-chart-js>
          <router-link to="/cashflow">
            <Buttoncta nom="Voir les détails" class="padding-button" />
          </router-link>
        </div>
      </el-space>
      <el-space direction="vertical padding-chart">
        <div style="height:300px;width: 300px;">
          <vue3-chart-js
            :id="doughnutChartPatrimoine.id"
            :type="doughnutChartPatrimoine.type"
            :data="doughnutChartPatrimoine.data"
            @before-render="beforeRenderLogic"
          ></vue3-chart-js>
          <router-link to="/patrimoine">
            <Buttoncta nom="Voir les détails" class="padding-button" />
          </router-link>
        </div>
      </el-space>
      <!-- <Buttoncta nom="Voir les détails" ref="test1" /> -->
    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
import Buttoncta from "../components/Utils/Buttoncta.vue";
import { ref, onMounted } from "vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { useCashflowStore } from "@/stores/cashflow";
import { usePatrimoineStore } from "@/stores/patrimoine";

// const test1 = ref<typeof Buttoncta>();
const chartRef = ref(null);
const cashflow = useCashflowStore();
const patrimoine = usePatrimoineStore();
// :total-amount="cashflow.getTotal(index)"

const doughnutChartCashflow = {
  id: 'doughnutCashflow ',
  type: 'doughnut',
  data: {
    labels: ['Actif', 'Passif'],
    datasets: [
      {
        backgroundColor: [
          '#023E8A',
          '#0096C7'
        ],
        data: cashflow.getChartCashflow
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Cashflow Net par mois'
      }
    }
  },
}

const doughnutChartPatrimoine = {
  id: 'doughnutPatrimoine ',
  type: 'doughnut',
  data: {
    labels: ['Immobilier', 'Financier'],
    datasets: [
      {
        backgroundColor: [
          '#023E8A',
          '#0096C7'
        ],
        data: patrimoine.getChartPatrimoine,
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Patrimoine Net'
      }
    }
  },
}

onMounted(() => {
  // console.log(test1.value);
  // test1.value.shout();
});
</script>
<style scoped>
.home {
  background-image: url("../assets/bg4.jpg");
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}

.padding-chart {
  padding-top: 60px;
  padding-bottom: 30px;
}

.padding-button {
  padding-top: 20px;
}
.bg-black {
  background-color: rgba(0, 0, 0, 0.363);
  width: 100%;
  min-height: 100vh;
}
</style>
