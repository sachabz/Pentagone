<template></template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onBeforeUnmount, onMounted, nextTick } from 'vue';


gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none" });

onMounted(() => {
  nextTick(() => {
    animTextWhite();

  }
  )
})

onBeforeUnmount(() => {
  if (animText !== undefined) {
    animText.kill()
  }
  if (animText2 !== undefined) {
    animText2.kill()
  }
  if (animText3 !== undefined) {
    animText3.kill()
  }
  if (animText4 !== undefined) {
    animText4.kill()
  }
  if (animText5 !== undefined) {
    animText5.kill()
  }
  if (animText6 !== undefined) {
    animText6.kill()
  }
  if (animText7 !== undefined) {
    animText7.kill()
  }
}
)
let animText: GSAPTween | undefined = undefined;
let animText2: GSAPTween | undefined = undefined;
let animText3: GSAPTween | undefined = undefined;
let animText4: GSAPTween | undefined = undefined;
let animText5: GSAPTween | undefined = undefined;
let animText6: GSAPTween | undefined = undefined;
let animText7: GSAPTween | undefined = undefined;
const animTextWhite = () => {
  animText = gsap.to(".step0", {
    scrollTrigger: {
      trigger: ".stepO",
      start: "top bottom",
      end: "bottom center",
      toggleActions: "restart pause reverse pause",
      scrub: true,
      pin: false,
      markers: false,
    },
    color: "white",
    ease: "none",
  });
  animText2 = gsap.to(".step1", {
    scrollTrigger: {
      trigger: ".step1",
      start: "top bottom",
      end: "bottom center",
      toggleActions: "restart pause reverse pause",
      scrub: true,
      pin: false,
      markers: false,
    },
    color: "white",
    ease: "none",
  });
  animText3 = gsap.to(".step2", {
    scrollTrigger: {
      trigger: ".step2",
      start: "top bottom",
      end: "bottom center",
      toggleActions: "restart pause reverse pause",
      scrub: true,
      pin: false,
      markers: false,
    },
    color: "white",
    ease: "none",
  });
  animText4 = gsap.to(".step3", {
    scrollTrigger: {
      trigger: ".step3",
      start: "top bottom",
      end: "bottom center",
      toggleActions: "restart pause reverse pause",
      scrub: true,
      pin: false,
      markers: false,
    },
    color: "white",
    ease: "none",
  });
  animText5 = gsap.to(".step4", {
    scrollTrigger: {
      trigger: ".step4",
      start: "top bottom",
      end: "bottom center",
      toggleActions: "restart pause reverse pause",
      scrub: true,
      pin: false,
      markers: false,
    },
    color: "white",
    ease: "none",
  });
  animText6 = gsap.to(".step5", {
    scrollTrigger: {
      trigger: ".step5",
      start: "top bottom",
      end: "bottom center",
      toggleActions: "restart pause reverse pause",
      scrub: true,
      pin: false,
      markers: false,
    },
    color: "white",
    ease: "none",
  });
  animText7 = gsap.to(".step6", {
    scrollTrigger: {
      trigger: ".step6",
      start: "top bottom",
      end: "bottom center",
      toggleActions: "restart pause reverse pause",
      scrub: true,
      pin: false,
      markers: false,
    },
    color: "white",
    ease: "none",
  });
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
