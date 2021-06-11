import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index";

export default {
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
};
