<template>
  <header class="container-default w-container">
    <div class="logo">
      <NuxtLink to="/" class="header-logo-link">
        Lionel Mann Studio
        <!--<img src="/logoipsum-211.svg" alt="Lionel Mann" class="header-logo" />-->
      </NuxtLink>
    </div>
    <Menu />
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 36px;
  padding-bottom: 36px;
}

.logo img {
  display: inline-block;
  max-width: 200px;
  vertical-align: middle;
}

.header-logo-link {
  display: inline-block;
  padding-left: 0px;
  transition: transform 300ms ease, color 300ms ease;
  transform-style: preserve-3d;
  z-index: 2;
}

.header-logo-link:hover {
  transform: scale3d(1.06, 1.06, 1.01);
}
</style>
