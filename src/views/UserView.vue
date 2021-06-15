<template>
  <div>
    <div class="container">
      <h2 class="view-title">
        User Info
      </h2>
      <UserProfile>
        <template slot="user">{{ fetchedUser.id }}</template>
        <template slot="created">{{
          "Joined " + fetchedUser.created
        }}</template>
        <template slot="karma">{{ fetchedUser.karma }}</template>
      </UserProfile>
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
    ...mapGetters(["fetchedUser"]),
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", username);
  },
};
</script>
