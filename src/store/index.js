import Vue from 'vue';
import Vuex from 'vuex';
import { fetchAskItem, fetchList, fetchUserInfo } from '@/apis/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		list: '',
		user_info: '',
		ask_item: '',
	},
	mutations: {
		SET_LIST(state, data) {
			state.list = data;
		},
		SET_USER_INFO(state, data) {
			state.user_info = data;
		},
		SET_ASK_ITEM(state, data) {
			state.ask_item = data;
		},
	},
	actions: {
		async FETCH_LIST({ commit }, name) {
			try {
				const res = await fetchList(name);
				commit('SET_LIST', res.data);
				return res;
			} catch (error) {
				console.log(error);
			}
		},
		async FETCH_USER_INFO({ commit }, id) {
			try {
				const res = await fetchUserInfo(id);
				commit('SET_USER_INFO', res.data);
				return res;
			} catch (error) {
				console.log(error);
			}
		},
		async FETCH_ASK_ITEM({ commit }, id) {
			try {
				const res = await fetchAskItem(id);
				commit('SET_ASK_ITEM', res.data);
				return res;
			} catch (error) {
				console.log(error);
			}
		},
	},
});
