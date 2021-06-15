import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchAskItem,
} from "../api/index";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit("SET_NEWS", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_USER({ commit }, username) {
    fetchUserInfo(username)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ASK_ITEM({ commit }, id) {
    fetchAskItem(id)
      .then(({ data }) => {
        commit("SET_ASK_ITEM", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
