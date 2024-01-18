<template>
  <NuxtLink to="/">
    <div class="display-5">
      Lionel
      <div class="mann">Mann</div>
      <div class="studio">Studio</div>
    </div>
  </NuxtLink>
</template>

<script setup></script>

<style lang="scss" scoped>
.display-5 {
  text-transform: uppercase;
  line-height: 110%;
  font-size: 1.1rem;
}

.mann {
  letter-spacing: 0.14rem;
}

.studio {
  font-size: 17px;
  font-weight: 300;
  opacity: 0.6;
}

a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>
