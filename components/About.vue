<template>
  <div class="grid-container">
    <div>
      <h6>{{ $t("about.title") }}</h6>
      <div v-html="$t('about.content')"></div>

      <LinkCTA
        :text="$t('email')"
        link="mailto:lionelmann@gmail.com"
        size="19px"
      />
    </div>
    <div>
      <h6>{{ $t("helpWith.title") }}</h6>
      <div v-html="$t('helpWith.content')"></div>
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

:deep(li) {
  font-size: 23px;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #969ba6;
  padding: 2px 0;
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
