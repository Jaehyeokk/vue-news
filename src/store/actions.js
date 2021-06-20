import { fetchList, fetchUserInfo, fetchAskItem } from "../api/index";

export default {
  async FETCH_LIST_ITEM({ commit }, name) {
    try {
      const response = await fetchList(name);
      commit("SET_LIST_ITEM", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_USER({ commit }, username) {
    try {
      const response = await fetchUserInfo(username);
      commit("SET_USER", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK_ITEM({ commit }, id) {
    try {
      const response = await fetchAskItem(id);
      commit("SET_ASK_ITEM", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
