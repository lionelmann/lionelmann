<template>
  <footer>
    <div class="container-default w-container">
      <div class="grid-2-columns">
        <div>
          <div class="row">
            <img
              src="https://avatars.githubusercontent.com/u/1795752?v=4"
              alt="Lionel Mann"
              class="avatar"
            />
            <div>
              <h4 class="display-5">Lionel Mann</h4>
              <span class="text-400">Development Lead</span>
            </div>
          </div>
          <SocialIcons />
        </div>
        <div class="contact">
          <NuxtLink
            to="/contact"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <div class="display-3">
              Get in touch
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
          <div class="text-uppercase">Email Me:</div>

          <LinkCTA
            text="lionelmann@gmail.com"
            link="mailto:lionelmann@gmail.com"
          />
        </div>
      </div>
    </div>

    <TheCopyright />
  </footer>
</template>

<script setup>
const hover = ref(false);
</script>

<style lang="scss" scoped>
footer {
  border-top: 1px solid #5d6c83;
  padding-top: 120px;
  margin-top: 120px;
}
.avatar {
  min-height: 132px;
  min-width: 132px;
  border-radius: 50%;
  margin-right: 24px;
}

.row {
  display: grid;
  grid-template-columns: 132px 1fr; /* First column width: 132px, Second column takes remaining space */
  align-items: center; /* Vertically center items */
  gap: 24px;
}

.text-400 {
  font-size: 24px;
  line-height: 1.083em;
  font-weight: 500;
  color: #8895aa;
}

.display-3 {
  margin-bottom: 40px;
}

a {
  text-decoration: none;
}

.contact {
  justify-self: end;
}

@media (max-width: 768px) {
  .contact {
    justify-self: start;
    margin-top: 50px;
  }
}
</style>
