<template>
  <nav>
    <ul class="menu">
      <li
        @mouseover="
          (hoverHome = false),
            (hoverAbout = true),
            (hoverCaseStudies = true),
            (hoverContact = true)
        "
        @mouseleave="
          (hoverHome = false),
            (hoverAbout = false),
            (hoverCaseStudies = false),
            (hoverContact = false)
        "
        :style="{
          opacity: hoverHome ? '0.35' : '1',
          transition: 'opacity 300ms ease',
        }"
      >
        <NuxtLink :to="localePath('how-i-work')">{{ $t("menu.one") }}</NuxtLink>
      </li>

      <li
        v-show="header == false"
        @mouseover="
          (hoverHome = true),
            (hoverAbout = false),
            (hoverCaseStudies = true),
            (hoverContact = true)
        "
        @mouseleave="
          (hoverHome = false),
            (hoverAbout = false),
            (hoverCaseStudies = false),
            (hoverContact = false)
        "
        :style="{
          opacity: hoverAbout ? '0.35' : '1',
          transition: 'opacity 300ms ease',
        }"
      >
        <NuxtLink :to="localePath('/continuum')">{{
          $t("menu.four")
        }}</NuxtLink>
      </li>
      <li
        @mouseover="
          (hoverHome = true),
            (hoverAbout = true),
            (hoverCaseStudies = false),
            (hoverContact = true)
        "
        @mouseleave="
          (hoverHome = false),
            (hoverAbout = false),
            (hoverCaseStudies = false),
            (hoverContact = false)
        "
        :style="{
          opacity: hoverCaseStudies ? '0.35' : '1',
          transition: 'opacity 300ms ease',
        }"
      >
        <NuxtLink :to="localePath('/ethics')">{{ $t("menu.two") }}</NuxtLink>
      </li>
      <!--<li
        @mouseover="
          (hoverHome = true),
            (hoverAbout = true),
            (hoverCaseStudies = true),
            (hoverContact = false)
        "
        @mouseleave="
          (hoverHome = false),
            (hoverAbout = false),
            (hoverCaseStudies = false),
            (hoverContact = false)
        "
        :style="{
          opacity: hoverContact ? '0.35' : '1',
          transition: 'opacity 300ms ease',
        }"
      >
        <a href="https://calendly.com/lionelmann/one-on-one" target="_blank"
          >{{ $t("menu.three") }}
        </a>
        <Icon
          name="heroicons:rocket-launch"
          color="white"
          style="font-size: 19px; vertical-align: top; margin: 2px 0 0 4px"
        />
      </li>-->

      <li>
        <NuxtLink
          class="toggle"
          v-if="$i18n.locale !== 'en'"
          :to="switchLocalePath('en')"
        >
          <Icon name="heroicons:globe-alt" /> EN
        </NuxtLink>

        <NuxtLink
          class="toggle"
          v-if="$i18n.locale !== 'fr'"
          :to="switchLocalePath('fr')"
        >
          <Icon name="heroicons:globe-alt" /> FR
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps(["header"]);
const hoverHome = ref(false);
const hoverAbout = ref(false);
const hoverCaseStudies = ref(false);
const hoverContact = ref(false);
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.menu {
  z-index: 1;
  display: flex;
  margin-bottom: 0px;
  padding-left: 0px;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
  text-transform: uppercase;
}

.menu li {
  display: inline-block;
  margin-bottom: 0px;
  padding-left: 32px;
}

.menu li a {
  text-decoration: none;
  padding: 0px;
  color: #f0f2f4;
  font-size: 1rem;
  position: relative;
  display: inline-block;
  vertical-align: top;
  border-bottom: 2px solid $highlight;
  &.toggle {
    border-bottom: none;
  }
}

.menu li:nth-child(1) {
  padding-left: 0px;
}
</style>
