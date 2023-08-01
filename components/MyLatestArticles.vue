<template>
  <section>
    <div class="container-default w-container">
      <div class="grid-2-columns">
        <div>
          <div class="subtitle">
            <span class="color-accent-1">/</span> Blog & Articles
          </div>
          <h2 class="display-3 mg-bottom-48px">
            Check out my latest articles and tutorials
          </h2>
          <LinkCTA
            text="Browse all articles"
            link="https://google.ca"
            size="24px"
          />
        </div>

        <div>
          <template v-for="item in educationItems" :key="item.id">
            <NuxtLink :to="item.link">
              <div class="flex">
                <div class="text-uppercase">{{ item.date }}</div>
                <div class="details-slash-divider">/</div>
                <div class="text-uppercase">{{ item.category }}</div>
              </div>
              <h3 class="display-5" v-html="item.title"></h3>
            </NuxtLink>
            <Divider />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const educationItems = [
  {
    title: "The Best IDE’s and Code Editors for Developers in 2022",
    date: "March 18, 2022",
    category: "Article",
    link: "articles/test1",
  },
  {
    title: "7 Great Web Development Languages to Learn this Year",
    date: "March 18, 2022",
    category: "Article",
    link: "https://google.ca",
  },
  {
    title: "How to Optimize your Website for Better Performance",
    date: "March 18, 2022",
    category: "Article",
    link: "https://google.ca",
  },
];
</script>

<style lang="scss" scoped>
section {
  background-color: rgba(45, 52, 63, 0.4);
  padding: 240px 0px 120px 0px;
}

.flex {
  display: flex;
  margin-bottom: 12px;
}

.mg-bottom-48px {
  margin-bottom: 48px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
