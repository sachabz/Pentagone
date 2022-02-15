<template>
  <div class="home bg-cabinet">
    <div class="padding-bottom-cabinet">
      <Navbar />
      <div class="content">
        <TitleSection title="LE CABINET" />
        <!-- <ImageSection image="../../assets/cabinet2.jpg" /> -->
        <img scr="../assets/cabinet2.png" />
        <SubTitleSection
          title="3 ASSOCIÉS, 3 EXPERTISES"
          content="PENTAGONE FINANCE est un cabinet de conseil créé par 3 associés, chacun expert dans son domaine : 

-Ingénierie patrimoniale 

-Investissement immobilier 

-Investissement financier  

Les associés sont issus de grandes institutions de la gestion de patrimoine et de la gestion de fortune, où ils ont acquis un véritable savoir-faire dans ces différents domaines.
"
        />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import TitleSection from "@/components/Utils/TitleSection.vue";
// import ImageSection from "../components/Utils/ImageSection.vue";
import SubTitleSection from "@/components/Utils/SubTitleSection.vue";



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
</style>
