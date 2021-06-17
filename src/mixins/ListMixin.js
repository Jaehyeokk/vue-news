import bus from "../utils/bus.js";

export default {
  created() {
    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_LIST_ITEM", this.$route.name)
      .then(() => {
        bus.$emit("stop:spinner");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
