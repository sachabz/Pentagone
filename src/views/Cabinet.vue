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
              <el-row :gutter="20">
                <el-col :span="6" style="overflow: hidden;">
                  <ScrollAnimation />
                </el-col>
                <el-col :span="18">
                  <DynamiqueList :rows="objs" class="objectifs" />
                  <ScrollText />
                </el-col>
              </el-row>
            </ParagraphText>
            <ParagraphText>
              <p
                class="end-scroll-text"
              >L’objectif du cabinet PENTAGONE FINANCE est de vous offrir un service bien supérieur à celui de votre banque, grâce à son expertise poussée en ingénierie financière et patrimoniale, mais aussi grâce à un choix méticuleux de ses différents partenaires.</p>
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
import DynamiqueList from "@/components/Utils/DynamiqueList.vue";
import ScrollAnimation from "@/components/Utils/ScrollAnimation.vue";
import ScrollText from "@/components/Utils/ScrollText.vue";

const expertises = ref(["Ingénierie patrimoniale", "Investissement immobilier", "Investissement financier"]);

const objs = ref([
  { title: "Vous constituer un patrimoine", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
  { title: "Vous constituer des revenus grâce à vos investissements", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
  { title: "Préparer votre retraite (ou partir en retraite plus tôt)", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
  { title: "Payer moins d’impôts (IR, IFI, IS, nous optimisons votre fiscalité globale) ", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
  { title: "Protéger votre famille", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
  { title: "Optimiser la transmission de votre patrimoine", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
  { title: "Vous avez d’autres projets", content: "Nous vous écoutons sur vos différents projets de vie, et nous vous aidons à choisir les meilleures stratégies patrimoniales pour réussir votre projet sur le plan financier" }
])
</script>

<style scoped>
.bg-black {
  background-color: rgba(0, 0, 0, 0.507);
}

.bg-cabinet {
  background-color: #06112e;
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

.step2 {
  background-color: red;
}
</style>
