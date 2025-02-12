// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  devServer: {
    host: 'realtime-nuxt-laravel.test'
  },

  plugins: [
      '~/plugins/laravel-echo.client'
  ],

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      REVERB_KEY: process.env.REVERB_KEY,
      REVERB_HOST: process.env.REVERB_HOST,
    }
  },

  modules: ['nuxt-auth-sanctum'],

  sanctum: {
    baseUrl: process.env.API_URL,
  },
})