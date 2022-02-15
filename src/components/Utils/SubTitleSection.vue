<template>
  <div class="bg-title padding-all border-title-bottom">
    <el-row :gutter="20" class>
      <el-col :span="8">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="8" class="border-title-left">
        <div class="grid-content"></div>
        <h1 class="title-color size-title text-align-start">{{ title }}</h1>
        <p class="content-color padding-content size-content text-align-start">
          <slot />
        </p>
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

}
withDefaults(defineProps<Props>(), {
  title: "Titre",

});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.padding-all {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
}

.text-align-start {
  text-align: left;
}

.padding-content {
  padding-top: 60px;
  padding-bottom: 60px;
}

.size-title {
  font-size: 3rem;
}

.size-content {
  font-size: 1.2rem;
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

.content-color {
  color: #cad8ff;
}

.title-color {
  color: #e1e9ff;
}
</style>
