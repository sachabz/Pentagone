<template>
  <el-affix target="body" :offset="0">
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      background-color="#06112e"
      text-color="#e1e9ff"
      active-text-color="#cad8ff"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="/">
        <img src="../assets/logoPFv3.png" width="50" height="50" />
      </el-menu-item>
      <el-menu-item index="/cabinet">Le cabinet</el-menu-item>
      <el-menu-item index="/services">Nos services</el-menu-item>
      <el-sub-menu index="/calculator">
        <template #title>Calculator</template>
        <el-menu-item index="/calculator">Vision Globale</el-menu-item>
        <el-menu-item index="/cashflow">Cashflow</el-menu-item>
        <el-menu-item index="/patrimoine">Patrimoine</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-affix>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import "../assets/logoPFv2.png";
const { path } = useRoute();
const activeIndex = ref(path);
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  activeIndex.value = key;
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
