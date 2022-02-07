<script lang="ts" setup>
import Buttoncta from './Utils/Buttoncta.vue';

const gotourl = () => {
  window.open(location.href = "https://docs.google.com/forms/d/e/1FAIpQLSf4WN2mihHlaWjBK10gfKkz-2Slb2CTlaPAX2fHwC0ScU0szQ/viewform?usp=sf_link");
}
</script>

<template>
  <div class="banniere">
    <h1>Pentagone Finance</h1>
    <Buttoncta nom="Aidez nous à mieux vous connaitre" @click="gotourl" />
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-size: 52px;
}

.banniere {
  padding-bottom: 80px;
  padding-top: 60px;
}
</style>
