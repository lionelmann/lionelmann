<template>
  <div class="grid-copyright">
    <div class="grid-item"><Menu :header="false" /></div>
    <div class="grid-item">
      <div>
        © 2002 - {{ d.getFullYear() }}. Built with
        <img src="/logo-nuxt.svg" />
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 48px;
  @media (max-width: 767px) {
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
  @media (max-width: 767px) {
    justify-self: start;
  }
}

img {
  width: 62px;
  height: auto;
}
</style>
