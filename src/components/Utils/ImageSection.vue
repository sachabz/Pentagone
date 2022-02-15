<template>
  <div class="image">
    <img :src="image" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  image?: string;
}
withDefaults(defineProps<Props>(), {
  image: "https://via.placeholder.com/150",
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image {
  // background-size: cover;
  // width: 100%;
  // min-height: 20vh;
  // max-height: 30vh;
}
</style>
