<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span class="title-form text-blue-700">{{ title }}</span>
      </div>
    </template>
    <div v-for="(row, index) of rows" :key="index" class="text item">
      <p>{{ row }}</p>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  title?: string;
  rows?: string[];
  index?: number;
}
withDefaults(defineProps<Props>(), {
  title: "Titre",
  rows: () => [],
  index: 0,
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-form {
  align-content: center;
  text-align: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
  border: none;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
