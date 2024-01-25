// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-swiper', 'nuxt-aos','@nuxtjs/color-mode','nuxt-icon',['@nuxtjs/google-fonts', {
    families: {
      'Ubuntu': true,
      'Lora': true,
      preload: true,
      prefetch: true,
      preconnect: true,
    }
  }]],
  content: {
    documentDriven: false
  },
  css: [
    "~/assets/_base.scss", "~/assets/_layout.scss",
  ],
  
  app: {
    head: {
      script: [{ src: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js' },  {
        src: "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js",
        defer: true
      }],
    }
  }
  
})

