<template>
  <div class>
    <CardSection :rows="objectifs" title="DES OBJECTIFS ADAPTÉS À VOUS" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardSection from '../Utils/CardSection.vue';

const objectifs = ref(["Grâce à ces différentes compétences, le cabinet PENTAGONE FINANCE pourra vous accompagner à atteindre vos différents objectifs de vie, et bien sûr vos différents objectifs financiers : ", "-Vous constituer un patrimoine", "-Vous constituer des revenus grâce à vos investissements", "-Préparer votre retraite (ou partir en retraite plus tôt)", "-Payer moins d’impôts (IR, IFI, IS, nous optimisons votre fiscalité globale)", "-Protéger votre famille", "-Optimiser la transmission de votre patrimoine", "-Vous avez d’autres projets : nous vous écoutons sur vos différents projets de vie, et nous vous aidons à choisir les meilleures stratégies patrimoniales pour réussir votre projet sur le plan financier"])
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