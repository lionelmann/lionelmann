<template>
  <div class="card-container">
    <blockquote v-html="testimonial.quote"></blockquote>
    <div class="author">
      <img :src="testimonial.image" alt="" />
      <div class="author-inner">
        <p class="name">
          {{ testimonial.name }}
        </p>
        <p class="role">
          {{ testimonial.role }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["testimonial", "pick"]);
</script>
<style scoped lang="scss">
.card-container {
  width: 100%;
  padding: 40px;
  background-color: #252b34;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
}

.author {
  display: flex;
  margin-top: auto;
  align-self: flex-start;
  align-items: center;
}

.author-inner {
  margin-left: 24px;
}

.author-inner p {
  margin: 0;
  line-height: 1.4rem;
}

img {
  width: 62px;
  height: 62px;
  object-fit: cover;
  border-radius: 50%;
  filter: grayscale(100%);
}

.name {
  font-size: 16px;
  text-transform: uppercase;
}

.role {
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  opacity: 0.7;
}

blockquote {
  margin: 0 0 3rem 0;
  font-size: 1.44em;
  line-height: 150%;
  color: #969ba6;
}

:deep(.highlight) {
  color: white;
}
</style>
