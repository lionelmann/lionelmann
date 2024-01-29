<template>
  <div>
    <div class="meta">
      {{ $t("work.tagline") }}
    </div>
    <h1>{{ $t("work.title") }}</h1>

    <Divider top="80px" bottom="96px" />

    <div class="grid-testimonials" data-aos="fade-up">
      <MyTestimonials
        v-for="(testimonial, index) in cherryPickedTestimonials([8, 9])"
        :key="index"
        :testimonial="testimonial"
      />
    </div>

    <Divider top="96px" bottom="96px" />

    <MyExperience />

    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials" data-aos="fade-up">
      <MyTestimonials
        v-for="(testimonial, index) in cherryPickedTestimonials([1, 2])"
        :key="index"
        :testimonial="testimonial"
      />
    </div>

    <Divider top="96px" bottom="96px" />

    <MyEducation data-aos="fade-up" />

    <Divider top="96px" bottom="96px" />

    <div class="grid-testimonials" data-aos="fade-up">
      <MyTestimonials
        v-for="(testimonial, index) in cherryPickedTestimonials([5, 6, 7, 8])"
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
<style scoped lang="scss"></style>
