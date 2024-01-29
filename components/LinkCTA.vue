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
        name="heroicons:rocket-launch"
        :style="{
          transform: hover ? 'translate3d(3px, 0, 0)' : 'translate3d(0, 0, 0)',
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
  color: white;
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
  font-weight: 500;
  line-height: 1.417em;
  text-transform: uppercase;
}

.link-underline-wrapper {
  background-color: $highlight;
  margin-top: 2px;
}
.link-underline {
  min-height: 2px;
}

.icon {
  margin: 2px 0 0 0px;
  vertical-align: top;
}
</style>
