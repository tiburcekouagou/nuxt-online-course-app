// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxtjs/supabase"],
  typescript: {
    typeCheck: false
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      supabase: {
        redirectOptions: {
          login: '/login',
          callback: '/confirm',
          cookieRedirect: true,
        },
        cookieName: 'sb'
      }
    },
  },
})