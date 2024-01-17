<template>
  <section>
    <div class="container-default w-container">
      <p class="meta">
        Team-oriented, development lead with 10+ years experience
      </p>
      <h1 class="display-1">The Continuum</h1>

      <MyExperience />

      <Divider top="8px" bottom="96px" />

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
  </section>
</template>

<script setup>
import testimonials from "~/assets/json/testimonials.json";
</script>

<style scoped lang="scss">
section {
  padding-top: 80px;
}
.grid-testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin: 48px auto;
}

.meta {
  color: rgb(65 190 117);
  font: normal 700 18px/150% Ubuntu;
  letter-spacing: -0.02rem;
  text-transform: uppercase;
}
</style>
