import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import bus from "../utils/bus.js";
import { store } from "../store/index.js";

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
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST_ITEM", to.name)
          .then(() => next())
          .catch((err) => {
            console.log(err);
          });
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST_ITEM", to.name)
          .then(() => next())
          .catch((err) => {
            console.log(err);
          });
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST_ITEM", to.name)
          .then(() => next())
          .catch((err) => {
            console.log(err);
          });
      },
    },
    {
      path: "/user/:id",
      name: "user",
      component: UserView,
    },
    {
      path: "/item/:id",
      name: "item",
      component: ItemView,
    },
  ],
});
