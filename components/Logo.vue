<template>
  <NuxtLink to="/">
    <div class="f-logo">
      Lionel
      <div class="mann">Mann</div>
      <div class="studio">Studio</div>
    </div>
  </NuxtLink>
</template>

<script setup></script>

<style lang="scss" scoped>
.f-logo {
  font-size: 19px;
  text-transform: uppercase;
  line-height: 100%;
}

.mann {
  letter-spacing: 0.14rem;
}

.studio {
  font-size: 18px;
  font-weight: 300;
  opacity: 0.5;
}

a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
</style>
