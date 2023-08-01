// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-swiper','@nuxt/content', 'nuxt-icon',['@nuxtjs/google-fonts', {
    families: {
      'Space+Grotesk': true,
      preload: true,
      prefetch: true,
      preconnect: true,
      
    }
  }]],
  content: {
    documentDriven: true
  },
  css: [
    "~/assets/_base.scss",
  ],
  app: {
    head: {
      script: [{ src: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js' }],
    }
  }
  
})

