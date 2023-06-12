// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/content", "@vueuse/nuxt"],

  css: ["@unocss/reset/tailwind.css", "~/assets/styles/main.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  content: {
    markdown: {
      anchorLinks: { depth: 6, exclude: [1] },
    },
  },

  postcss: {
    plugins: {
      "postcss-preset-env": {},
    },
  },
});
