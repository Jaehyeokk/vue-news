<template>
  <div id="app">
    <News-header></News-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NewsHeader from "./components/NewsHeader.vue";
import "./assets/css/reset.css";
import "./assets/css/common.css";
export default {
  name: "App",
  components: {
    NewsHeader,
  },
};
</script>

<style></style>
