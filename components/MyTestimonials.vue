<template>
  <div class="card-container">
    <div class="content">
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
  </div>
</template>

<script setup>
const props = defineProps(["testimonial"]);
</script>
<style scoped lang="scss">
.card-container {
  width: 100%;
  padding: 40px;
  background-color: #252b34;
  border-radius: 32px;
  //display: flex;
  //flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease; // Add transition for smooth effect
}

.card-container:hover {
  transform: scale(1.03); // Scale by 1% on hover
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
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

p {
  margin: 0;
}

img {
  width: 62px;
  height: 62px;
  object-fit: cover;
  border-radius: 50%;
  filter: grayscale(100%);
}

.name {
  color: white;
  font-size: 16px;
  text-transform: uppercase;
}

.role {
  font-size: 14px;
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
