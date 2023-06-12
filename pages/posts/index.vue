<script lang="ts" setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/posts")
    .only(["_path", "title", "description", "createdAt", "updatedAt"])
    .find()
);

const { data: settings } = await useSettings();
</script>

<template>
  <main class="px-6 pt-12 w-3xl mx-auto">
    <p
      class="mb-10 text-gray-400/40 text-center text-3xl font-bold tracking-wide"
    >
      All Posts
    </p>

    <div
      v-for="post in posts"
      :key="post._path"
      class="flex flex-col text-center my-8 bg-gray-50 overflow-hidden drop-shadow-sm rounded-[12px]"
    >
      <NuxtLink
        :to="post._path"
        class="p-6 text-lg opacity-80 hover:opacity-100 break-words"
        >{{ post.title }}</NuxtLink
      >

      <div class="px-6 py-4 opacity-50 bg-gray-100">
        <p>Updated: {{ formatDate(post.updatedAt, settings?.timeZone) }}</p>
        <p>Created: {{ formatDate(post.createdAt, settings?.timeZone) }}</p>
      </div>
    </div>
  </main>
</template>
