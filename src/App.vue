<template>
  <div id="app">
    <AppHeader></AppHeader>
    <transition name="fade">
      <router-view :class="`hacker-${this.$route.name}`"></router-view>
    </transition>
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
