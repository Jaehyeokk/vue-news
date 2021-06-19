import { fetchList, fetchUserInfo, fetchAskItem } from "../api/index";

export default {
  FETCH_LIST_ITEM({ commit }, name) {
    return fetchList(name)
      .then(({ data }) => {
        commit("SET_LIST_ITEM", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_USER({ commit }, username) {
    return fetchUserInfo(username)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ASK_ITEM({ commit }, id) {
    return fetchAskItem(id)
      .then(({ data }) => {
        commit("SET_ASK_ITEM", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
