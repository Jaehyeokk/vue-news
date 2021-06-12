<template>
  <div>
    <div class="container">
      <h2 class="view-title">
        User Info
      </h2>
      <div class="user-info-wrap">
        <p class="user-info"><span>ID:</span> {{ fetchedUser.id }}</p>
        <p class="user-info"><span>Karma:</span> {{ fetchedUser.karma }}</p>
        <p class="user-info"><span>Created:</span> {{ fetchedUser.created }}</p>
        <div class="user-info">
          <span>About: </span>
          <p v-html="fetchedUser.about"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedUser"]),
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", username);
  },
};
</script>

<style scoped>
.user-info-wrap {
  margin-top: 40px;
}

.user-info-wrap span {
  font-weight: 700;
  color: #333;
  margin-right: 10px;
}

.user-info-wrap .user-info {
  padding: 5px;
  line-height: 1.2;
}
</style>
