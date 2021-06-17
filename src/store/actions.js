import { fetchList, fetchUserInfo, fetchAskItem } from "../api/index";

export default {
  FETCH_LIST_ITEM({ commit }, name) {
    fetchList(name)
      .then(({ data }) => {
        commit("SET_LIST_ITEM", data);
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
