<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2
        class="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl"
      >Vous voulez plus de renseignements ?</h2>
      <p
        class="inline text-3xl font-extrabold tracking-tight text-blue-700 sm:block sm:text-4xl"
      >Entrez votre email ici</p>
      <form class="mt-8 sm:flex align-input">
        <label for="email-address" class="sr-only">Votre email</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
          placeholder="Entrer votre email ici"
        />
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >Recevoir</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.align-input {
  justify-content: center;
}
</style>
