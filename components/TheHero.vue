<template>
  <div>
    <div class="meta">{{ $t("header.meta") }}</div>
    <h1 class="intro">{{ $t("header.headline") }}</h1>
    <LinkCTA
      :text="$t('letschat')"
      link="mailto:lionelmann@gmail.com"
      target="_blank"
      size="19px"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.intro {
  margin-bottom: 40px;
  width: 80%;
}
</style>
