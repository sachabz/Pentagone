<template>
  <div class="svg">
    <div class="box blue a"></div>
    <div class="box orange b"></div>
    <div class="box grey c"></div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onBeforeUnmount, onMounted, nextTick } from 'vue';


gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none" });

onMounted(() => {
  nextTick(() => {
    rotation()
  }
  )
})

onBeforeUnmount(() => {
  if (animation !== undefined) {
    animation.kill()
  }
  if (animation2 !== undefined) {
    animation2.kill()
  }
  if (animation3 !== undefined) {
    animation3.kill()
  }
  if (animation4 !== undefined) {
    animation4.kill()
  }
}
)

let animation: GSAPTween | undefined = undefined;
let animation2: GSAPTween | undefined = undefined;
let animation3: GSAPTween | undefined = undefined;
let animation4: GSAPTween | undefined = undefined;

const rotation = () => {
  animation = gsap.to(".svg", {
    scrollTrigger: {
      trigger: ".objectifs",
      start: "top center",
      end: "bottom center",
      markers: true,
      scrub: true,
      pin: false,
      toggleActions: "restart pause reverse pause"
    },
    yPercent: 110,
    duration: 3,
  });
  animation2 = gsap.to(".a", {
    scrollTrigger: {
      trigger: ".step0",
      start: "top center",
      endTrigger: ".objectifs",
      end: "bottom center",
      markers: true,
      scrub: true,
      pin: false,
      toggleActions: "restart pause reverse pause"
    },
    startAt: { opacity: 0, y: -400 },
    rotation: 360,
    duration: 3,
    opacity: 1,
    y: 0,
  });
  animation3 = gsap.to(".b", {
    scrollTrigger: {
      trigger: ".step1",
      endTrigger: ".objectifs",
      start: "top center",
      end: "bottom center",
      markers: true,
      scrub: true,
      pin: false,
      toggleActions: "restart pause reverse pause"
    },
    startAt: { opacity: 0, y: -400 },
    rotation: 360,
    duration: 3,
    opacity: 1,
    y: 0,
  });
  animation4 = gsap.to(".c", {
    scrollTrigger: {
      endTrigger: ".objectifs",
      trigger: ".step2",
      start: "top center",
      end: "bottom center",
      markers: true,
      scrub: true,
      pin: false,
      toggleActions: "restart pause reverse pause"
    },
    startAt: { opacity: 0, y: -400 },
    rotation: 360,
    opacity: 1,
    y: 0,
  });
}


// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".c",
//     start: "top 50px",
//     end: "bottom 80%",
//     markers: true,
//     scrub: true,
//     pin: true,
//     toggleActions: "restart pause reverse pause"
//   }
// });

// tl.to(".c", {

//   x: 400,
//   rotation: 360,
//   duration: 3
// }).to(".c", {

//   x: 400,
//   rotation: 360,
//   duration: 3
// }).to(".c", {

//   x: 400,
//   rotation: 360,
//   duration: 3
// });


// gsap.from(".box", {
//   opacity: 0,
//   y: 100,
//   duration: 1
// });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.svg {
  position: relative;
  display: block;
  height: 100%;
}
.box {
  display: block;
  width: 50px;
  height: 50px;
  position: relative;
  // top: 50vh;
  // left: 13.33vh;
  border-radius: 6px;
  margin-top: 24px;
  line-height: 50px;
  text-align: center;
  color: #333;
  background-color: aqua;
}

.box:nth-child(1) {
  background-color: rgb(0, 0, 49);
}
.box:nth-child(2) {
  background-color: rgb(107, 107, 243);
}
.box:nth-child(3) {
  background-color: rgb(58, 58, 94);
}
</style>
