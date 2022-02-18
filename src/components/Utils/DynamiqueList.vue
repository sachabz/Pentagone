<template>
  <div class="dynamique-list">
    <ul>
      <li v-for="(row, index) of rows" :key="index" :class="`step${index}`">
        <h2>{{ row.title }}</h2>
        <p>{{ row.content }}</p>
        <el-divider class="divider"></el-divider>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
interface Row {
  title: string;
  content: string;
}

interface Props {
  rows?: Row[];
}
withDefaults(defineProps<Props>(), {
  rows: () => [],
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style: decimal;
  padding-left: 3rem;
  color: #e1e9ff0c;
}

h2 {
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 10px;
}

.divider {
  padding-bottom: 30px;
  padding-top: 30px;
}

p {
  padding-bottom: 30px;
}
</style>
