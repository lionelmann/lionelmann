// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-gtag','@nuxt/image','nuxt-aos','nuxt-icon',['@nuxtjs/google-fonts', {
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
  image: {
    domains: ['localhost']
  },
  
  css: [
    "~/assets/_base.scss", "~/assets/_layout.scss",
  ],
  gtag: {
    id: 'G-Y4146R4STR',
    config: {
      page_title: 'Lionel Mann'
    }
  },
  
  app: {
    head: {
      title: "Lionel Mann",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Helping people move their web projects from A to Z (and everything in between)" },
        { name: "format-detection", content: "telephone=no" },
  
        {
          hid: "description",
          name: "description",
          content: "Helping people move their web projects from A to Z (and everything in between)",
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
          content: "Helping people move their web projects from A to Z (and everything in between)",
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
          content: "Helping people move their web projects from A to Z (and everything in between)",
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
      link: [
      {rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      {rel: "icon", type: "image/png", href: "/favicon.png" }],
      script: [{
        src: "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js",
        defer: true,
        body: true
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
