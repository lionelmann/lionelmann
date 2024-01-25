<template>
  <div>
    <div class="meta">The Nitty Gritty</div>
    <h1>How I Work</h1>

    <Divider top="80px" bottom="96px" />
    <article>
      <h6>Background</h6>
      <p>
        I am a developer who knows design practices such as typography, colours,
        layout and knows good design when I see it, but am not a "designer" per
        say. and typically takes on end-to-end design and development projects.
      </p>

      <p>
        As standard, the websites I produce are bespoke and tailored to you.
        They're fast, clear, inclusive, privacy-respecting and low carbon by
        default.
      </p>
      <p>
        I can help with strategy, UX and UI design, development, user experience
        and brand refinement. Over the years, I've developed an extensive
        network of expert partners who can provide additional services.
      </p>

      <h6>Working Together</h6>
      <p>
        Most of my work is project-based, but I'm available for development
        retainers, too. Retainers are based on guaranteeing an agreed number of
        days per month. I don't oversell my time.
      </p>

      <p>
        While we're working on a project, I recommend we book a regular meeting
        to help keep things moving. This is usually weekly - especially during
        the initial phase of a project - but we can agree the cadence to suit.
        For support retainers, these meetings may be more occasional - perhaps
        every quarter.
      </p>

      <p>
        I give clients plenty of opportunity to review and feedback on my work.
        Almost all design work is presented through video to talk you through
        the thinking and decisions. I regularly hear from clients that this
        format is incredibly useful. You will also be given access to software
        to drop comments directly onto designs.
      </p>

      <h6>Estimates + Rates</h6>
      <p>
        Estimating projects is always a challenge. We'll likely have a clear
        idea of a project's goals early in our discussions, but there are
        invariably unknowns and our understanding of the best solutions will
        evolve as we work.
      </p>

      <p>
        With this in mind, I usually quote estimates based on a day rate rather
        than a fixed price. Adopting this flexible approach lets us focus on
        delivering the most appropriate solution as we discover more.
      </p>

      <p>
        If a fixed quote is a requirement, I will recommend a short discovery
        project (1-5 days). The result of this will be a fixed scope at a fixed
        cost.
      </p>

      <p>
        My day rates are based on a 5-hour work day and I only bill for the time
        worked.
      </p>

      <h6>Development</h6>
      <p>
        In many cases, I recommend using WordPress as the content management
        system to power your site.
      </p>

      <p>
        We can use a different CMS if that's a better fit for the project, and
        can recommend developers where appropriate.
      </p>

      <p>
        If you already have a designer, I'm happy to offer development-only
        services and collaborate with them.
      </p>

      <h6>Design</h6>
      <p>
        If you already have a designer, I'm happy to offer development-only
        services and collaborate with them.
      </p>

      <h6>Collaboartion</h6>
      <p>
        Over the years, I've developed an extensive network of expert partners
        who can provide additional services. Typically, this might include
        copywriters, developers and illustrators, but it depends on the project.
      </p>

      <p>
        If you would like to discuss a project or have any questions, feel free
        to get in touch.
      </p>

      <LinkCTA
        text="Book My Brain"
        link="https://calendly.com/lionelmann/one-on-one"
        target="_blank"
        size="23px"
      />

      <span class="spacer"></span>

      <LinkCTA
        text="Email Me"
        link="mailto:lionelmann@gmail.com"
        target="_blank"
        size="23px"
      />
    </article>

    <Divider top="80px" bottom="96px" />

    <div class="grid-testimonials" data-aos="fade-up">
      <MyTestimonials
        v-for="(testimonial, index) in getCherryPickedTestimonials([
          4, 5, 6, 7, 8, 9,
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

<style lang="scss" scoped>
h6 {
  margin-top: 96px;
}

.spacer {
  margin-right: 32px;
}
</style>
