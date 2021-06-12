<template>
  <div>
    <div class="container">
      <h2 class="view-title">
        Ask
      </h2>
      <ul class="hacker-list">
        <li v-for="item in fetchedAsk" :key="item.id" class="hacker-list-item">
          <router-link :to="`/item/${item.id}`" class="title">
            {{ item.title }}
          </router-link>
          <span class="time">{{ item.time_ago }}</span>
          <router-link class="user-name" :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style scoped src="../assets/css/list-view.css"></style>
