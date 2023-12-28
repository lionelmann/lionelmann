<template>
  <TheHeader />

  <div class="container-default w-container">
    <MyExperience />

    <div class="grid-testimonials">
      <MyTestimonialsRevised
        v-for="(testimonial, index) in testimonials.slice(0, 2)"
        :key="index"
        :testimonial="testimonial"
      />
    </div>
    <MyEducation />
  </div>

  <!--<MySkills />-->
  <!--<MyCaseStudies />-->

  <!--<MyLatestArticles />-->

  <!--<MyTools />-->

  <div class="container-default w-container">
    <Divider top="96px" bottom="96px" />
    <div class="grid-testimonials">
      <MyTestimonialsRevised
        v-for="(testimonial, index) in testimonials.slice(0, 4)"
        :key="index"
        :testimonial="testimonial"
      />
    </div>
  </div>
  <TheFooter />
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
