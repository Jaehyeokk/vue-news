<template>
  <div>
    <div class="container">
      <h2 class="view-title">
        {{ fetchedAskItem.title }}
        <UserProfile>
          <router-link slot="user" :to="`/user/${fetchedAskItem.id}`">
            {{ fetchedAskItem.user }}
          </router-link>
          <template slot="created">
            {{ "Posted " + fetchedAskItem.time_ago }}
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
.item-content {
  width: 100%;
  margin-top: 30px;
  line-height: 1.2;
}

.item-content p {
  width: 100%;
}
</style>
