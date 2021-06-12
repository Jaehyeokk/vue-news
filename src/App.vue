<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view :class="`hacker-${this.$route.name}`"></router-view>
  </div>
</template>

<script>
import "./assets/css/reset.css";
import "./assets/css/common.css";
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style></style>
