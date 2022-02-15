<template>
  <h1 class="title">{{ title }}</h1>
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
.title {
  font-size: 3rem;
  padding-top: 60px;
  padding-bottom: 30px;
  padding-left: 2rem;
  padding-right: 2rem;
  color: #e1e9ff;
  text-align: start;
}
</style>
