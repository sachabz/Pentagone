<template>
  <div class="svg">
    <h1 class="header-section">Scroll to see a timeline animation</h1>

    <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200">
      <path class="line01 line" d="M 10 200  600 200" />
      <path class="line02 line" d="M 10 400  600 400" />
      <path class="line03 line" d="M 10 600  600 600" />
      <path class="line04 line" d="M 10 800  600 800" />
      <path class="line05 line" d="M 10 1000  600 1000" />
      <text class="text01" x="30" y="190">1</text>
      <text class="text02" x="30" y="390">2</text>
      <text class="text03" x="30" y="590">3</text>

      <path
        class="theLine"
        d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
        fill="none"
        stroke="white"
        stroke-width="10px"
      />

      <circle class="ball ball01" r="20" cx="50" cy="100" />
      <circle class="ball ball02" r="20" cx="278" cy="201" />
      <circle class="ball ball03" r="20" cx="327" cy="401" />
      <circle class="ball ball04" r="20" cx="203" cy="601" />
    </svg>

    <header>
      <a href="https://greensock.com/scrolltrigger">
        <img
          class="greensock-icon"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
          width="200"
          height="64"
        />
      </a>
    </header>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ ease: "none" });



const pulses = gsap.timeline({
  defaults: {
    duration: 0.05,
    autoAlpha: 1,
    scale: 2,
    transformOrigin: 'center',
    ease: "elastic(2.5, 1)"
  }
})
  .to(".ball02, .text01", {}, 0.2)
  .to(".ball03, .text02", {}, 0.33)
  .to(".ball04, .text03", {}, 0.46)

const main = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }
}).to(".ball01", { duration: 0.01, autoAlpha: 1 }).from(".theLine", { drawSVG: 0 }, 0)
  .to(".ball01", {
    motionPath: {
      path: ".theLine",
      align: ".theLine",
      alignOrigin: [0.5, 0.5],
    }
  }, 0)
  .add(pulses, 0);

console.log(main);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
svg {
  max-width: 600px;
  overflow: visible;
  margin-top: 60vh;
}

.ball {
  fill: white;
  visibility: hidden;
}

.line {
  fill: none;
  stroke: white;
  stroke-width: 2px;
}
text {
  fill: white;
  font-size: 15px;
  font-family: "Signika Negative", sans-serif;
  visibility: hidden;
}
</style>
