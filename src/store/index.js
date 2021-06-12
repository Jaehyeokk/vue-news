import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: [],
    ask_item: {},
  },
  getters: {
    fetchedNews(state) {
      return state.news;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedUser(state) {
      return state.user;
    },
    fetchedAskItem(state) {
      return state.ask_item;
    },
  },
  mutations,
  actions,
});
