<template>
  <div class="home">
    <div class="bg-black">
      <Banniere />
      <EmailVue />
      <SectionHomeMetrics />
    </div>
  </div>
</template>

<script setup lang="ts">
import Banniere from "@/components/Home/Banniere.vue";
import EmailVue from "@/components/EmailVue.vue";
import SectionHomeMetrics from "@/components/Home/SectionHomeMetrics.vue";

</script>

<style scoped>
.home {
  background-image: url("../assets/bg2.jpg");
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}
.bg-black {
  background-color: rgba(0, 0, 0, 0.363);
  width: 100%;
  min-height: 100vh;
}
</style>
