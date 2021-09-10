<template>
	<div class="news-view">
		<HackerList></HackerList>
	</div>
</template>

<script>
import ListMixin from '@/mixins/ListMixin';
import HackerList from '@/components/HackerList.vue';
export default {
	components: {
		HackerList,
	},
	mixins: [ListMixin],
};
</script>

<style></style>
