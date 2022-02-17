<template>
  <div class="svg">
    <div class="box green a">a</div>
    <div class="box orange b">b</div>
    <div class="box grey c">c</div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from 'vue';


gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none" });

onMounted(() => {
  setTimeout(() => {
    rotation()
  }, 1000
  )
})
let animation: GSAP. | undefined = undefined;

const rotation = () => {
  animation = gsap.to(".c", {
    scrollTrigger: {
      trigger: ".svg",
      end: "top 30%",
      start: "bottom 80%",
      markers: true,
      scrub: true,
      pin: true,
      toggleActions: "restart pause reverse pause"
    },
    x: 400,
    rotation: 360,
    duration: 3
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
  margin: 10px;
}
.box {
  display: block;
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 6px;
  margin-top: 24px;
  line-height: 50px;
  text-align: center;
  color: #333;
}
.green {
  background-color: #6fb936;
}
.orange {
  background-color: #f38630;
}
.gray,
.grey {
  background-color: #989898;
}
</style>
