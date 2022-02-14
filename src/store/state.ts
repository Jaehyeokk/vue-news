import { AskItemInfo, ListInfo, UserInfo } from '@/apis';

export const state = {
	list: [] as ListInfo[],
	user_info: {} as UserInfo,
	ask_item: {} as AskItemInfo,
};

export type RootState = typeof state;
