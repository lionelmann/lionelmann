<template>
  <div>
    <div><h2 class="principles">Principles for building a better web</h2></div>
    <div class="grid-container">
      <div class="grid-item span-row">
        Item 1 (Spanning 2 rows and 2 columns)
      </div>
      <div class="grid-item">Item 2</div>
      <div class="grid-item">Item 3</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.principles {
  font: normal 400 69px/110% Lora;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  margin-top: 40px;
}

.grid-item {
  padding: 40px;
  background-color: #252b34;
  border-radius: 32px;
}

.span-row {
  grid-row: span 2;
}
</style>
