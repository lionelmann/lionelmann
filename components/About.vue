<template>
  <div class="grid-container">
    <div>
      <h6>About Me</h6>
      <p>
        I lead the development initiatives at
        <a href="https://hypenotic.com" target="_blank" class="link"
          >Hypenotic</a
        >, a Toronto based design, development, and strategy firm and founding
        Canadian B Corporation.
      </p>
      <p>
        On the side, I engage in independent strategy and development work,
        catering to projects and clients that may not align with the scope of a
        comprehensive agency due to budgetary or logistical constraints.
      </p>
      <p>
        My commitment extends to crafting bespoke, performant apps and websites
        that prioritize optimization, web standards, mobile responsiveness, and
        environmental sustainability as core tenets.
      </p>
      <p>
        I offer expertise in strategy, UX design, development, user experience,
        and the establishment of measurable goals.
      </p>
      <p>
        Over time, I've cultivated a network of partners capable of delivering
        supplementary services, including design and content creation.
      </p>
      <p>If you have a project and seek a collaborative approach:</p>
      <LinkCTA text="Email Me" link="mailto:lionelmann@gmail.com" size="19px" />
    </div>
    <div>
      <h6>I can help with</h6>
      <ul>
        <li>Strategy</li>
        <li>Leadership</li>
        <li>Mentorship</li>
        <li>Project Management</li>
        <li>Web Development</li>
        <li>User Experience</li>
        <li>Site Auditing</li>
        <li>Web Standards</li>
        <li>Bugs & Troubleshooting</li>
        <li>Analytics</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 2.4fr 1fr;
  gap: 96px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.grid-container > div:last-child {
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding-left: 62px;
  @media (max-width: 768px) {
    padding-left: 0px;
    border: none;
  }
}

li {
  font-size: 23px;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #969ba6;
  padding: 2px 0;
}

.link {
  color: inherit;
  text-decoration: none;
  border-bottom: 2px solid rgba(65, 190, 117, 1);
  padding-bottom: 2px;
  &:hover {
    color: white;
  }
}
</style>
