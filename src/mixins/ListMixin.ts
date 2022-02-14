import bus from '@/util/bus';

export default {
	mounted(): void {
		bus.$emit('stop:spinner');
	},
};
