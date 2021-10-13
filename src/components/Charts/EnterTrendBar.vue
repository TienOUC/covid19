<template>
	<div class="enter-trend">
		<!-- <div :id="state.id" class="enter-trend-barchart"></div> -->
		<div id="enter-trend-barchart" class="enter-trend-barchart"></div>
	</div>
</template>

<script setup>
	import * as echarts from 'echarts';
	import { reactive, onBeforeMount, onMounted } from 'vue';
	import enterTrendBarOption from '../../options/enterTrendBarOption';
	const state = reactive({
		// id: null,
		options: null,
	});

	// const idGenerator = () => {
	// 	return new Date().getTime();
	// };

	onBeforeMount(() => {
		// state.id = idGenerator();
		state.options = enterTrendBarOption;
	});

	onMounted(() => {
		// const chinaMapChart = echarts.init(document.getElementById(state.id));
		const enterTrendBarChart = echarts.init(document.getElementById('enter-trend-barchart'));
		enterTrendBarChart.setOption(state.options);
	});
</script>

<style lang="scss" scoped>
	.enter-trend {
		width: 45.5rem;
		height: auto;
		padding: 1.25rem 1.25rem 0;

		.enter-trend-barchart {
			border: 1px #eeeeee solid;
			border-radius: 0.5rem;
			height: 32.5625rem;
		}
	}
</style>
