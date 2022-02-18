<template>
  <div>
    <div v-for="(row, index) of rows" :key="index">
      <el-result icon="sucess" title="{{row}}" sub-title="Please"></el-result>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  rows?: string[];
  showIcon: boolean;
}
withDefaults(defineProps<Props>(), {
  rows: () => [],
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  padding: 40px 20px 0px;
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
}
a {
  color: #42b983;
}
</style>
