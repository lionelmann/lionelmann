<template>
  <a href="" class="card">
    <Icon :name="icon" color="#075fe4" size="75px" class="icon" />

    <h3 class="display-4">{{ title }}</h3>
    <p>
      {{ description }}
    </p>
    <LinkCTA
      v-if="link"
      text="View Github"
      link="https://google.ca"
      size="18px"
    />
  </a>
</template>

<script setup>
const props = defineProps({
  icon: String,
  title: String,
  description: String,
  link: Boolean,
});
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  color: white;
  text-decoration: none;
}
.card {
  border-radius: 28px;
  background-color: #2d343f;
  margin-top: 120px;
  padding: 120px 40px 88px;
  transition: transform 300ms ease;
  opacity: 0.8;
  min-height: 520px;
}

.card:hover {
  transform: scale3d(1.04, 1.04, 1.01);
  opacity: 1;
}

.icon {
  margin-bottom: 24px;
}

.icon path {
  fill: #075fe4;
}
</style>
