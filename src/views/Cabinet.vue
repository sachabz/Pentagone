<template>
  <div class="home bg-cabinet">
    <div class="padding-bottom-cabinet">
      <Navbar />
      <div class="content">
        <Section>
          <TitleSection title="LE CABINET" />
          <ImageSection :image="Cabinet2Img" fullscreen />

          <TitleSection title="3 ASSOCIÉS, 3 EXPERTISES" />
          <ParagraphSection>
            <ParagraphText>
              <p>PENTAGONE FINANCE est un cabinet de conseil créé par 3 associés, chacun expert dans son domaine :</p>
            </ParagraphText>
            <ParagraphText>
              <ParagrapheList :icon="HomeFilled" :rows="expertises" />
            </ParagraphText>
            <ParagraphText>
              <p>Les associés sont issus de grandes institutions de la gestion de patrimoine et de la gestion de fortune, où ils ont acquis un véritable savoir-faire dans ces différents domaines.</p>
            </ParagraphText>
          </ParagraphSection>
        </Section>
        <Section fullpage>
          <TitleSection title="7 GRANDS OBJECTIFS" />
          <ParagraphSection>
            <ParagraphText>
              <p>Grâce à ces différentes compétences, le cabinet PENTAGONE FINANCE pourra vous accompagner à atteindre vos différents objectifs de vie, et bien sûr vos différents objectifs financiers :</p>
            </ParagraphText>
            <ParagraphText>
              <ParagrapheList :icon="HomeFilled" :rows="objectifs" />
            </ParagraphText>
            <ParagraphText>
              <p>L’objectif du cabinet PENTAGONE FINANCE est de vous offrir un service bien supérieur à celui de votre banque, grâce à son expertise poussée en ingénierie financière et patrimoniale, mais aussi grâce à un choix méticuleux de ses différents partenaires.</p>
            </ParagraphText>
            <ParagraphText>
              <p>Le cabinet PENTAGONE FINANCE est un cabinet indépendant, ce qui lui permet d’aller chercher ce qui se fait de mieux sur le marché de la gestion de patrimoine, afin de toujours mieux servir ses clients.</p>
            </ParagraphText>
          </ParagraphSection>
        </Section>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import Cabinet2Img from "@/assets/cabinet2.jpg";
import Navbar from "../components/Navbar.vue";
import TitleSection from "@/components/Utils/TitleSection.vue";
import ImageSection from "../components/Utils/ImageSection.vue";
import Section from "@/components/Utils/Section.vue";
import ParagrapheList from "@/components/Utils/ParagrapheList.vue";
import { HomeFilled } from "@element-plus/icons-vue";
import { ref } from "vue";
import ParagraphSection from "../components/Utils/ParagraphSection.vue";
import ParagraphText from "../components/Utils/ParagraphText.vue";

const expertises = ref(["Ingénierie patrimoniale", "Investissement immobilier", "Investissement financier"])
const objectifs = ref(["Vous constituer un patrimoine", "Vous constituer des revenus grâce à vos investissements", "Préparer votre retraite (ou partir en retraite plus tôt)", "Payer moins d’impôts (IR, IFI, IS, nous optimisons votre fiscalité globale)", "Protéger votre famille", "Optimiser la transmission de votre patrimoine", "Vous avez d’autres projets : nous vous écoutons sur vos différents projets de vie, et nous vous aidons à choisir les meilleures stratégies patrimoniales pour réussir votre projet sur le plan financier"])

</script>

<style scoped>
.bg-black {
  background-color: rgba(0, 0, 0, 0.507);
}

.bg-cabinet {
  background-color: #091e57;
  width: 100%;
  min-height: 100vh;
}

.padding-bottom-cabinet {
  padding-bottom: 30px;
}
ul {
  list-style: circle;
  padding-left: 3rem;
}
</style>
