<template>
  <div>
    <div class="container">
      <h2 class="view-title">
        Jobs
      </h2>
      <ul class="hacker-list">
        <li v-for="item in fetchedJobs" :key="item.id" class="hacker-list-item">
          <a class="title" :href="item.url" target="_blank">
            {{ item.title }}
          </a>
          <span class="time">{{ item.time_ago }}</span>
          <span class="user-name">
            {{ item.domain }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedJobs"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style scoped src="../assets/css/list-view.css"></style>
