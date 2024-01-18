<template>
  <div class="grid-2-columns">
    <div>
      <div class="subtitle">My Experience</div>
      <h2 class="display-3">
        I<span class="color-accent-1">/</span>ve work<span
          class="color-accent-1"
          >/</span
        >ed for some amazing companies & organisations
      </h2>
    </div>
    <LinkCTA text="Email Me" link="mailto:lionelmann@gmail.com" />
  </div>

  <div
    v-for="experience in pastExperiences"
    :key="experience.id"
    class="grid-3-columns past-experience"
  >
    <div>
      <img
        :src="experience.imageUrl"
        loading="eager"
        :alt="experience.altText"
      />
    </div>
    <div>
      <h3 class="display-4" v-html="experience.title"></h3>
      <p>
        {{ experience.description }}
      </p>
    </div>
    <div class="flex">
      <div class="text-uppercase">
        {{ experience.startDate }}
      </div>
      <div class="details-slash-divider">/</div>
      <div class="text-uppercase">
        {{ experience.endDate }}
      </div>
    </div>
  </div>
</template>

<script setup>
const pastExperiences = [
  {
    id: 1,
    imageUrl: "/logo-hype.svg",
    altText: "Hypenotic logo",
    title: "Development Lead",
    description:
      "Lorem ipsum dolor sit amet consectet adipiscing elit et et est eget tortor lacus aliquam pulvinar senectus ut sapien sed nun",
    startDate: "Sept 2010",
    endDate: "Present",
  },

  {
    id: 2,
    imageUrl: "/logo-ccs.svg",
    altText: "CCS logo",
    title: "Technical Specialist, E-Business",
    description:
      "Lorem ipsum dolor sit amet consectet adipiscing elit et et est eget tortor lacus aliquam pulvinar senectus ut sapien sed nun",
    startDate: "Jan 2001",
    endDate: "Jul 2009",
  },
  {
    id: 2,
    imageUrl: "/logo-outpost.svg",
    altText: "Outpost logo",
    title: "Associate Editor + <br>Online Manager",
    description:
      "Lorem ipsum dolor sit amet consectet adipiscing elit et et est eget tortor lacus aliquam pulvinar senectus ut sapien sed nun",
    startDate: "Sept 2004",
    endDate: "Apr 2009",
  },
];
</script>

<style lang="scss" scoped>
.grid-3-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 56px;
}

.grid-2-columns {
  grid-template-columns: 3fr 1fr;
  padding-top: 80px;
}

@media (max-width: 768px) {
  .grid-2-columns {
    grid-template-columns: 1fr;
  }
}

.past-experience {
  padding-top: 80px;
  padding-bottom: 8px;
  margin-top: 80px;
  grid-template-columns: 2.5fr 7fr 3fr;
  border-top: 1px solid #3d4757;
}

@media (max-width: 768px) {
  .past-experience {
    grid-template-columns: 1fr;
  }
}

.flex {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .flex {
    justify-content: flex-start;
  }
}
</style>
