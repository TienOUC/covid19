<template>
	<div class="china-map">
		<SwitchButton />
		<div :id="state.id" class="china-map-chart"></div>
	</div>
</template>

<script setup>
	import * as echarts from 'echarts';
	import { reactive, onBeforeMount, onMounted } from 'vue';
	import chinaMapOptions from '../../options/chinaMapOption';
	import SwitchButton from '../SwitchButton.vue';
	// defineProps({
	// 	width: {
	// 		type: String,
	// 		default: '600px',
	// 	},
	// 	height: {
	// 		type: String,
	// 		default: '400px',
	// 	},
	// });

	// computed(() => {
	// 	return {
	// 		width: state.width,
	// 		height: state.height,
	// 	};
	// });

	const state = reactive({
		id: null,
		options: null,
	});

	const idGenerator = () => {
		return new Date().getTime();
	};

	onBeforeMount(() => {
		state.id = idGenerator();
		state.options = chinaMapOptions;
	});

	onMounted(() => {
		// echarts.registerMap('china', {geoJSON: chinaMap})
		const chinaMapChart = echarts.init(document.getElementById(state.id));
		chinaMapChart.setOption(state.options);
	});
</script>

<style lang="scss" scoped>
	.china-map {
		width: 45.5rem;
		height: auto;
		padding: 1.25rem 1.25rem 0;
		background-color: #f8f9fa;

		.china-map-chart {
			height: 35.0625rem;
		}
	}
</style>
