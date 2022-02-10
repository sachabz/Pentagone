<template>
  <div class="relative py-16 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
        <svg
          class="absolute top-12 left-full transform translate-x-32"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
        <svg
          class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg
          class="absolute bottom-12 left-full transform translate-x-32"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
        </svg>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span
            class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
          >Un conseil adapté à vous</span>
          <span
            class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >Différents objectifs</span>
        </h1>
        <p
          class="mt-8 text-xl text-gray-500 leading-8"
        >Les associés sont issus de grandes institutions de la gestion de patrimoine et de la gestion de fortune, où ils ont acquis un véritable savoir-faire dans ces différents domaines.</p>
        <p class="mt-8 text-l text-gray-500 leading-8">
          Le cabinet
          <strong>PENTAGONE FINANCE</strong> est un cabinet indépendant, ce qui lui permet d’aller chercher ce qui se fait de mieux sur le marché de la gestion de patrimoine, afin de toujours mieux servir ses clients.
          Grâce à ces différentes compétences, nous pourront vous accompagner à atteindre vos différents objectifs de vie, et bien sûr vos différents objectifs financiers :
        </p>
      </div>
      <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div v-for="feature in features" :key="feature.name" class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white"
                >
                  <component :is="feature.icon" class="h-6 w-6 icon" aria-hidden="true" />
                </div>
                <p class="ml-20 text-lg leading-6 font-bold text-gray-500">{{ feature.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GlobeAltIcon, CashIcon, HomeIcon, UserGroupIcon, SwitchHorizontalIcon, StarIcon, SunIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Vous constituer un patrimoine.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Vous constituer des revenus grâce à vos investissements.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HomeIcon,
  },
  {
    name: 'Préparer votre retraite (ou partir en retraite plus tôt).',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: SunIcon,
  },
  {
    name: 'Payer moins d’impôts (IR, IFI, IS, nous optimisons votre fiscalité globale).',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CashIcon,
  },
  {
    name: 'Protéger votre famille.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: UserGroupIcon,
  },
  {
    name: 'Optimiser la transmission de votre patrimoine.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: SwitchHorizontalIcon,
  },
  {
    name: "Vous avez d'autres projets",
    description:
      'Nous vous écoutons sur vos différents projets de vie, et nous vous aidons à choisir les meilleures stratégies patrimoniales pour réussir votre projet sur le plan financier',
    icon: StarIcon,
  },
]
</script>

<style scoped>
bg-hero {
  background-color: rgba(0, 0, 0, 0.473);
}

.home {
  background-image: url("../../assets/bg2.jpg");
  background-size: cover;
  width: 100%;
  padding-top: 0px;
  padding-bottom: 0px;
}
.bg-black {
  background-color: rgba(0, 0, 0, 0.555);
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>