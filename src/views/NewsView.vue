<template>
  <div>
    <div class="container">
      <h2 class="view-title">
        News
      </h2>
      <ul class="hacker-list">
        <li v-for="item in fetchedNews" :key="item.id" class="hacker-list-item">
          <a class="title" :href="item.url" target="_blank">
            {{ item.title }}
          </a>
          <span class="time">{{ item.time_ago }}</span>
          <a class="user-name" href="">
            {{ item.user }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedNews"]),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style scoped src="../assets/css/list-view.css"></style>
