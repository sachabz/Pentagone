<template>
  <div>
    <ul>
      <li v-for="(row, index) of rows" :key="index">
        <el-icon v-if="showIcon === true && icon !== undefined">
          <component :is="icon" />
        </el-icon>
        <p>{{ row }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  rows?: string[];
  index?: number;
  showIcon?: boolean;
  icon?: any;
}
withDefaults(defineProps<Props>(), {
  rows: () => [],
  index: 0,
  icon: undefined,
  showIcon: false,
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style: circle;
  padding-left: 3rem;
}
</style>
