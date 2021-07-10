<template>
  <div class="item-view">
    <div class="container">
      <p class="title">{{ this.ask_item.title }}</p>
      <UserProfile>
        <template slot="avatar">
          <i class="fas fa-user"></i>
        </template>
        <template slot="name"
          >ID:
          <router-link :to="`/user/${ask_item.user}`">{{
            this.ask_item.user
          }}</router-link>
        </template>
        <template slot="karma">point: {{ this.ask_item.points }}p </template>
        <template slot="created">
          {{ this.ask_item.time_ago }}
        </template>
      </UserProfile>
      <div class="contents" v-html="ask_item.content"></div>
    </div>
  </div>
</template>

<script>
import bus from "../util/bus.js";
import UserProfile from "../components/UserProfile.vue";
import { mapState } from "vuex";
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapState(["ask_item"]),
  },
  created() {
    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_ASK_ITEM", this.$route.params.id)
      .then(() => bus.$emit("stop:spinner"))
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

.item-view a {
  color: #111;
  text-decoration: none;
}

.item-view a:hover {
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
