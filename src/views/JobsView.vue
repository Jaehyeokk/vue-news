<template>
	<div class="jobs-view">
		<HackerList></HackerList>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListMixin from '@/mixins/ListMixin';
import HackerList from '@/components/HackerList.vue';

export default Vue.extend({
	components: {
		HackerList,
	},

	mixins: [ListMixin],
});
</script>
