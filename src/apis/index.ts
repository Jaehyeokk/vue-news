import axios, { AxiosResponse } from 'axios';

const baseURL = 'https://api.hnpwa.com/v0';

export interface ListInfo {
	comments_count: number;
	domain?: string;
	id: number;
	points: number;
	time: number;
	time_ago: string;
	title: string;
	type: string;
	url: string;
	user: string;
}

export interface UserInfo {
	created: string;
	created_time: number;
	id: string;
	karma: number;
}

export interface AskItemInfo {
	comments?: AskItemInfo[];
	comments_count: number;
	content: string;
	id: number;
	points: number;
	time: number;
	time_ago: string;
	title: string;
	type: string;
	url: string;
	user: string;
}

function fetchList(name: string): Promise<AxiosResponse<ListInfo[]>> {
	return axios.get(`${baseURL}/${name}/1.json`);
}
function fetchUserInfo(id: string): Promise<AxiosResponse<UserInfo>> {
	return axios.get(`${baseURL}/user/${id}.json`);
}
function fetchAskItem(id: string): Promise<AxiosResponse<AskItemInfo>> {
	return axios.get(`${baseURL}/item/${id}.json`);
}

export { fetchList, fetchUserInfo, fetchAskItem };
