<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>
    <navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
      <el-backtop />
    </router-view>
  </div>
</template>

<style lang="scss">
.el-message-box {
  width: calc(95% - 40px) !important;
  max-width: 420px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

html,
body {
  margin: 0;
  padding: 0;
  font-size: 12px;
  // font-family: "Roboto";
  font-family: "NHaasGroteskTXPro", "Lucida Sans", Tahoma, sans-serif;
  background-color: #06112e;
}

@media screen and (max-width: 720px) {
  html,
  body {
    font-size: 11px;
  }
}

@media screen and (max-width: 320px) {
  html,
  body {
    font-size: 10px;
  }
}
</style>
