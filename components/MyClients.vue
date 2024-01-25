<template>
  <div class="panel">
    <h3>Organisations, companies & entrepreneurs I've collaborated with</h3>

    <div class="grid">
      <img
        style="height: 60px"
        src="/logo-ccs.svg"
        alt="Canadian Cancer Societ Logo"
      />
      <img style="height: 60px" src="/logo-mazda.svg" alt="Mazda Logo" />
      <img
        style="height: 60px"
        src="/logo-outpost.svg"
        alt="Outpost Magazine Logo"
      />

      <img style="height: 60px" src="/logo-era.svg" alt="Era Logo" />

      <img
        style="height: 60px"
        src="/logo-revive.svg"
        alt="Revive Engineering Logo"
      />
      <img
        style="filter: grayscale(100%); height: 60px"
        src="/logo-bunbury.png"
        alt="Bunbury Films Logo"
      />
      <img
        style="filter: grayscale(100%)"
        src="/logo-solarpanda.png"
        alt="Solar Panda Logo"
      />
      <img
        style="filter: grayscale(100%); height: 60px"
        src="/logo-nq.png"
        alt="Nouvelle-Querbes Logo"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.panel {
  border-radius: 24px;
  background-color: #252b34;
  padding: 96px 64px;
}

h3 {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 56px;
  margin: 56px 0 72px 0;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
