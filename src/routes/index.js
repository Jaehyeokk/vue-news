import Vue from "vue";
import VueRouter from "vue-router";
import NewsPage from "../views/NewsPage.vue";
import JobsPage from "../views/JobsPage.vue";
import AskPage from "../views/AskPage.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: NewsPage,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsPage,
    },
    {
      path: "/ask",
      name: "ask",
      component: AskPage,
    },
  ],
});
