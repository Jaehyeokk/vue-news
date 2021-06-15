<template>
  <div>
    <div class="container">
      <h2 class="view-title">
        {{ fetchedAskItem.title }}
        <!-- <p class="user-info">
          <router-link :to="`/user/${fetchedAskItem.user}`">{{
            fetchedAskItem.user
          }}</router-link>
          {{ fetchedAskItem.time_ago }}
        </p> -->
        <UserProfile>
          <router-link slot="user" :to="`/user/${fetchedAskItem.id}`">
            {{ fetchedAskItem.user }}
          </router-link>
          <template slot="created">
            {{ fetchedAskItem.time_ago }}
          </template>
        </UserProfile>
      </h2>
      <p class="item-content" v-html="fetchedAskItem.content"></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["fetchedAskItem"]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ASK_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-info {
  margin-top: 5px;
  font-weight: 400;
  font-size: 12px;
  color: #555;
}

.item-content {
  width: 100%;
  margin-top: 30px;
  line-height: 1.2;
}

.item-content p {
  width: 100%;
}
</style>
