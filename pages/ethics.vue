<template>
  <div>
    <div class="meta">{{ $t("ethics.tagline") }}</div>
    <h1>{{ $t("ethics.title") }}</h1>

    <Divider top="80px" bottom="96px" />
    <article>
      <div v-html="$t('ethics.intro')"></div>
      <h6>{{ $t("ethics.whatDone.title") }}</h6>
      <div v-html="$t('ethics.whatDone.content')"></div>

      <h6>{{ $t("ethics.whatNotDone.title") }}</h6>
      <div v-html="$t('ethics.whatNotDone.content')"></div>

      <h6>{{ $t("ethics.sectors.title") }}</h6>
      <div v-html="$t('ethics.sectors.content')"></div>
    </article>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
h6 {
  margin-top: 96px;
}

:deep(ul) {
  list-style-type: disc;
  color: #969ba6;
  font-size: 23px;
  line-height: 130%;
  margin: 24px 0 0 32px;
  li {
    margin-bottom: 16px;
  }
}
</style>
