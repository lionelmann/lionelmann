<template>
  <header class="container-default w-container">
    <NuxtLink to="/">
      <div class="display-5">
        Lionel
        <div class="mann">Mann</div>
        <div class="studio">Studio</div>
        <!--<img src="/logoipsum-211.svg" alt="Lionel Mann" class="header-logo" />-->
      </div>
    </NuxtLink>
    <Menu :header="true" />
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
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  width: 132px;
}

.header-logo-link:hover {
  transform: scale3d(1.06, 1.06, 1.01);
}

.display-5 {
  text-transform: uppercase;
  line-height: 110%;
  font-size: 1.1rem;
}

a {
  text-decoration: none;
}

.mann {
  letter-spacing: 0.14rem;
}

.studio {
  font-size: 17px;
  opacity: 0.6;
  font-weight: 300;
}
</style>
