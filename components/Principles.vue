<template>
  <h2>{{ $t("principles.headline") }}</h2>
  <div class="grid-container">
    <div class="grid-row span-row">
      <p v-html="$t('principles.one')"></p>
      <NuxtImg src="/noun-dataset.svg" alt="Performance Icon" />
    </div>
    <div class="grid-column item-1">
      <NuxtImg src="/noun-ai-ethics.svg" alt="Ethical Design Icon" />
      <p v-html="$t('principles.two')"></p>
    </div>
    <div class="grid-column item-2">
      <p v-html="$t('principles.three')"></p>
      <NuxtImg
        src="/noun-artificial-intelligence.svg"
        alt="Accessibility Icon"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
h2 {
  font: normal clamp(40px, 6vw, 69px) / 110% Lora;
  max-width: 80%;
  @media (max-width: 500px) {
    max-width: 100%;
  }
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  margin-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.grid-column,
.grid-row {
  display: grid;
  width: 100%;
  padding: 40px;
  background-color: #252b34;
  border-radius: 32px;
  gap: 40px;
}

.item-1 {
  grid-template-columns: 1fr 1.7fr;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}

.item-2 {
  grid-template-columns: 1.7fr 1fr;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}

.grid-row {
  grid-template-columns: 1fr;
}

.span-row {
  grid-row: span 2;
}

img {
  opacity: 0.5;
}

:deep(.highlight) {
  color: white;
}

:deep(a) {
  color: inherit;
  text-decoration: none;
  border-bottom: 2px solid $highlight;
  padding-bottom: 2px;
  &:hover {
    color: white;
  }
}
</style>
