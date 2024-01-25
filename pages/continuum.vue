<template>
  <div>
    <div class="meta">
      Team-oriented, development lead with 10+ years experience
    </div>
    <h1>The Continuum</h1>

    <Divider top="80px" bottom="96px" />

    <div class="grid-testimonials">
      <MyTestimonials
        v-for="(testimonial, index) in getCherryPickedTestimonials([8, 9])"
        :key="index"
        :testimonial="testimonial"
      />
    </div>

    <Divider top="96px" bottom="96px" />

    <MyExperience />

    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials">
      <MyTestimonials
        v-for="(testimonial, index) in getCherryPickedTestimonials([1, 2])"
        :key="index"
        :testimonial="testimonial"
      />
    </div>

    <Divider top="96px" bottom="96px" />

    <MyEducation />

    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials">
      <MyTestimonials
        v-for="(testimonial, index) in getCherryPickedTestimonials([
          5, 6, 7, 8,
        ])"
        :key="index"
        :testimonial="testimonial"
      />
    </div>
  </div>
</template>

<script setup>
import { getCherryPickedTestimonials } from "~/utils/testimonials";
</script>

<style scoped lang="scss"></style>
