<template>
  <div>
    <div class="meta">{{ $t("howWeWork.tagline") }}</div>
    <h1>{{ $t("howWeWork.title") }}</h1>

    <Divider top="80px" bottom="96px" />
    <article>
      <h6>{{ $t("howWeWork.background.title") }}</h6>
      <div v-html="$t('howWeWork.background.content')"></div>

      <h6>{{ $t("howWeWork.approach.title") }}</h6>
      <div v-html="$t('howWeWork.approach.content')"></div>

      <h6>{{ $t("howWeWork.costs.title") }}</h6>
      <div v-html="$t('howWeWork.costs.content')"></div>

      <h6>{{ $t("howWeWork.development.title") }}</h6>
      <div v-html="$t('howWeWork.development.content')"></div>

      <h6>{{ $t("howWeWork.design.title") }}</h6>
      <div v-html="$t('howWeWork.design.content')"></div>

      <h6>{{ $t("howWeWork.other.title") }}</h6>
      <div v-html="$t('howWeWork.other.content')"></div>

      <LinkCTA
        :text="$t('bookmybrain')"
        link="https://calendly.com/lionelmann/one-on-one"
        target="_blank"
        size="23px"
      />

      <span class="spacer"></span>

      <LinkCTA
        :text="$t('email')"
        link="mailto:lionelmann@gmail.com"
        target="_blank"
        size="23px"
      />
    </article>

    <Divider top="80px" bottom="96px" />

    <div class="grid-testimonials" data-aos="fade-up">
      <MyTestimonials
        v-for="(testimonial, index) in cherryPickedTestimonials([
          4, 5, 6, 7, 8, 9,
        ])"
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

<style lang="scss" scoped>
h6 {
  margin-top: 96px;
}

.spacer {
  margin-right: 32px;
}

:deep(.link) {
  color: inherit;
  text-decoration: none;
  border-bottom: 2px solid $highlight;
  padding-bottom: 2px;
  &:hover {
    color: white;
  }
}
</style>
