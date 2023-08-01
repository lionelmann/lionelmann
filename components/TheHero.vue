<template>
  <section>
    <div class="container-default w-container">
      <div class="grid-2-columns hero-avatar-right">
        <div>
          <div class="heading-top-line-large"></div>
          <h1 class="display-2">Hello, I'm<br />Lionel Mann</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit fames turpis
            pretium bibendum nisl est sagittis aliquam pretium nunc curabitur
            magna est in nulla id volutpat et venenatis at lacus.
          </p>
          <Divider top="52px" bottom="20px" />
          <div class="grid-2-columns even">
            <div class="flex">
              <div class="display-2 mg-right-16px">
                10<span class="color-accent-1">+</span>
              </div>
              <div class="text-300 bold">Years of experience</div>
            </div>
            <div class="flex">
              <div class="display-2 mg-right-16px">
                100<span class="color-accent-1">+</span>
              </div>
              <div class="text-300 bold">Successful Projects</div>
            </div>
          </div>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/1795752?v=4"
          class="avatar-circle"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  padding-bottom: 240px;
}
.hero-avatar-right {
  grid-column-gap: 34px;
  grid-row-gap: 64px;
  grid-template-columns: 1.2fr 1fr;
}

.heading-top-line-large {
  max-width: 148px;
  min-height: 8px;
  margin-bottom: 48px;
  width: 100%;
  background-color: #fff;
}

.flex {
  display: flex;
  align-items: center;
}

.bold {
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.1em;
}

.avatar-circle {
  overflow: hidden;
  width: 100%;
  border-radius: 50%;
  transform: translate(0px, 0px);
}

.grid-2-columns .even {
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0px;
}

.mg-right-16px {
  margin-right: 16px;
}
</style>
