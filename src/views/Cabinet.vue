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
            <p>PENTAGONE FINANCE est un cabinet de conseil créé par 3 associés, chacun expert dans son domaine :</p>
            <ParagrapheList :icon="HomeFilled" :rows="expertises" />
            <p>Les associés sont issus de grandes institutions de la gestion de patrimoine et de la gestion de fortune, où ils ont acquis un véritable savoir-faire dans ces différents domaines.</p>
          </ParagraphSection>
        </Section>
        <Section fullpage>
          <TitleSection title="3 associés" />
          <ParagraphSection>
            <p>PENTAGONE FINANCE est un cabinet de conseil créé par 3 associés, chacun expert dans son domaine :</p>
            <ParagrapheList :icon="HomeFilled" :rows="expertises" />
            <p>Les associés sont issus de grandes institutions de la gestion de patrimoine et de la gestion de fortune, où ils ont acquis un véritable savoir-faire dans ces différents domaines.</p>
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
// import SubTitleSection from "@/components/Utils/SubTitleSection.vue";
import Section from "@/components/Utils/Section.vue";
import ParagrapheList from "@/components/Utils/ParagrapheList.vue";
import { HomeFilled } from "@element-plus/icons-vue";
import { ref } from "vue";
import ParagraphSection from "../components/Utils/ParagraphSection.vue";

const expertises = ref(["Ingénierie patrimoniale", "Investissement immobilier", "Investissement financier"])

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
