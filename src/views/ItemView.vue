<template>
  <div class="item-view">
    <div class="container">
      <p class="title">{{ this.ask_item.title }}</p>
      <p class="user-info">
        <router-link :to="`/user/${ask_item.user}`">{{
          this.ask_item.user
        }}</router-link>
        <span>{{ this.ask_item.time_ago }}</span>
        <span>{{ this.ask_item.points }}p</span>
      </p>
      <div class="contents" v-html="ask_item.content"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["ask_item"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK_ITEM", this.$route.params.id);
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
