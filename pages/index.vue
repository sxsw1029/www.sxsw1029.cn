<script lang="ts" setup>
const { data } = useSettings();

useHead({
  title: "Home",
});
</script>

<template>
  <main class="flex flex-col justify-center items-center px-4 w-full">
    <div
      class="mx-auto w-32 h-32 border-solid border-2 border-white rounded-full overflow-hidden text-center shadow-lg hover:shadow-2xl dark:shadow-white/10 transition duration-500"
    >
      <img :src="data?.avatar" alt="Avatar" />
    </div>

    <div
      class="flex flex-col items-center mt-12 max-w-[32rem] text-center bg-gray-50 dark:bg-gray-800 rounded-[12px] overflow-hidden shadow-sm dark:shadow-white/10 relative"
    >
      <!-- <div
        class="w-0 h-0 -top-8 inset-x-0 m-auto border-16 border-solid border-transparent border-b-gray-50 absoulte"
      ></div> -->

      <p class="p-8">
        {{ data?.description }}
      </p>

      <hr class="w-5/6" />

      <div class="p-8">
        <div v-if="data?.location" class="flex items-center my-px">
          <i class="i-ri:map-pin-line mx-2 opacity-60"></i>
          <span>{{ data.location }}</span>
        </div>

        <div v-if="data?.email" class="flex items-center my-px">
          <i class="i-ri:mail-line mx-2 opacity-60"></i>
          <a :href="`mailto:${data.email}`">{{ data.email }}</a>
        </div>
      </div>

      <div class="p-6 w-full bg-gray-100 dark:bg-gray-900">
        <a
          v-for="social in data?.socials"
          :key="social.icon"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-2 opacity-60 hover:opacity-100 transition duration-200"
        >
          <i :class="social.icon" class="text-2xl"></i>
        </a>
      </div>
    </div>
  </main>
</template>
