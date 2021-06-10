<template>
  <div>
    <h2>
      NewsView
    </h2>
    <p>{{ this.fetchedNews }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedNews"]),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>
