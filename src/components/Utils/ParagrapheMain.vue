<template>
  <div class="text-gray-700 bg-white">
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  content?: string;
}
withDefaults(defineProps<Props>(), {
  content: "blabla",
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  padding: 40px 20px 0px;
}
p {
  padding-left: 80px;
  padding-right: 80px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
