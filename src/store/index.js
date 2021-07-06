import Vue from "vue";
import Vuex from "vuex";
import {
  fetchAskItem,
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
} from "../apis/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news_list: "",
    jobs_list: "",
    ask_list: "",
    user_info: "",
    ask_item: "",
  },
  mutations: {
    SET_NEWS_LIST(state, data) {
      state.news_list = data;
    },
    SET_JOBS_LIST(state, data) {
      state.jobs_list = data;
    },
    SET_ASK_LIST(state, data) {
      state.ask_list = data;
    },
    SET_USER_INFO(state, data) {
      state.user_info = data;
    },
    SET_ASK_ITEM(state, data) {
      state.ask_item = data;
    },
  },
  actions: {
    async FETCH_NEWS_LIST({ commit }) {
      try {
        const res = await fetchNewsList();
        commit("SET_NEWS_LIST", res.data);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_JOBS_LIST({ commit }) {
      try {
        const res = await fetchJobsList();
        commit("SET_JOBS_LIST", res.data);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_ASK_LIST({ commit }) {
      try {
        const res = await fetchAskList();
        commit("SET_ASK_LIST", res.data);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_USER_INFO({ commit }, id) {
      try {
        const res = await fetchUserInfo(id);
        commit("SET_USER_INFO", res.data);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_ASK_ITEM({ commit }, id) {
      try {
        const res = await fetchAskItem(id);
        commit("SET_ASK_ITEM", res.data);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
