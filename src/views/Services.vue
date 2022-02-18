<template>
  <div class="home bg-cabinet">
    <div class="padding-bottom-cabinet">
      <div class="content">
        <Section fullpage>
          <TitleSection title="NOS SERVICES" />
          <ImageSection :image="CabinetImg" fullscreen />
        </Section>
        <Tab />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import CabinetImg from "@/assets/cabinet.jpg";
import TitleSection from "@/components/Utils/TitleSection.vue";
import ImageSection from "../components/Utils/ImageSection.vue";
import Section from "@/components/Utils/Section.vue";
import ParagrapheList from "@/components/Utils/ParagrapheList.vue";
import { ref } from "vue";
import ParagraphSection from "../components/Utils/ParagraphSection.vue";
import Tab from "@/components/Tab.vue";


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
