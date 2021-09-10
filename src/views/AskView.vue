<template>
	<div class="ask-view">
		<HackerList></HackerList>
	</div>
</template>

<script>
import HackerList from '@/components/HackerList.vue';
import ListMixin from '@/mixins/ListMixin.js';
export default {
	components: {
		HackerList,
	},
	mixins: [ListMixin],
};
</script>

<style></style>
