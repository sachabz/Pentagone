<template>
  <div class="bg-white">
    <ul class="text-gray-700">
      <li v-for="(row, index) of rows" :key="index">
        <el-icon v-if="showIcon === true">
          <home-filled />
        </el-icon>
        <p>- {{ row }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { HomeFilled } from "@element-plus/icons-vue";

interface Props {
  rows?: string[];
  index?: number;
  showIcon: boolean;
}
withDefaults(defineProps<Props>(), {
  rows: () => [],
  index: 0,
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 0 10px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
