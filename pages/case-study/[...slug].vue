<template>
  <section>
    <div class="container-default w-container">
      {{ page.title }}
      <ContentDoc>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
      {{ page.year }}
    </div>
  </section>
</template>

<script setup>
const { page } = useContent();
</script>

<style lang="scss" scoped></style>
