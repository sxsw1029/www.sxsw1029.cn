<script lang="ts" setup>
const { data } = useSettings();

const switchColorMode = () => {
  const colorMode = useColorMode();

  const values = ["system", "light", "dark"];
  const index = values.indexOf(colorMode.preference);
  const next = (index + 1) % values.length;

  colorMode.preference = values[next];
};
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

      <button
        v-if="!$colorMode.unknown"
        class="flex items-center"
        @click="switchColorMode()"
      >
        <i
          v-show="$colorMode.preference === 'system'"
          class="i-ri:computer-line ml-3 opacity-60 hover:opacity-100 transition duration-200"
        ></i>

        <i
          v-show="$colorMode.preference === 'dark'"
          class="i-ri:moon-line ml-3 opacity-60 hover:opacity-100 transition duration-200"
        ></i>

        <i
          v-show="$colorMode.preference === 'light'"
          class="i-ri:sun-line ml-3 opacity-60 hover:opacity-100 transition duration-200"
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
