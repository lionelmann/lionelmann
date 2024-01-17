<template>
  <div class="grid-container">
    <div>
      <h3 class="f-h3">ABOUT ME</h3>
      <p>
        I work at an independent UX/UI designer and frontend developer working
        with organisations, startups and purpose-driven businesses. I help my
        clients create positively memorable web experiences that balance
        organisational goals with the needs of their users.
      </p>
      <p>
        As standard, the websites I produce are bespoke and tailored to you.
        They're fast, clear, inclusive, privacy-respecting, mobile-friendly and
        low carbon by default.
      </p>
      <p>
        I can help with strategy, UX and UI design, development, user experience
        and brand refinement. Over the years, I've developed an extensive
        network of expert partners who can provide additional services.
      </p>
      <p>
        It’s rare – but not impossible – for full design and development
        projects to take less than $5,000 CAN of time and effort.
      </p>
      <p>Want to discuss a project? Drop me a line: hello@lionelmann.ca</p>
    </div>
    <div>
      <h3 class="f-h3">I can help with</h3>
      <ul>
        <li>Strategy</li>
        <li>Project Management</li>
        <li>Web Development</li>
        <li>User Experience</li>
        <li>Design</li>
        <li>Site Audit</li>
        <li>Web Standards</li>
        <li>Bugs & Troubleshooting</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 96px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.grid-container > div:last-child {
  border-left: 1px solid #3d4757; /* Adjust the color and size as needed */
  padding-left: 62px;
  @media (max-width: 768px) {
    padding-left: 0px;
    border: none;
  }
}

p,
li {
  font-size: 1.3rem;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #969ba6;
}

li {
  padding: 4px 0;
}

.f-h3 {
  text-transform: uppercase;
}
</style>
