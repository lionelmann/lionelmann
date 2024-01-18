<template>
  <div class="card past-clients">
    <div class="inner-container">
      <div class="center">
        <h2 class="display-3">
          Organisations, companies & founders I've collaborated with
        </h2>
      </div>
    </div>

    <div class="grid-5-columns logo-strip-center">
      <img
        style="height: 60px"
        src="/logo-ccs.svg"
        loading="eager"
        alt="Google - Developer X Webflow Template"
      />
      <img
        style="height: 60px"
        src="/logo-mazda.svg"
        loading="eager"
        alt="Google - Developer X Webflow Template"
      />
      <img
        style="height: 60px"
        src="/logo-outpost.svg"
        loading="eager"
        alt="Google - Developer X Webflow Template"
      />

      <img
        style="height: 60px"
        src="/logo-era.svg"
        loading="eager"
        alt="Google - Developer X Webflow Template"
      />

      <img
        style="height: 60px"
        src="/logo-revive.svg"
        loading="eager"
        alt="Google - Developer X Webflow Template"
      />
      <img
        style="filter: grayscale(100%); height: 60px"
        src="/logo-bunbury.png"
        loading="eager"
        alt="Google - Developer X Webflow Template"
      />
      <img
        style="filter: grayscale(100%)"
        src="/logo-solarpanda.png"
        loading="eager"
        alt="Google - Developer X Webflow Template"
      />
      <img
        style="filter: grayscale(100%); height: 60px"
        src="/logo-nq.png"
        loading="eager"
        alt="Google - Developer X Webflow Template"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  border-radius: 24px;
  background-color: #2d343f;
}

.past-clients {
  padding: 128px 64px 128px;
}

.inner-container {
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
}

.grid-5-columns {
  display: grid;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 56px;
}

@media (max-width: 768px) {
  .grid-5-columns {
    grid-template-columns: 1fr;
  }
}

.logo-strip-center {
  margin-bottom: 72px;
  justify-content: center;
  justify-items: center;
  gap: 56px;
}

.display-3 {
  font: normal;
}
</style>
