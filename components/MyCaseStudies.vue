<template>
  <section>
    <div class="container-default w-container">
      <div class="grid-2-columns title-and-cards">
        <div>
          <div class="mg-bottom-108px">
            <div class="subtitle">
              <span class="color-accent-1">/</span> Case Studies
            </div>
            <h2 class="display-3 mg-bottom-48px">My latest case studies</h2>
            <LinkCTA text="Browse all case studies" link="/case-studies" />
          </div>

          <CardCaseStudy
            class="margin-56px-bottom"
            :badges="['Vue', 'Wordpress', 'Nuxt']"
            company="Solar Panda"
            logo="/logo-solarpanda.png"
            thumb="/thumbnail.png"
            link="/case-study/solar-panda"
          />

          <CardCaseStudy
            class="margin-56px-bottom"
            :badges="['Vue', 'Wordpress']"
            company="ERA Architects"
            logo="/logo-outpost.svg"
            thumb="/thumbnail.png"
            link="/case-study/solar-panda"
          />
        </div>
        <div>
          <CardCaseStudy
            class="margin-56px-bottom"
            :badges="['Vue', 'Wordpress']"
            company="Revive Engineering"
            logo="/logo-revive.svg"
            thumb="/thumbnail.png"
            link="/case-study/solar-panda"
          />
          <CardCaseStudy
            class="margin-56px-bottom"
            :badges="['Vue', 'Wordpress']"
            company="Outpost Magazine"
            logo="/logo-outpost.svg"
            thumb="/thumbnail.png"
            link="/case-study/solar-panda"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  background-color: rgba(45, 52, 63, 0.4);
  padding-bottom: 240px;
}

.grid-2-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.title-and-cards {
  grid-column-gap: 52px;
  grid-row-gap: 32px;
}

.mg-bottom-48px {
  margin-bottom: 48px;
}

.mg-bottom-108px {
  margin-bottom: 108px;
}

.margin-56px-bottom {
  margin-bottom: 52px;
}
</style>
