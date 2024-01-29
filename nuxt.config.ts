// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/image','nuxt-aos','@nuxtjs/color-mode','nuxt-icon',['@nuxtjs/google-fonts', {
    families: {
      'Ubuntu': true,
      'Lora': true,
      preload: true,
      prefetch: true,
      preconnect: true,
    }
  }],[
    '@nuxtjs/i18n',
    {
      locales: [
        {
          code: "fr", 
          file: "fr-CA.json"
        },
        {
          code: "en", 
          file: "en-CA.json"
        }
      ],
      lazy: true,
      defaultLocale: "en",
      langDir: "lang",
      compilation: {
        strictMessage: false,
      },
    }
  ]],
  
  css: [
    "~/assets/_base.scss", "~/assets/_layout.scss",
  ],
  
  app: {
    head: {
      title: "Lionel Mann",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Hi, I help people harmonise their business objectives with positive and memorable digital experiences." },
        { name: "format-detection", content: "telephone=no" },
  
        {
          hid: "description",
          name: "description",
          content: "Hi, I help people harmonise their business objectives with positive and memorable digital experiences.",
        },
  
        {
          hid: "og:title",
          name: "og:title",
          content: "Lionel Manm",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Lionel Mann",
        },
        { hid: "og:url", name: "og:url", content: "" },
        {
          hid: "og:description",
          name: "og:description",
          content: "Hi, I help people harmonise their business objectives with positive and memorable digital experiences.",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "",
        },
  
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Lionel Mann",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Hi, I help people harmonise their business objectives with positive and memorable digital experiences.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [{
        src: "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js",
        defer: true
      }],
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:color"; @import "~/assets/variables.scss";',
        },
      },
    }
  }
})
