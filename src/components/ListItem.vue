<template>
  <div>
    <div class="container">
      <h2 class="view-title">
        {{ c_view_title }}
      </h2>
      <ul class="hacker-list">
        <li
          v-for="item in c_fetched_item"
          :key="item.id"
          class="hacker-list-item"
        >
          <span class="point">{{ item.points || 0 }}</span>
          <template v-if="item.domain">
            <a class="title" :href="item.url" target="_blank">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link :to="`/item/${item.id}`" class="title">
              {{ item.title }}
            </router-link>
          </template>
          <span class="time">{{ item.time_ago }}</span>
          <router-link
            v-if="item.user"
            class="user-name"
            :to="`/user/${item.user}`"
          >
            by {{ item.user }}
          </router-link>
          <a v-else class="user-name" :href="item.url" target="_blank">
            {{ item.domain }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    c_view_title() {
      return this.$route.name.toUpperCase();
    },
    c_fetched_item() {
      const name = this.$route.name;
      if (name === "news") {
        return this.$store.state.news;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      } else if (name === "ask") {
        return this.$store.state.ask;
      } else {
        return null;
      }
    },
  },
  created() {
    const name = this.$route.name;
    let action = "";
    if (name === "news") {
      action = "FETCH_NEWS";
    } else if (name === "jobs") {
      action = "FETCH_JOBS";
    } else if (name === "ask") {
      action = "FETCH_ASK";
    }
    this.$store.dispatch(action);
  },
};
</script>

<style scoped>
.hacker-list-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.point {
  display: inline-flex;
  width: 50px;
  height: 40px;
  align-items: center;
  color: #f0b90b;
}
.title {
  font-size: 16px;
  color: #222;
}
.time {
  padding-left: 10px;
  font-size: 10px;
  color: #555;
}
.user-name {
  padding-left: 10px;
  font-size: 12px;
  color: #222;
}

.hacker-list-item a:hover {
  text-decoration: underline;
  color: #f0b90b;
}
</style>
