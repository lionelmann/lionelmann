// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-swiper','@nuxtjs/color-mode','@nuxt/content','nuxt-icon',['@nuxtjs/google-fonts', {
    families: {
      'Ubuntu': true,
      preload: true,
      prefetch: true,
      preconnect: true,
    },
    'Lora': true,
      preload: true,
      prefetch: true,
      preconnect: true,
    
  
    

  }]],
  content: {
    documentDriven: false
  },
  css: [
    "~/assets/_base.scss", "~/assets/_layout.scss",
  ],
  app: {
    head: {
      script: [{ src: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js' }],
    }
  }
  
})

