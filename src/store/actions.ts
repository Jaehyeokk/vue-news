import {
	AskItemInfo,
	fetchAskItem,
	fetchList,
	fetchUserInfo,
	ListInfo,
	UserInfo,
} from '@/apis/index';
import { RootState } from './state';
// import { Mutations } from './mutations';
import { ActionContext } from 'vuex';
import { AxiosResponse } from 'axios';

// type MyActionContext = {
// 	commit<K extends keyof Mutations>(
// 		key: K,
// 		payload?: Parameters<Mutations[K]>[1],
// 	): ReturnType<Mutations[K]>;
// } & Omit<ActionContext<RootState, RootState>, 'commit'>;
type MyActionContext = ActionContext<RootState, RootState>;
export type Actions = typeof actions;

export const actions = {
	async FETCH_LIST(
		{ commit }: MyActionContext,
		name: string,
	): Promise<AxiosResponse<ListInfo[]> | undefined> {
		try {
			const res = await fetchList(name);
			commit('SET_LIST', res.data);
			return res;
		} catch (error) {
			console.log(error);
		}
	},
	async FETCH_USER_INFO(
		{ commit }: MyActionContext,
		id: string,
	): Promise<AxiosResponse<UserInfo> | undefined> {
		try {
			const res = await fetchUserInfo(id);
			commit('SET_USER_INFO', res.data);
			return res;
		} catch (error) {
			console.log(error);
		}
	},
	async FETCH_ASK_ITEM(
		{ commit }: MyActionContext,
		id: string,
	): Promise<AxiosResponse<AskItemInfo> | undefined> {
		try {
			const res = await fetchAskItem(id);
			commit('SET_ASK_ITEM', res.data);
			return res;
		} catch (error) {
			if (typeof error === 'string') {
				error.toUpperCase();
				throw new Error(error);
			} else if (error instanceof Error) {
				throw new Error(error.message);
			}
		}
	},
};
