<template>
  <header class="container-default w-container">
    <Logo />
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
</style>
