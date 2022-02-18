<template>
  <div class="line" ref="line"></div>
</template>

<script setup lang="ts">
import { toRefs, ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import gsap from 'gsap';

interface Props {
  top: string;
  height: string;
  animationDelay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  animationDelay: 0,
});

const { top, height, animationDelay } = toRefs(props);
const line = ref<HTMLDivElement>();
let animateLine: GSAPTween | undefined = undefined;

onMounted(() => {
  nextTick(() => {
    if (line.value !== undefined) {
      animateLine = gsap.to(line.value, {
        startAt: { opacity: 0 },
        opacity: 1,
        duration: 1,
        delay: animationDelay.value,
      })
    }
  })
})

onBeforeUnmount(() => {
  if (animateLine !== undefined) {
    animateLine.kill();
  }
})



</script>
<style scoped lang="scss">
.line {
  background-color: rgba(156, 187, 228, 0.651);
  height: v-bind(height);
  position: absolute;
  top: v-bind(top);
  right: -10vw;
  left: -10vw;
  transform: rotate(5deg);
  opacity: 0;
  z-index: 0;
}
</style>