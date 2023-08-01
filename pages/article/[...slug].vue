<template>
  <NuxtLayout>
    <section>
      <div class="container-default w-container">
        <ContentDoc v-slot="{ doc }">
          <div class="inner_container">
            <div class="heading-top-line"></div>
            <h1 class="display-2 mg-bottom-24px">{{ doc.title }}</h1>
            <p>{{ doc.description }}</p>
          </div>
          <ContentRenderer :value="doc" class="inner_container" />
        </ContentDoc>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
//const { page } = useContent();
</script>

<style lang="scss" scoped>
section {
  padding: 64px 0px;
}

.inner_container {
  max-width: 794px;
  margin-right: auto;
  margin-left: auto;
}

.heading-top-line {
  width: 100%;
  max-width: 118px;
  min-height: 5px;
  margin-bottom: 24px;
  background-color: #fff;
}
</style>
