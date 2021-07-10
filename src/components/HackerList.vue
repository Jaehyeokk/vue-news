<template>
  <div class="list-item">
    <div class="container">
      <h2 class="list-title">{{ $route.name.toUpperCase() }}</h2>
      <ul class="hacker-list">
        <li v-for="item in list" :key="item.title" class="hacker-list-item">
          <span class="point">{{ item.points || 0 }}</span>
          <template v-if="item.domain">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </template>
          <template v-else>
            <router-link :to="`/ask/${item.id}`"> {{ item.title }}</router-link>
          </template>
          <template v-if="item.user">
            <router-link :to="`/user/${item.user}`" class="user-name"
              >by {{ item.user }}</router-link
            >
          </template>
          <template v-else>
            <a class="time" :href="item.url" target="_blank">{{
              item.domain
            }}</a>
          </template>
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
};
</script>

<style>
.container {
  width: 1080px;
  padding: 20px;
  box-sizing: border-box;
}

.list-title {
  font-weight: 700;
  font-size: 27px;
  padding-bottom: 20px;
}

.hacker-list {
  border-top: 1px solid #f0b90b;
}

.hacker-list-item {
  padding: 16px 6px;
  border-bottom: 1px solid #f0b90b;
}

.hacker-list-item .point {
  padding: 0 20px 0 10px;
  font-weight: 500;
  font-size: 16px;
  color: #927106;
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
