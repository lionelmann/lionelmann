<template>
  <section>
    <div class="container-default w-container">
      <div class="grid-2-columns">
        <div>
          <div class="subtitle">
            <span class="color-accent-1">/</span> My Experience
          </div>
          <h2 class="display-3">
            Over 10 years of experience and 100+ projects
          </h2>
        </div>
        <LinkCTA text="Get in Touch" link="maito:lionelmann@gmail.com" />
      </div>
      <Divider />
      <div class="grid-3-columns">
        <div
          @mouseover="
            (hoverTech = false), (hoverTeam = true), (hoverLeadership = true)
          "
          @mouseleave="
            (hoverTech = false), (hoverTeam = false), (hoverLeadership = false)
          "
          :style="{
            opacity: hoverTech ? '0.35' : '1',
            transition: 'opacity 300ms ease',
          }"
        >
          <div class="title">Tech Skill Set</div>
          <ul class="two-columns">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>Vue</li>
            <li>Nuxt 2 & 3</li>

            <li>WordPress API</li>
            <li>Strapi CMS</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>REST + GraphQL</li>
            <li>NGINX</li>
            <li>Apache</li>
            <li>Terminal / SSH</li>
            <li>PM2</li>
            <li>Server Setup</li>
            <li>Google Analytics</li>
          </ul>
        </div>
        <div
          @mouseover="
            (hoverTech = true), (hoverTeam = false), (hoverLeadership = true)
          "
          @mouseleave="
            (hoverTech = false), (hoverTeam = false), (hoverLeadership = false)
          "
          :style="{
            opacity: hoverTeam ? '0.35' : '1',
            transition: 'opacity 300ms ease',
          }"
        >
          <div class="title">Team Skills</div>
          <ul class="description">
            <li>
              Rolling with ongoing changes, agile methodologies, iterative
              development.
            </li>
            <li>Fidelity to design specifics, feature planning.</li>
            <li>Managing team time, performance and communication.</li>
            <li>
              Talking technical terms with clients in non-technical language.
            </li>
          </ul>
        </div>
        <div
          @mouseover="
            (hoverTech = true), (hoverTeam = true), (hoverLeadership = false)
          "
          @mouseleave="
            (hoverTech = false), (hoverTeam = false), (hoverLeadership = false)
          "
          :style="{
            opacity: hoverLeadership ? '0.35' : '1',
            transition: 'opacity 300ms ease',
          }"
        >
          <div class="title">Leadership + Management Skills</div>
          <ul>
            <li>Department Leadership</li>
            <li>Project Management</li>
            <li>Project Framing & Kickoff</li>
            <li>Strategy</li>
            <li>Client Facing</li>
            <li>Mentoring</li>
            <li>Team Happiness</li>
            <li>Cross Department Collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const hoverTech = ref(false);
const hoverTeam = ref(false);
const hoverLeadership = ref(false);
</script>

<style lang="scss" scoped>
.grid-3-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 56px;
}

.two-columns {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}

li {
  color: #fff;
  font-size: 20px;
  line-height: 1.441em;
  font-weight: 700;
  margin-bottom: 16px;
}

.title {
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.111em;
  margin-bottom: 34px;
}

.description li {
  font-size: 20px;
}

.grid-2-columns {
  grid-template-columns: 1.5fr 1fr;
}

@media (max-width: 768px) {
  .grid-2-columns {
    grid-template-columns: 1fr;
  }
}
</style>
