<template>
  <div class="grid-2-columns">
    <div>
      <div class="subtitle">{{ $t("experience.tagline") }}</div>
      <h2 v-html="$t('experience.title')"></h2>
    </div>
    <LinkCTA :text="$t('email')" link="mailto:lionelmann@gmail.com" />
  </div>

  <div class="grid-3-columns past-experience" data-aos="fade-up">
    <div style="text-align: center">
      <img src="/logo-hype.svg" alt="Hypenotic logo" />
    </div>
    <div>
      <h4 v-html="$t('experience.roleOne.title')"></h4>
      <div v-html="$t('experience.roleOne.content')"></div>
    </div>
    <div class="flex">
      <time>
        {{ $t("experience.roleOne.startDate") }}
      </time>
      <div class="details-slash-divider">/</div>
      <time>
        {{ $t("experience.roleOne.endDate") }}
      </time>
    </div>
  </div>

  <div class="grid-3-columns past-experience" data-aos="fade-up">
    <div style="text-align: center">
      <img src="/logo-ccs.svg" alt="CCS logo" />
    </div>
    <div>
      <h4 v-html="$t('experience.roleTwo.title')"></h4>
      <div v-html="$t('experience.roleTwo.content')"></div>
    </div>
    <div class="flex">
      <time>
        {{ $t("experience.roleTwo.startDate") }}
      </time>
      <div class="details-slash-divider">/</div>
      <time>
        {{ $t("experience.roleTwo.endDate") }}
      </time>
    </div>
  </div>

  <div class="grid-3-columns past-experience" data-aos="fade-up">
    <div style="text-align: center">
      <img src="/logo-outpost.svg" alt="Outpost logo" />
    </div>
    <div>
      <h4 v-html="$t('experience.roleThree.title')"></h4>
      <div v-html="$t('experience.roleThree.content')"></div>
    </div>
    <div class="flex">
      <time>
        {{ $t("experience.roleThree.startDate") }}
      </time>
      <div class="details-slash-divider">/</div>
      <time>
        {{ $t("experience.roleThree.endDate") }}
      </time>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.grid-2-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
.grid-3-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 56px;
}

.grid-2-columns {
  grid-template-columns: 3fr 1fr;
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
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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

time {
  text-transform: uppercase;
}
</style>
