<template>
	<div class="user-page">
		<div class="container">
			<UserProfile>
				<template slot="avatar"><i class="fas fa-user"></i></template>
				<template slot="name">ID: {{ this.user_info.id }}</template>
				<template slot="karma">Karma: {{ this.user_info.karma }}</template>
				<template slot="created"
					>Created: {{ this.user_info.created }}</template
				>
			</UserProfile>
			<div class="user-dec" v-html="user_info.about"></div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import bus from '@/util/bus';
import { mapState } from 'vuex';
import UserProfile from '@/components/UserProfile.vue';

export default Vue.extend({
	components: {
		UserProfile,
	},

	computed: {
		...mapState(['user_info']),
	},

	created() {
		bus.$emit('start:spinner');
		this.$store
			.dispatch('FETCH_USER_INFO', this.$route.params.id)
			.then(() => bus.$emit('stop:spinner'))
			.catch((e: any) => console.log(e));
	},
});
</script>

<style scoped>
.container {
	padding: 20px;
	box-sizing: border-box;
}

.user-dec {
	padding: 10px;
	margin-top: 30px;
	border: 1px solid #333;
	line-height: 1.3;
}
</style>
