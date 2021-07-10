import bus from "../util/bus.js";

export default {
  created() {
    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_LIST", this.$route.name)
      .then(() => {
        bus.$emit("stop:spinner");
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
