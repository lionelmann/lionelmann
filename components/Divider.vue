<template>
  <div class="divider" :style="{ marginTop: top, marginBottom: bottom }"></div>
</template>

<script setup>
const props = defineProps({
  top: String,
  bottom: String,
});
</script>

<style lang="scss" scoped>
.divider {
  margin-top: 96px;
  margin-bottom: 96px;
  height: 1px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
