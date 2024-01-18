<template>
  <section>
    <header>
      <Logo />
      <Menu :header="true" />
    </header>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 100px;
}
</style>
