<template>
  <NuxtLink
    :href="link"
    class="card"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :style="{
      opacity: !hover ? '0.80' : '1',
      transition: 'all 0.2s ease-in-out',
    }"
  >
    <div class="badges-wrapper">
      <div class="badge-primary" v-for="(badge, index) in badges" :key="index">
        {{ badge }}
      </div>
    </div>
    <div class="card-text-container">
      <div class="card-logo-wrapper">
        <img :src="logo" class="logo" />
      </div>
      <h2 class="display-5">
        {{ company }}
      </h2>
    </div>
    <img
      :src="thumb"
      class="card-thumbnail-image"
      :style="{
        transform: hover ? 'scale(1.1)' : 'scale(1)',
      }"
    />
  </NuxtLink>
</template>

<script setup>
const hover = ref(false);
const props = defineProps({
  badges: Array,
  company: String,
  logo: String,
  thumb: String,
  link: String,
});
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  background-color: #2d343f;
  border-radius: 28px;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  transition-property: transform;
  &:hover {
    transform: scale3d(1.04, 1.04, 1.01);
  }
}

.card-thumbnail-image {
  transition-property: transform;
  transform-style: preserve-3d;
  transition: transform 0.2s ease-in-out;
}

.badges-wrapper {
  position: absolute;
  top: 32px;
  right: 32px;
  display: grid;
  grid-auto-columns: 1fr;
  gap: 16px;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
}

.badge-primary {
  background-color: #5d6c83;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  padding: 14px 22px;
}

.card-text-container {
  position: relative;
  margin: 100px 34px -24px;
  max-width: 430px;
}

img {
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
}

.card-logo-wrapper {
  max-width: 140px;
  margin-bottom: 16px;
}

a {
  transition: all 300ms ease;
  text-decoration: none;
}
</style>
