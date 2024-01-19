<template>
  <div>
    <div class="meta">The Nitty Gritty</div>
    <h1>How I Work</h1>

    <Divider top="80px" bottom="96px" />
    <article>
      <h6 class="uppercase">Background</h6>
      <p>
        I am a designer who codes and typically takes on end-to-end design and
        development projects.
      </p>

      <p>
        As standard, the websites I produce are bespoke and tailored to you.
        They’re fast, clear, inclusive, privacy-respecting and low carbon by
        default.
      </p>
      <p>
        I can help with strategy, UX and UI design, development, user experience
        and brand refinement. Over the years, I’ve developed an extensive
        network of expert partners who can provide additional services.
      </p>

      <h6 class="uppercase">Working Together</h6>
      <p>
        Most of my work is project-based, but I’m available for design and
        development retainers, too. Retainers are based on guaranteeing an
        agreed number of days per month. I don’t oversell my time.
      </p>

      <p>
        While we’re working on a project, I recommend we book a regular meeting
        to help keep things moving. This is usually weekly – especially during
        the design phase of a project – but we can agree the cadence to suit.
        For support retainers, these meetings may be more occasional – perhaps
        every quarter.
      </p>

      <p>
        I give clients plenty of opportunity to review and feedback on my work.
        Almost all design work is presented through video to talk you through
        the thinking and decisions. I regularly hear from clients that this
        format is incredibly useful. You will also be given access to software
        to drop comments directly onto designs.
      </p>

      <h6 class="uppercase">Estimates + Rates</h6>
      <p>
        Estimating projects is always a challenge. We’ll likely have a clear
        idea of a project’s goals early in our discussions, but there are
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
        project (1–5 days). The result of this will be a fixed scope at a fixed
        cost.
      </p>

      <p>
        My day rates are based on a 5-hour work day and I only bill for the time
        worked.
      </p>

      <h6 class="uppercase">Development</h6>
      <p>
        In many cases, I recommend using Statamic as the content management
        system to power your site. I’m a Statamic Partner and helped redesign
        the Statamic 3 documentation site.
      </p>

      <p>
        We can use a different CMS if that’s a better fit for the project, and
        can recommend developers where appropriate.
      </p>

      <p>
        If you already have a developer, I’m happy to offer design-only services
        and collaborate with them.
      </p>

      <p>As a general rule, I don’t take on development-only work.</p>

      <h6 class="uppercase">Collaboartion</h6>
      <p>
        Over the years, I’ve developed an extensive network of expert partners
        who can provide additional services. Typically, this might include
        copywriters, developers and illustrators, but it depends on the project.
      </p>

      <h6 class="uppercase">Let's Chat</h6>
      <p>
        If you would like to discuss a project or have any questions, feel free
        to get in touch.
      </p>

      <LinkCTA
        text="Book a Call"
        link="https://calendly.com/lionelmann/one-on-one"
        target="_blank"
        size="23px"
      />

      <LinkCTA
        text="Email Me"
        link="mailto:lionelmann@gmail.com"
        target="_blank"
        size="23px"
      />
    </article>

    <Divider top="80px" bottom="96px" />

    <div class="grid-testimonials">
      <MyTestimonialsRevised
        v-for="(testimonial, index) in testimonials.slice(0, 6)"
        :key="index"
        :testimonial="testimonial"
      />
    </div>
  </div>
</template>

<script setup>
import testimonials from "~/assets/json/testimonials.json";
</script>

<style lang="scss" scoped>
p {
  color: #969ba6;
  font-size: 23px;
  line-height: 150%;
  margin-bottom: 1.2em;
}

h6 {
  margin-top: 96px;
}
</style>
