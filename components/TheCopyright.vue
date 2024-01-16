<template>
  <div class="container-default w-container">
    <div class="grid-copyright">
      <div class="grid-item"><Menu :header="false" /></div>
      <div class="grid-item">
        <p>
          © 2002 - {{ d.getFullYear() }}. Built with
          <img src="/logo-nuxt.svg" />
        </p>
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
}

@media (max-width: 767px) {
  .grid-copyright {
    grid-template-columns: 1fr;
  }
}

.grid-item {
  display: grid;
  height: 96px;
  justify-items: left;
  align-items: center;
}

.grid-item:nth-last-of-type(1) {
  justify-items: right;
}

@media (max-width: 767px) {
  .grid-item:nth-last-of-type(1) {
    justify-items: left;
  }
}

a {
  transition: color 300ms ease, border-bottom 300ms ease;
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid #fff;
}

a:hover {
  color: #8895aa;
  border-bottom: 1px solid #8895aa;
}

img {
  width: 62px;
  height: auto;
}
</style>
