<template>
	<div class="ask-view">
		<HackerList></HackerList>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import HackerList from '@/components/HackerList.vue';
import ListMixin from '@/mixins/ListMixin';

export default Vue.extend({
	components: {
		HackerList,
	},

	mixins: [ListMixin],
});
</script>
