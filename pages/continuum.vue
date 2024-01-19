<template>
  <div>
    <div class="meta">
      Team-oriented, development lead with 10+ years experience
    </div>
    <h1>The Continuum</h1>

    <Divider top="80px" bottom="96px" />

    <div class="grid-testimonials">
      <MyTestimonialsRevised
        v-for="(testimonial, index) in testimonials.slice(6, 8)"
        :key="index"
        :testimonial="testimonial"
      />
    </div>

    <Divider top="96px" bottom="96px" />

    <MyExperience />

    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials">
      <MyTestimonialsRevised
        v-for="(testimonial, index) in testimonials.slice(0, 2)"
        :key="index"
        :testimonial="testimonial"
      />
    </div>

    <Divider top="96px" bottom="96px" />

    <MyEducation />

    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials">
      <MyTestimonialsRevised
        v-for="(testimonial, index) in testimonials.slice(0, 4)"
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
.meta {
  color: rgb(65 190 117);
  font: normal 500 18px/150% Ubuntu;
  letter-spacing: -0.02rem;
  text-transform: uppercase;
}
</style>
