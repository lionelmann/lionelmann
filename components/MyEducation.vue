<template>
  <section>
    <div class="container-default w-container">
      <div class="grid-2-columns">
        <div>
          <div class="subtitle">
            <span class="color-accent-1">/</span> My Education
          </div>
          <h2 class="display-3">Past education, credentials & courses</h2>
        </div>
        <div class="inner-container">
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla</p>
        </div>
      </div>
      <Divider />
      <div class="grid-2-columns gap-0">
        <div
          v-for="item in educationItems"
          :key="item.id"
          :class="item.gridClass"
        >
          <div class="flex">
            <div class="text-uppercase">{{ item.school }}</div>
            <div class="details-slash-divider">/</div>
            <div class="text-uppercase">{{ item.date }}</div>
          </div>
          <h5 class="display-5" v-html="item.title"></h5>
          <p>{{ item.description }}</p>
          <template v-if="item.notes">
            <LinkCTA text="Course Notes" link="https://google.ca" size="18px" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const educationItems = [
  {
    title: "Vue & Nuxt Courses",
    school: "Vue Mastery",
    date: "2018 - Ongoing",
    description: "Building apps that can scale with Nuxt.js",
    gridClass: "education-grid-top-left",
    notes: false,
  },
  {
    title: "Nanodegree, Data Foundations",
    school: "Udacity",
    date: "2018",
    description:
      "The Data Foundations Nanodegree is a 3-month program that teaches Data Analytics fundamentals like descriptive statistics, Excel data analysis, SQL database querying, and creating impactful visualizations in Tableau.",
    gridClass: "education-grid-top-right",
    notes: true,
  },
  {
    title: "Webmaster Diploma, <br>Web Development & Design",
    school: "First Interact Computer College",
    date: "2000",
    description: "lorem ipsum",
    gridClass: "education-grid-bottom-left",
    notes: false,
  },
  {
    title: "Bachelor Degree (Double Major), Political Science & Sociology",
    school: "Dalhousie University",
    date: "1994 - 1998",
    description: "lorem ipsum",
    gridClass: "education-grid-bottom-right",
    notes: false,
  },
];
</script>

<style lang="scss" scoped>
section {
  background-color: rgba(45, 52, 63, 0.4);
  padding: 240px 0px;
}

.inner-container {
  max-width: 456px;
  justify-self: end;
  align-self: end;
}

.education-grid-top-left,
.education-grid-top-right,
.education-grid-bottom-left,
.education-grid-bottom-right {
  border-radius: 0px;
  background-color: transparent;
  align-self: stretch;
  justify-self: stretch;
}

.education-grid-top-left {
  padding: 0px 66px 66px 0px;
  border-right: 1px solid #5d6c83;
  border-bottom: 1px solid #5d6c83;
}

@media (max-width: 768px) {
  .education-grid-top-left {
    border-right: 0px solid #5d6c83;
    border-bottom: 1px solid #5d6c83;
  }
}
.education-grid-top-right {
  padding: 0px 0px 66px 66px;
  border-bottom: 1px solid #5d6c83;
}

@media (max-width: 768px) {
  .education-grid-top-right {
    padding: 66px 0px 66px 0px;
  }
}

.education-grid-bottom-left {
  padding: 66px 66px 0px 0px;
  border-right: 1px solid #5d6c83;
}

@media (max-width: 768px) {
  .education-grid-bottom-left {
    padding: 66px 0px 66px 0px;
    border-right: 0px solid #5d6c83;
  }
}
.education-grid-bottom-right {
  padding: 66px 0px 0px 66px;
}

@media (max-width: 768px) {
  .education-grid-bottom-right {
    padding: 66px 0px 66px 0px;
    border-top: 1px solid #5d6c83;
  }
}

.flex {
  display: flex;
  margin-bottom: 24px;
}

.gap-0 {
  gap: 0px;
}

p {
  margin-top: 0px;
}
</style>
