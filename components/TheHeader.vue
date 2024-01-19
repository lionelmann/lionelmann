<template>
  <header>
    <Logo />
    <Menu :header="true" />
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 120px;
}
</style>
