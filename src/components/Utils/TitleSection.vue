<template>
  <div class="md:flex md:items-center md:justify-between bg-white padding-tittle">
    <div class="flex-1 min-w-0">
      <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  title?: string;
}
withDefaults(defineProps<Props>(), {
  title: "Titre",
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.padding-tittle {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
