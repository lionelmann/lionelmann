<template>
  <section id="tools">
    <div class="container-default w-container">
      <div class="grid-2-columns">
        <div>
          <div class="subtitle">
            <span class="color-accent-1">/</span> My Tools
          </div>
          <h2 class="display-3">Discover what tools I use for work</h2>
        </div>
      </div>

      <Swiper
        class="w-slides"
        :modules="[SwiperNavigation]"
        :slides-per-view="3"
        :loop="true"
        :navigation="true"
        :breakpoints="{
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          440: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
        }"
      >
        <SwiperSlide v-for="(tool, index) in tools" :key="index">
          <Card
            :title="tool.title"
            :description="tool.description"
            :link="tool.link"
            :icon="tool.icon"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
const tools = [
  {
    icon: "cib:github",
    title: "Vue",
    description:
      "Lorem ipsum dolor sit amet dolor sitolme almo consectet adipiscing elit.",
    link: false,
  },
  {
    icon: "vscode-icons:file-type-vscode2",
    title: "VSCode",
    description:
      "Lorem ipsum dolor sit amet dolor sitolme almo consectet adipiscing elit.",
    link: true,
  },
  {
    icon: "tabler:brand-github-copilot",
    title: "GitHub Copilot",
    description:
      "Lorem ipsum dolor sit amet dolor sitolme almo consectet adipiscing elit.",
    link: true,
  },
  {
    icon: "cib:github",
    title: "GitHub",
    description:
      "Lorem ipsum dolor sit amet dolor sitolme almo consectet adipiscing elit.",
    link: true,
  },
  {
    icon: "cib:github",
    title: "Linode",
    description:
      "Lorem ipsum dolor sit amet dolor sitolme almo consectet adipiscing elit.",
    link: true,
  },
  {
    icon: "cib:github",
    title: "Figma",
    description:
      "Lorem ipsum dolor sit amet dolor sitolme almo consectet adipiscing elit.",
    link: true,
  },
  {
    icon: "cib:github",
    title: "ChatGPT-4",
    description:
      "Lorem ipsum dolor sit amet dolor sitolme almo consectet adipiscing elit.",
    link: true,
  },
  {
    icon: "cib:github",
    title: "WordPress",
    description:
      "Lorem ipsum dolor sit amet dolor sitolme almo consectet adipiscing elit.",
    link: true,
  },
  {
    icon: "cib:github",
    title: "Terminal",
    description:
      "Lorem ipsum dolor sit amet dolor sitolme almo consectet adipiscing elit.",
    link: true,
  },
  {
    icon: "cib:github",
    title: "WP CLI",
    description:
      "Lorem ipsum dolor sit amet dolor sitolme almo consectet adipiscing elit.",
    link: true,
  },
  {
    icon: "cib:github",
    title: "My CLI",
    description:
      "Lorem ipsum dolor sit amet dolor sitolme almo consectet adipiscing elit.",
    link: true,
  },
];
</script>

<style>
#tools {
  padding-bottom: 240px;
}

#tools .swiper {
  overflow: visible;
}

@media (max-width: 768px) {
  #tools .swiper {
    overflow: hidden;
  }
}
</style>
