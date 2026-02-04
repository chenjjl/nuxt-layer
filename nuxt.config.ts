// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  plugins: [
    '~/app/plugins/useAos.client.ts' // 加上 .client 表示只在客户端运行
  ],
  css: ["aos/dist/aos.css"],
  build: {
    transpile: (import.meta.client && ["aos"]) || [],
  },
})
