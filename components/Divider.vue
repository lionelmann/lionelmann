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
  margin-top: 66px;
  margin-bottom: 78px;
  height: 1px;
  opacity: 1;
  background-color: #5d6c83;
}
</style>
