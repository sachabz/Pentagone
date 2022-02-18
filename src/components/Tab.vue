<template>
  <el-affix target="body" :offset="0">
    <el-tabs stretch tab-position="top" style="height: 200px" class="demo-tabs">
      <el-tab-pane label="Audit Patrimonial Stratégique" name="Audit">User</el-tab-pane>
      <el-tab-pane label="Investissement Immobilier" name="Immobilier">Config</el-tab-pane>
      <el-tab-pane label="Investissement Financier" name="Financier ">Role</el-tab-pane>
    </el-tabs>
  </el-affix>
</template>

<script lang="ts" setup>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.demo-tabs > :deep(.el-tabs__content) {
  padding: 32px;
  font-size: 32px;
  font-weight: 600;
  color: #e1e9ff;
}

.demo-tabs {
  --el-text-color-primary: #e1e9ff;
  // --el-color-primary: red;
}
.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
