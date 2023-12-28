<template>
  <section>
    <div class="container-default w-container">
      <div class="grid-2-columnss hero-avatar-right">
        <!--<p class="meta">
          Independent "Jack of all trades" developer + web strategist
        </p>-->
        <div class="title">
          <h1 class="display-2">
            Hey there, I help organisations, startups and purpose-driven
            businesses create positively memorable user experiences.
          </h1>
          <p class="link">Book a Call</p>

          <!--<div class="heading-top-line-large"></div>-->
          <!--<h1 class="display-2">
            Team-oriented, development lead with 10<span class="color-accent-1"
              >+</span
            >
            years experience; based in Montreal, Canada.
          </h1>-->

          <!--<Divider top="96px" bottom="96px" />-->
          <!--<div class="grid-2-columns even">
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
        </div>-->

          <!--<img
          src="https://avatars.githubusercontent.com/u/1795752?v=4"
          class="avatar-circle"
        />-->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  padding-top: 100px;
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

.display-2 {
  width: 80%;
  font: normal 400 72px/110% Lora;
}

.link {
  text-transform: uppercase;
}

.meta {
  text-transform: uppercase;
  //color: rgb(65 190 117);
  font-weight: 700;
  font-size: 18px;
}
</style>
