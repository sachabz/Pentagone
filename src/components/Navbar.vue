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
    >
      <el-menu-item index="1">
        <router-link to="/">
          <img src="../assets/logoPFv3.png" width="50" height="50" />
        </router-link>
      </el-menu-item>
      <router-link to="/cabinet">
        <el-menu-item index="/cabinet" :router="true">Le cabinet</el-menu-item>
      </router-link>
      <router-link to="/services">
        <el-menu-item index="3">Nos services</el-menu-item>
      </router-link>
      <el-sub-menu index="4">
        <template #title>Calculator</template>
        <el-menu-item index="/calculator" :router="true">Vision Globale</el-menu-item>
        <router-link to="/cashflow">
          <el-menu-item index="/cashflow">Cashflow</el-menu-item>
        </router-link>
        <router-link to="/patrimoine">
          <el-menu-item index="/patrimoine">Patrimoine</el-menu-item>
        </router-link>
      </el-sub-menu>
    </el-menu>
  </el-affix>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import "../assets/logoPFv2.png";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-menu {
  align-items: center;
  align-content: center;
  text-align: center;
}
</style>
