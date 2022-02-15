<template>
  <div class>
    <ParagrapheMain
      content="PENTAGONE FINANCE est un cabinet de conseil créé par 3 associés, chacun expert dans son domaine : "
    />
    <CardSection :rows="expertises" title="3 ASSOCIÉS, 3 EXPERTISES" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardSection from "../Utils/CardSection.vue";

const expertises = ref(["PENTAGONE FINANCE est un cabinet de conseil créé par 3 associés, chacun expert dans son domaine :", "Ingénierie patrimoniale", "Investissement immobilier", "Investissement financier", "Les associés sont issus de grandes institutions de la gestion de patrimoine et de la gestion de fortune, où ils ont acquis un véritable savoir-faire dans ces différents domaines."])

</script>

<style scoped>
bg-hero {
  background-color: rgba(0, 0, 0, 0.473);
}

.home {
  background-image: url("../../assets/bg4.jpg");
  /* background-size: cover; */
  width: 100%;
  padding-top: 0px;
  padding-bottom: 0px;
}
.bg-blacks {
  background-color: rgba(0, 0, 0, 0.247);
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>