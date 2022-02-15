<template>
  <div class="bg-title padding-all border-title-bottom">
    <el-row :gutter="20" class>
      <el-col :span="8">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="8" class="border-title-left">
        <div class="grid-content"></div>
        <h1 class="title-color size-tittle">{{ title }}</h1>
        <p class="content-color padding-content size-content">{{ content }}</p>
      </el-col>
      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  title?: string;
  content?: string;
}
withDefaults(defineProps<Props>(), {
  title: "Titre",
  content: "Contenu",
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.padding-all {
  padding-left: 20px;
  padding-right: 20px;
}

.padding-content {
  padding-top: 60px;
  padding-bottom: 60px;
}

.size-tittle {
  font-size: 30px;
}

.size-content {
  font-size: 12px;
}

.bg-title {
  background-color: #091e57;
}

.border-title-left {
  border-left: 1px solid #cad8ff;
}

.border-title-bottom {
  border-bottom: 1px solid #cad8ff;
}

.title-color,
.content-color {
  color: #cad8ff;
}
</style>
