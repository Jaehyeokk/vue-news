import Vue from 'vue';
import bus from '@/util/bus.js';
import { store } from '@/store/index.js';
import VueRouter from 'vue-router';
import NewsView from '@/views/NewsView.vue';
import JobsView from '@/views/JobsView.vue';
import AskView from '@/views/AskView.vue';
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	base: '/vue-news',
	routes: [
		{
			path: '/',
			redirect: '/news',
		},
		{
			path: '/news',
			name: 'news',
			component: NewsView,
			beforeEnter(to, from, next) {
				bus.$emit('start:spinner');
				store
					.dispatch('FETCH_LIST', to.name)
					.then(() => {
						next();
					})
					.catch(e => {
						console.log(e);
					});
			},
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: JobsView,
			beforeEnter(to, from, next) {
				bus.$emit('start:spinner');
				store
					.dispatch('FETCH_LIST', to.name)
					.then(() => {
						next();
					})
					.catch(e => {
						console.log(e);
					});
			},
		},
		{
			path: '/ask',
			name: 'ask',
			component: AskView,
			beforeEnter(to, from, next) {
				bus.$emit('start:spinner');
				store
					.dispatch('FETCH_LIST', to.name)
					.then(() => {
						next();
					})
					.catch(e => {
						console.log(e);
					});
			},
		},
		{
			path: '/user/:id',
			name: 'user',
			component: UserView,
		},
		{
			path: '/ask/:id',
			name: 'item',
			component: ItemView,
		},
	],
});
