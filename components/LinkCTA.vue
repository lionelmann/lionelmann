<template>
  <NuxtLink
    class="link-wrapper"
    :to="link"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="heading-h3-size" :style="{ fontSize: size }">
      {{ text }}
      <Icon
        name="heroicons:arrow-right"
        color="white"
        :style="{
          transform: hover ? 'translate3d(4px, 0, 0)' : 'translate3d(0, 0, 0)',
          transition: 'transform 300ms ease',
        }"
      />
    </div>
    <div class="link-underline-wrapper">
      <div
        class="link-underline"
        :style="{
          width: hover ? '100%' : '0',
          backgroundColor: hover ? '#fff' : '#fff',
          transition: 'width 300ms ease, background-color 300ms ease',
        }"
      ></div>
    </div>
  </NuxtLink>
</template>

<script setup>
const hover = ref(false);

const props = defineProps({
  link: String,
  text: String,
  size: String,
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.link-wrapper {
  display: inline-block;
  margin-bottom: 12px;
  white-space: nowrap;
  justify-self: end;
  align-self: end;
}

@media (max-width: 767px) {
  .link-wrapper {
    justify-self: start;
    align-self: start;
  }
}
.heading-h3-size {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.417em;
}

.link-underline-wrapper {
  background-color: #5d6c83;
  margin-top: 6px;
}
.link-underline {
  min-height: 3px;
}
</style>
