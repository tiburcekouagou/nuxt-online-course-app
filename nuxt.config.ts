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
    typeCheck: true
  },
  supabase: {
    url: process.env.SUPABASE_URL
  },
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL || 'http://localhost:3000'
    }
  }
})