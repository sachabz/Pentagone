<template>
  <div class="py-12 home">
    <div class="bg-blacks">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-blue-700 font-semibold tracking-wide uppercase"
          >3 associés, 3 expertises</h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-300 sm:text-4xl"
          >LE CABINET</p>
          <p
            class="mt-4 max-w-2xl text-xl text-white lg:mx-auto"
          >PENTAGONE FINANCE est un cabinet de conseil créé par 3 associés, chacun expert dans son domaine :</p>
        </div>
        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div v-for="feature in features" :key="feature.name" class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white"
                >
                  <component :is="feature.icon" class="h-6 w-6 icon" aria-hidden="true" />
                </div>
                <p class="ml-20 text-lg leading-6 font-bold text-white">{{ feature.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-white">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GlobeAltIcon, CashIcon, HomeIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Ingénierie patrimoniale ',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Investissement immobilier ',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HomeIcon,
  },
  {
    name: 'Investissement financier  ',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CashIcon,
  },
]
</script>

<style scoped>
bg-hero {
  background-color: rgba(0, 0, 0, 0.473);
}

.home {
  background-image: url("../../assets/bg4.jpg");
  /* background-size: cover; */
  width: 100%;
  padding-top: 0px;
  padding-bottom: 0px;
}
.bg-blacks {
  background-color: rgba(0, 0, 0, 0.247);
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>