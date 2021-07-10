import bus from "../util/bus.js";

export default {
  mounted() {
    bus.$emit("stop:spinner");
  },
};
