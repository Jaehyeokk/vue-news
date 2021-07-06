<template>
  <div class="user-page">
    <div class="container">
      <div class="user-info-wrap">
        <div class="user-avatar"><i class="fas fa-user"></i></div>
        <div class="user-info">
          <p>
            ID: <span class="user-name">{{ this.user_info.id }}</span>
          </p>
          <p class="user-karma">Karma: {{ this.user_info.karma }}</p>
          <p class="user-created">Created: {{ this.user_info.created }}</p>
        </div>
      </div>
      <div class="user-dec" v-html="user_info.about"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user_info"]),
  },
  created() {
    this.$store.dispatch("FETCH_USER_INFO", this.$route.params.id);
  },
};
</script>

<style scoped>
.container {
  width: 1080px;
  padding: 20px;
  box-sizing: border-box;
}

.user-info-wrap {
  display: flex;
}

.user-avatar {
  font-size: 52px;
  margin-right: 20px;
}

.user-info p {
  font-size: 14px;
  line-height: 1.3;
}

.user-name {
  font-weight: 700;
}

.user-dec {
  padding: 10px;
  margin-top: 30px;
  border: 1px solid #333;
  line-height: 1.3;
}

@media screen and (max-width: 1080px) {
  .container {
    width: 100%;
  }
}
</style>
