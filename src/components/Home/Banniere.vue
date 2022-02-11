<script lang="ts" setup>

const gotourl = () => {
  window.open(location.href = "https://docs.google.com/forms/d/e/1FAIpQLSf4WN2mihHlaWjBK10gfKkz-2Slb2CTlaPAX2fHwC0ScU0szQ/viewform?usp=sf_link");
}
</script>

<template>
  <div class="banniere">
    <!-- <video autoplay muted loop id="myVideo">
      <source src="../assets/villa.mp4" type="video/mp4" autoplay />
    </video>-->
    <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 content">
      <h1 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        <span class="block">Pentagone Finance</span>
        <span class="block">L'expert de la gestion de patrimoine</span>
      </h1>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow">
          <a
            @click="gotourl"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
          >Aidez nous à mieux vous connaitre</a>
        </div>
        <div class="ml-3 inline-flex">
          <router-link to="/cabinet">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >Voir le cabinet</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banniere {
  padding-bottom: 80px;
  padding-top: 60px;
  background: rgba(0, 0, 0, 0.5);
  /* position: relative; */
  z-index: 3;
}

/* #myVideo {
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  object-fit: cover;
  padding-top: 0px;
  opacity: 0.4;
}  */

.content {
  bottom: 0;
  color: #f1f1f1;
  width: 100%;
  /* position: relative; */
  padding-top: 0px;
}
</style>

