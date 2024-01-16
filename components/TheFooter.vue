<template>
  <footer>
    <Divider top="96px" bottom="48px" />
    <div class="container-default w-container">
      <div class="grid-2-columns">
        <div>
          <div class="row">
            <!--<img
              src="https://avatars.githubusercontent.com/u/1795752?v=4"
              alt="Lionel Mann"
              class="avatar"
            />-->
            <div>
              <h4 class="display-5">Lionel Mann Studio</h4>
            </div>
          </div>
          <!--<SocialIcons />-->
        </div>
        <!--<div class="contact">
          <NuxtLink
            to="/contact"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <div class="display-3">
              Let's Talk
              <Icon
                name="heroicons:arrow-right"
                color="#075fe4"
                :style="{
                  transform: hover
                    ? 'translate3d(4px, 0, 0)'
                    : 'translate3d(0, 0, 0)',
                  transition: 'transform 300ms ease',
                }"
              />
            </div>
          </NuxtLink>
          <LinkCTA text="EMAIL ME" link="mailto:lionelmann@gmail.com" />
        </div>
      --></div>
    </div>

    <TheCopyright />
  </footer>
</template>

<script setup>
const hover = ref(false);
</script>

<style lang="scss" scoped>
.avatar {
  min-height: 132px;
  min-width: 132px;
  border-radius: 50%;
  margin-right: 24px;
}

.row {
  display: grid;
  grid-template-columns: 132px 1fr;
  align-items: center;
  gap: 24px;
}

a {
  text-decoration: none;
}

.display-5 {
  text-transform: uppercase;
  line-height: 110%;
  font-size: 1.2rem;
}
</style>
