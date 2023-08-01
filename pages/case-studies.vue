<template>
  <section class="top">
    <div class="container-default w-container">
      <div class="inner-container">
        <div class="center mg-bottom-80px">
          <div class="heading-top-line"></div>
          <h1 class="display-2">Case Studies</h1>
          <p class="color-neutral-300 mg-bottom-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit fames turpis
            pretium bibendum nisl est sagittis aliquam pretium nunc.
          </p>
        </div>
      </div>
      <div class="grid-2-columns">
        <CardCaseStudy
          :badges="['Nuxt', 'Wordpress', 'REST API']"
          company="Revive Engineering"
          logo="/logo-revive.svg"
          thumb="/thumbnail.png"
          link="/case-study/solar-panda"
        />
        <CardCaseStudy
          :badges="['Nuxt']"
          company="The Walrus and the Whistleblower"
          logo="/logo-bunbury.png"
          thumb="/thumbnail.png"
          link="/case-study/solar-panda"
        />
        <CardCaseStudy
          :badges="['Wordpress']"
          company="Nouvelle Querbes"
          logo="/logo-nq.png"
          thumb="/thumbnail.png"
          link="/case-study/solar-panda"
        />
        <CardCaseStudy
          :badges="['Wordpress']"
          company="Solar Panda"
          logo="/logo-solarpanda.png"
          thumb="/thumbnail.png"
          link="/case-study/solar-panda"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.top {
  padding-top: 94px;
  padding-bottom: 226px;
}

.inner-container {
  max-width: 636px;
  margin-right: auto;
  margin-left: auto;
}

.heading-top-line {
  max-width: 148px;
  min-height: 8px;
  margin-bottom: 48px;
  width: 100%;
  background-color: #fff;
  margin-right: auto;
  margin-left: auto;
}

.grid-2-columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 56px;
}

.mg-bottom-80px {
  margin-bottom: 80px;
}
</style>
