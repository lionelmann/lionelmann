<template>
  <TheHero />

  <div class="container-default w-container">
    <Divider top="96px" bottom="96px" />
    <MyClients />
    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials">
      <MyTestimonialsRevised
        v-for="(testimonial, index) in testimonials.slice(0, 2)"
        :key="index"
        :testimonial="testimonial"
      />
    </div>

    <Divider top="96px" bottom="96px" />
    <Principles />
    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials">
      <MyTestimonialsRevised
        v-for="(testimonial, index) in testimonials.slice(3, 7)"
        :key="index"
        :testimonial="testimonial"
      />
    </div>

    <Divider top="96px" bottom="96px" />
    <About />
    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials">
      <MyTestimonialsRevised
        v-for="(testimonial, index) in testimonials.slice(8, 10)"
        :key="index"
        :testimonial="testimonial"
      />
    </div>
  </div>
</template>

<script setup>
import testimonials from "~/assets/json/testimonials.json";
</script>

<style scoped lang="scss">
.grid-testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin: 48px auto;
}
</style>
