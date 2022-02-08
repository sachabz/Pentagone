<template>
  <div class="home">
    <Navbar />
    <Banniere />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import Banniere from "@/components/Banniere.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Navbar,
    Banniere,
  },
});
</script>

<style scoped>
.home {
  background-image: url("../assets/bg2.jpg");
  background-size: cover;
  width: 100%;
  margin-top: 60px;
}
</style>
