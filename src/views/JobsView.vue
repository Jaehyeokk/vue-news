<template>
  <div>
    <h2>
      JobsView
    </h2>
    <p>{{ this.fetchedJobs }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedJobs"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
