<template>
  <section>
    <div class="container-default w-container">
      <div class="grid-2-columns">
        <div>
          <div class="subtitle">
            <span class="color-accent-1">/</span> Testimonials
          </div>
          <h2 class="display-3">
            What clients and coworkers say about my work
          </h2>
        </div>
        <LinkCTA text="Get in Touch" link="/contact" />
      </div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :navigation="true"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-100%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial"
        >
          <img
            :src="testimonial.image"
            :alt="testimonial.name"
            class="testimonial-image-left"
          />

          <div class="testimonial-text-right">
            <img
              style="max-width: 250px"
              :src="testimonial.logo"
              loading="eager"
              alt="Outpost Logo"
              class="mg-bottom-40px"
            />
            <p class="display-5-custom mg-bottom-56px">
              {{ testimonial.quote }}
            </p>
            <div class="text-400 bold text-uppercase">
              <span class="color-accent-1">/</span> {{ testimonial.name }}
            </div>
            <div class="text-300 text-uppercase mg-top-8px">
              {{ testimonial.role }}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    image: "/t-chrisfrey.jpg",
    logo: "/logo-outpost.svg",
    name: "Chris Frey",
    quote:
      "“...Lionel was critical in helping us develop an overall strategy, site architecture, and doing the technical dirty work. If Lionel were a car mechanic, he'd be as happy under the hood, tooling with the engine, as he would be obsessed with design detailing... ”",
    role: "Founder Outpost, now at No Media Co.",
  },

  {
    image: "/t-nataliakantor.jpeg",
    logo: "/logo-planetinfocus.png",
    name: "Natalia Kantor",
    quote:
      "“...Lionel is a reliable, accessible and inventive web programmer with amazing problem solving skills and fun personality. Lionel is also a great instructor when it comes to WordPress... ”",
    role: "Communications Manager, Planet in Focus",
  },
  {
    image: "/t-stevehurtado.jpeg",
    logo: "/logo-google.svg",
    name: "Steve Hurtado",
    quote:
      "“I had the pleasure of working with Lionel while I was at Convio, from almost two thousand miles away. He was technically proficient, knowledgeable about what the product could and could not do, a good communicator, and was always professional and fun to work with...”",
    role: "Global Incubation Lead",
  },
  {
    image: "/t-cathymoore.jpg",
    logo: "/logo-ccs.svg",
    name: "Cathy Moore",
    quote:
      "“...In his time at CCS, Lionel developed a track record of researching and presenting innovative ideas in such a way that they were easily understandable, actionable and measurable, and of successfully managing the resulting projects from conception through completion... ”",
    role: "Director, Online at Canadian Cancer Society",
  },
];
</script>
<style>
.testimonial {
  display: grid;
  grid-template-columns: 1fr 1.42fr;
  gap: 28px;
  border-radius: 0px;
  background-color: transparent;
}
@media (max-width: 768px) {
  .testimonial {
    grid-template-columns: 1fr;
  }
}

.testimonial-image-left {
  height: 100%;
  max-height: 492px;
  min-height: 492px;
  width: 100%;
  border-radius: 28px;
  object-fit: cover;
  /*filter: grayscale(100%);*/
}

.testimonial-text-right {
  max-width: 638px;
  /*margin-top: 22px;*/
  margin-bottom: 80px;
  justify-self: end;
}

.grid-2-columns {
  grid-template-columns: 1.5fr 1fr;
  margin-bottom: 64px;
}

@media (max-width: 768px) {
  .grid-2-columns {
    grid-template-columns: 1fr;
  }
}

.mg-bottom-40px {
  margin-bottom: 40px;
}

.mg-bottom-56px {
  margin-bottom: 56px;
}

.text-400 {
  font-size: 24px;
  line-height: 1.083em;
}

.text-400.bold {
  color: #fff;
  font-weight: 700;
}

.text-300 {
  font-size: 20px;
  line-height: 1.1em;
}

.text-300.text-uppercase {
  letter-spacing: 0.06em;
}

.mg-top-8px {
  margin-top: 8px;
}
.display-5-custom {
  color: #fff;
  font-size: 26px;
  font-weight: 400;
}

/* the new container */
.swiper-container {
  position: relative;
  width: 100%;
  padding: 0 40px;
}

/* fix the buttons positions */

.swiper-button-next,
.swiper-button-prev {
  top: 25px;
  right: 0;
  width: 72px;
  height: 72px;
  min-height: 72px;
  min-width: 72px;
  padding-left: 6px;
  background-color: #075fe4;
  color: white;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.swiper-button-prev {
  left: auto;
  right: 90px;
  top: 25px;
  padding-right: 8px;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 24px;
  font-weight: 700;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #2d343f;
  transform: scale3d(0.94, 0.94, 1.01);
}
</style>
