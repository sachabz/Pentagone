<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    background-color="#E0E0E0"
    text-color="#0C1C52"
    active-text-color="#0096C7"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <router-link to="/">
        <img src="../assets/logoPFv2.png" width="50" height="50" />
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">Le cabinet</el-menu-item>
    <el-menu-item index="3">Nos services</el-menu-item>
    <el-sub-menu index="4">
      <template #title>Calculator</template>
      <router-link to="/calculator">
        <el-menu-item index="4-1">Vision Globale</el-menu-item>
      </router-link>
      <el-menu-item index="4-2">Cashflow</el-menu-item>
      <el-menu-item index="4-3">Patrimoine</el-menu-item>
    </el-sub-menu>
  </el-menu>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.el-menu {
  padding-left: 4px;
}
</style>
