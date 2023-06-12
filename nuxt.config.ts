// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@unocss/nuxt",
    "@vueuse/nuxt",
  ],

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],

  css: ["@unocss/reset/tailwind.css", "~/assets/styles/main.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  colorMode: {
    classSuffix: "",
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
