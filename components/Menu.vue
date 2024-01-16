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
        <NuxtLink to="/">How I Work</NuxtLink>
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
        <NuxtLink to="/continuum">The Continuum</NuxtLink>
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
        <NuxtLink to="/case-studies">Ethics</NuxtLink>
        <!--<NuxtLink to="/case-studies">Case Studies</NuxtLink>-->
      </li>
      <li
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
        <NuxtLink to="/case-studies">Book a Call</NuxtLink>
      </li>
      <!--<li>
        <h1>Color mode: {{ $colorMode.value }}</h1>
        <select v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
      </li>-->
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps(["header"]);

const colorMode = useColorMode();
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
  border-bottom: 2px solid rgb(65 190 117);
}

.menu li:nth-child(1) {
  padding-left: 0px;
}
</style>
