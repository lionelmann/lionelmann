<template>
  <div class="grid-copyright">
    <div class="grid-item"><Menu :header="false" /></div>
    <div class="grid-item">
      <div>
        © 2001 - {{ d.getFullYear() }}. {{ $t("built") }}
        <img src="/logo-nuxt.svg" alt="Nuxt Logo" />
      </div>
    </div>
  </div>
</template>

<script setup>
const d = new Date();
</script>

<style lang="scss" scoped>
.grid-copyright {
  display: grid;
  margin: 0 auto;
  grid-template-columns: 2fr 1fr;
  gap: 4px;
  margin-top: 48px;
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
}

.grid-item {
  display: grid;
  justify-self: start;
  align-self: center;
}

.grid-item:nth-last-of-type(1) {
  justify-self: end;
  @media (max-width: 990px) {
    margin-top: 16px;
    justify-self: start;
  }
}

img {
  width: 62px;
  height: auto;
}
</style>
