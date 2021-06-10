import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
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
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    },
    SET_JOBS(state, data) {
      state.jobs = data;
    },
    SET_ASK(state, data) {
      state.ask = data;
    },
  },
  actions: {
    FETCH_NEWS({ commit }) {
      fetchNewsList()
        .then(({ data }) => {
          console.log(data);
          commit("SET_NEWS", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          console.log(data);
          commit("SET_JOBS", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          console.log(data);
          commit("SET_ASK", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
