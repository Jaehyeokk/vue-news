<template>
  <div class="news-page">
    <div class="container">
      <ul class="hacker-list">
        <li v-for="item in list" :key="item.title" class="hacker-list-item">
          <a :href="item.url" target="_blank">{{ item.title }}</a>
          <router-link :to="`/user/${item.user}`" class="user-name"
            >by {{ item.user }}</router-link
          >
          <span class="time">{{ item.time_ago }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["list"]),
  },
  created() {
    this.$store.dispatch("FETCH_LIST", this.$route.name);
  },
};
</script>

<style scoped>
.container {
  width: 1080px;
  padding: 20px;
  box-sizing: border-box;
}

.hacker-list {
  border-top: 1px solid #f0b90b;
}

.hacker-list-item {
  padding: 10px;
  border-bottom: 1px solid #f0b90b;
}

.hacker-list-item a {
  font-weight: 500;
  font-size: 16px;
  color: #111;
  text-decoration: none;
}

.hacker-list-item a:hover {
  color: #8a6a00;
  text-decoration: underline;
}

.hacker-list-item .user-name,
.hacker-list-item .time {
  padding-left: 10px;
  font-size: 14px;
}

.hacker-list-item .user-name {
  color: rgb(0, 4, 39);
}

@media screen and (max-width: 1080px) {
  .container {
    width: 100%;
  }
}
</style>
