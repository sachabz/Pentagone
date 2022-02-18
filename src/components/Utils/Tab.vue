<template>
  <el-affix
    target="body"
    :offset="0"
    background-color="#06112e"
    text-color="#e1e9ff"
    active-text-color="#cad8ff"
  >
    <el-tabs tab-position="top" style="height: 200px" class="demo-tabs">
      <el-tab-pane label="User">User gg</el-tab-pane>
      <el-tab-pane label="Config">Config gg</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </el-affix>
</template>

<script lang="ts" setup>

import { defineProps, withDefaults } from "vue";


interface Props {
  tabs?: string[];
  labeltab: string[];
}
withDefaults(defineProps<Props>(), {
  tabs: () => [],
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  background-color: #06112e;
  color: #e1e9ff;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
