<template>
  <div>
    <div class="container-default w-container">
      <h1 class="display-1">The Continuum</h1>
    </div>

    <MyExperience />

    <!--<div class="heading-top-line-large"></div>-->
    <!--<h1 class="display-2">
            Team-oriented, development lead with 10<span class="color-accent-1"
              >+</span
            >
            years experience; based in Montreal, Canada.
          </h1>-->

    <!--<Divider top="96px" bottom="96px" />-->
    <!--<div class="grid-2-columns even">
            <div class="flex">
              <div class="display-2 mg-right-16px">
                10<span class="color-accent-1">+</span>
              </div>
              <div class="text-300 bold">Years of experience</div>
            </div>
            <div class="flex">
              <div class="display-2 mg-right-16px">
                100<span class="color-accent-1">+</span>
              </div>
              <div class="text-300 bold">Successful Projects</div>
            </div>
          </div>
        </div>-->

    <!--<img
          src="https://avatars.githubusercontent.com/u/1795752?v=4"
          class="avatar-circle"
        />-->

    <div class="grid-testimonials container-default w-container">
      <MyTestimonialsRevised
        v-for="(testimonial, index) in testimonials.slice(0, 2)"
        :key="index"
        :testimonial="testimonial"
      />
    </div>

    <MyEducation />
  </div>

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
