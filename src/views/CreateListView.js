import ListView from "./ListView.vue";
import bus from "../utils/bus.js";

export default function createListView(name) {
  return {
    name,
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
    render(createElement) {
      return createElement(ListView);
    },
  };
}
