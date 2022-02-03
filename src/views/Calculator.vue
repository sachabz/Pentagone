<template>
  <div class="home">
    <Navbar />
    <Buttoncta nom="Voir les détails" ref="test1" />
    <Buttoncta />
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
import Buttoncta from "../components/Utils/Buttoncta.vue";
import { ref, onMounted } from "vue";
const test1 = ref<typeof Buttoncta>();
onMounted(() => {
  console.log(test1.value);
  test1.value.shout();
});
</script>
