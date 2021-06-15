<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view :class="`hacker-${this.$route.name}`"></router-view>
    <Spinner :loading="loading"></Spinner>
  </div>
</template>

<script>
import "./assets/css/reset.css";
import "./assets/css/common.css";
import AppHeader from "./components/AppHeader.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";

export default {
  name: "App",
  components: {
    AppHeader,
    Spinner,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    startSpinner() {
      this.loading = true;
    },
    endSpinner() {
      this.loading = false;
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("stop:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("stop:spinner", this.endSpinner);
  },
};
</script>

<style>
#app {
  background-color: #fafafa;
}
</style>
