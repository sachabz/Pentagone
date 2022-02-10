<template>
  <div class="home">
    <div class="bg-black">
      <Navbar />
      <div class="content">
        <Hero />
        <CabinetSection />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Hero from "@/components/Cabinet/Hero.vue";
import CabinetSection from "@/components/Cabinet/CabinetSection.vue";



</script>

<style scoped>
.bg-black {
  margin-top: 60px;
}
</style>
