<template>
  <div class="grid-testimonials" data-aos="fade-up">
    <slot></slot>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
.grid-testimonials {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 48px auto;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
}
</style>
