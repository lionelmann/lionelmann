<template>
  <div>
    <div class="grid-2-columns">
      <div>
        <div class="subtitle">{{ $t("education.tagline") }}</div>
        <h2 v-html="$t('education.title')"></h2>
      </div>
      <LinkCTA :text="$t('email')" link="mailto:lionelmann@gmail.com" />
    </div>
    <Divider />

    <div class="grid-2-columns gap-0">
      <div class="education-grid-top-left">
        <div class="flex">
          <div class="uppercase">{{ $t("education.one.school") }}</div>
          <div class="details-slash-divider">/</div>
          <div class="uppercase">{{ $t("education.one.date") }}</div>
        </div>
        <h5 v-html="$t('education.one.title')"></h5>
        <p>{{ $t("education.one.content") }}</p>
      </div>

      <div class="education-grid-top-right">
        <div class="flex">
          <div class="uppercase">{{ $t("education.two.school") }}</div>
          <div class="details-slash-divider">/</div>
          <div class="uppercase">{{ $t("education.two.date") }}</div>
        </div>
        <h5 v-html="$t('education.two.title')"></h5>
        <p>{{ $t("education.two.content") }}</p>
        <LinkCTA :text="$t('notes')" link="https://google.ca" size="18px" />
      </div>

      <div class="education-grid-bottom-left">
        <div class="flex">
          <div class="uppercase">{{ $t("education.three.school") }}</div>
          <div class="details-slash-divider">/</div>
          <div class="uppercase">{{ $t("education.three.date") }}</div>
        </div>
        <h5 v-html="$t('education.three.title')"></h5>
      </div>

      <div class="education-grid-bottom-right">
        <div class="flex">
          <div class="uppercase">{{ $t("education.four.school") }}</div>
          <div class="details-slash-divider">/</div>
          <div class="uppercase">{{ $t("education.four.date") }}</div>
        </div>
        <h5 v-html="$t('education.four.title')"></h5>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.uppercase {
  text-transform: uppercase;
}
.grid-2-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.inner-container {
  max-width: 456px;
  justify-self: end;
  align-self: end;
}

.education-grid-top-left,
.education-grid-top-right,
.education-grid-bottom-left,
.education-grid-bottom-right {
  border-radius: 0px;
  background-color: transparent;
  align-self: stretch;
  justify-self: stretch;
}

.education-grid-top-left {
  padding: 0px 66px 66px 0px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .education-grid-top-left {
    border-right: 0px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
.education-grid-top-right {
  padding: 0px 0px 66px 66px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .education-grid-top-right {
    padding: 66px 0px 66px 0px;
  }
}

.education-grid-bottom-left {
  padding: 66px 66px 0px 0px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .education-grid-bottom-left {
    padding: 66px 0px 66px 0px;
    border-right: 0px solid rgba(255, 255, 255, 0.1);
  }
}
.education-grid-bottom-right {
  padding: 66px 0px 0px 66px;
}

@media (max-width: 768px) {
  .education-grid-bottom-right {
    padding: 66px 0px 66px 0px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
}

.flex {
  display: flex;
  margin-bottom: 24px;
}

.gap-0 {
  gap: 0px;
}

p {
  margin-top: 0px;
}
</style>
