// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/color-mode'],
  devtools: { enabled: true },
  css: ['animate.css/animate.min.css'],
  runtimeConfig: {
    public: {
      apiBase: ''
    }
  }
})
