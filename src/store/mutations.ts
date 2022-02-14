import { AskItemInfo, ListInfo, UserInfo } from '@/apis';
import { RootState } from './state';

export const mutations = {
	SET_LIST(state: RootState, data: ListInfo[]): void {
		state.list = data;
	},
	SET_USER_INFO(state: RootState, data: UserInfo): void {
		state.user_info = data;
	},
	SET_ASK_ITEM(state: RootState, data: AskItemInfo): void {
		state.ask_item = data;
	},
};

export type Mutations = typeof mutations;
