<template>
	<div id="app">
		<News-header></News-header>
		<router-view></router-view>
		<Spinner :loading="loading"></Spinner>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import bus from '@/util/bus';
import '@/assets/css/reset.css';
import '@/assets/css/common.css';
import NewsHeader from '@/components/NewsHeader.vue';
import Spinner from '@/components/Spinner.vue';
export default Vue.extend({
	name: 'App',

	components: {
		NewsHeader,
		Spinner,
	},

	data() {
		return {
			loading: false,
		};
	},

	methods: {
		startSpinner() {
			this.loading = true;
		},
		stopSpinner() {
			this.loading = false;
		},
	},

	created() {
		bus.$on('start:spinner', this.startSpinner);
		bus.$on('stop:spinner', this.stopSpinner);
	},

	beforeDestroy() {
		bus.$off('start:spinner', this.startSpinner);
		bus.$off('stop:spinner', this.stopSpinner);
	},
});
</script>
