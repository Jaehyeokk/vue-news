<template>
  <div>
    <h2>
      AskView
    </h2>
    <p>{{ this.fetchedAsk }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
