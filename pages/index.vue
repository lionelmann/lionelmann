<template>
  <div>
    <TheHero />

    <Divider top="96px" bottom="96px" />
    <MyClients data-aos="fade-up" />
    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials" data-aos="fade-up">
      <MyTestimonials
        v-for="(testimonial, index) in cherryPickedTestimonials([0, 1])"
        :key="index"
        :testimonial="testimonial"
      />
    </div>

    <Divider top="96px" bottom="96px" />
    <Principles data-aos="fade-up" />
    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials" data-aos="fade-up">
      <MyTestimonials
        v-for="(testimonial, index) in cherryPickedTestimonials([2, 3])"
        :key="index"
        :testimonial="testimonial"
      />
    </div>

    <Divider top="96px" bottom="96px" />
    <About data-aos="fade-up" />
    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials" data-aos="fade-up">
      <MyTestimonials
        v-for="(testimonial, index) in cherryPickedTestimonials([4, 5, 6, 7])"
        :key="index"
        :testimonial="testimonial"
      />
    </div>
  </div>
</template>

<script setup>
import { getCherryPickedTestimonialsEN } from "~/utils/testimonials_en";
import { getCherryPickedTestimonialsFR } from "~/utils/testimonials_fr";

const { locale } = useI18n();
const currentLocale = locale.value;

const cherryPickedTestimonials =
  currentLocale === "en"
    ? getCherryPickedTestimonialsEN
    : getCherryPickedTestimonialsFR;
</script>

<style scoped lang="scss">
.grid-testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin: 48px auto;
}
</style>
