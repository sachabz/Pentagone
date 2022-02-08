<template>
  <div class="home">
    <div class="bg-black">
      <Navbar />
      <TitleSection title="Le Cabinet" />
      <ParagrapheMain
        content="PENTAGONE FINANCE est un cabinet créé par 3 associés, chacun expert dans son domaine : "
      />
      <ParagrapheList :rows="expertises" :show-icon="true" />
      <IconList :rows="expertises" />
      <ParagrapheMain
        content="Les associés sont issus de grandes institutions de la gestion de patrimoine et de la gestion de fortune, où ils ont acquis un véritable savoir-faire dans ces différents domaines.
"
      />
      <ParagrapheMain
        content="Grâce à ces différentes compétences, le cabinet PENTAGONE FINANCE pourra vous accompagner à atteindre vos différents objectifs de vie, et bien sûr vos différents objectifs financiers : 
"
      />
      <ParagrapheList :rows="objectifs" :show-icon="false" />
      <ParagrapheMain
        content="L’objectif du cabinet PENTAGONE FINANCE est de vous offrir un service bien supérieur à celui de votre banque, grâce à son expertise poussée en ingénierie financière et patrimoniale, mais aussi grâce à un choix méticuleux de ses différents partenaires."
      />
      <ParagrapheMain
        content="Le cabinet PENTAGONE FINANCE est un cabinet indépendant, ce qui lui permet d’aller chercher ce qui se fait de mieux sur le marché de la gestion de patrimoine, afin de toujours mieux servir ses clients."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import TitleSection from "@/components/Utils/TitleSection.vue";
import ParagrapheMain from "@/components/Utils/ParagrapheMain.vue";
import ParagrapheList from "@/components/Utils/ParagrapheList.vue";

const expertises = ref(["Ingénierie patrimoniale", "Investissement immobilier", "Investissement financier"])
const objectifs = ref(["Vous constituer un patrimoine", "Vous constituer des revenus grâce à vos investissements", "Préparer votre retraite (ou partir en retraite plus tôt)", "Payer moins d’impôts (IR, IFI, IS, nous optimisons votre fiscalité globale)", "Protéger votre famille", "Optimiser la transmission de votre patrimoine", "Vous avez d’autres projets : nous vous écoutons sur vos différents projets de vie, et nous vous aidons à choisir les meilleures stratégies patrimoniales pour réussir votre projet sur le plan financier"])
</script>

<style scoped>
.home {
  background-image: url("../assets/bg4.jpg");
  background-size: cover;
  width: 100%;
  margin-top: 60px;
  min-height: 100vh;
}
.bg-black {
  background-color: rgba(0, 0, 0, 0.555);
  width: 100%;
  margin-top: 60px;
  min-height: 100vh;
}
</style>
