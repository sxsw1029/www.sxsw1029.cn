<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";

const { data } = useSettings();

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="flex justify-between items-center p-4 lg:px-12 py-6">
    <div
      class="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 text-white font-light shadow-md"
    >
      {{ data?.siteTitle }}
    </div>

    <nav class="flex">
      <NuxtLink
        to="/"
        class="mx-2 opacity-60 hover:opacity-100 transition duration-200"
        >Home</NuxtLink
      >

      <NuxtLink
        to="/posts"
        class="mx-2 opacity-60 hover:opacity-100 transition duration-200"
        >Posts</NuxtLink
      >

      <button class="flex items-center" @click="toggleDark()">
        <i
          v-if="!isDark"
          class="i-ri:sun-line ml-3 opacity-60 hover:opacity-100 transition duration-200"
        ></i>

        <i
          v-else
          class="i-ri:moon-line ml-3 opacity-60 hover:opacity-100 transition duration-200"
        ></i>
      </button>
    </nav>
  </header>
</template>

<style lang="postcss">
.router-link-active {
  @apply opacity-100;
}
</style>
