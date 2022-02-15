<template>
  <div class="section" :class="{ fullpage }">
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  fullpage?: boolean;
}
withDefaults(defineProps<Props>(), {
  fullpage: false,
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section {
  background-color: #06112e;
  padding-left: 33.3vw;
  padding-right: 33.33vw;
  color: #e1e9ff;
  border-bottom: 1px solid #cad8ff;
  &.fullpage {
    padding-left: 13.3vw;
    padding-right: 13.3vw;
    .section-content {
      border-left: none;
    }
  }
  .section-content {
    border-left: 1px solid #cad8ff;
  }
}
</style>
