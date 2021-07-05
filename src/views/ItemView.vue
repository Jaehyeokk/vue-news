<template>
  <div class="item-view">
    <div class="container">
      <p class="title">{{ this.item_info.title }}</p>
      <p class="user-info">
        <router-link :to="`/user/${item_info.user}`">{{
          this.item_info.user
        }}</router-link>
        <span>{{ this.item_info.time_ago }}</span>
        <span>{{ this.item_info.points }}p</span>
      </p>
      <div class="contents" v-html="item_info.content"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      item_info: "",
    };
  },
  created() {
    axios
      .get(`https://api.hnpwa.com/v0/item/${this.$route.params.id}.json`)
      .then(({ data }) => (this.item_info = data))
      .catch((e) => console.log(e));
  },
};
</script>

<style scoped>
.container {
  width: 1080px;
  padding: 20px;
  box-sizing: border-box;
}

.title {
  padding: 20px 0 10px;
  font-weight: 600;
}

.user-info {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.user-info span {
  margin-left: 20px;
}

.user-info a {
  color: #111;
  text-decoration: none;
}

.user-info a:hover {
  color: #f0b90b;
  text-decoration: underline;
}

.contents {
  padding: 20px 0;
  line-height: 1.3;
}

@media screen and (max-width: 1080px) {
  .container {
    width: 100%;
  }
}
</style>
