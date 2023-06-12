<script lang="ts" setup>
const { data } = useSettings();
</script>

<template>
  <footer
    class="flex flex-col justify-center items-center py-10 text-center text-sm"
  >
    <div class="my-px">
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        class="underline opacity-60 hover:opacity-100"
        >CC BY-NC-SA 4.0</a
      >
      <span class="mx-1.5 opacity-60">|</span>
      <span class="opacity-60"
        >&copy; {{ new Date().getFullYear() }} · {{ data?.siteTitle }}</span
      >
    </div>

    <div class="flex items-center my-px">
      <span class="opacity-60">Made with Nuxt Content & </span>
      <i class="i-ri:heart-3-fill mx-1.5 text-red-500 opacity-75"></i>
    </div>
  </footer>
</template>
