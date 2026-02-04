// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ["aos/dist/aos.css"],
  build: {
    transpile: (import.meta.client && ["aos"]) || [],
  },
})
