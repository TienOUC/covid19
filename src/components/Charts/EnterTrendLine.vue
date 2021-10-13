<template>
	<div class="enter-trend">
		<!-- <div :id="state.id" class="enter-trend-linechart"></div> -->
		<div id="enter-trend-linechart" class="enter-trend-linechart"></div>
	</div>
</template>

<script setup>
	import * as echarts from 'echarts';
	import { reactive, onBeforeMount, onMounted } from 'vue';
	import enterTrendLineOption from '../../options/enterTrendLineOption';
	const state = reactive({
		// id: null,
		options: null,
	});

	// const idGenerator = () => {
	// 	return new Date().getTime();
	// };

	onBeforeMount(() => {
		// state.id = idGenerator();
		state.options = enterTrendLineOption;
	});

	onMounted(() => {
		// const chinaMapChart = echarts.init(document.getElementById(state.id));
		const enterTrendLineChart = echarts.init(document.getElementById('enter-trend-linechart'));
		enterTrendLineChart.setOption(state.options);
	});
</script>

<style lang="scss" scoped>
	.enter-trend {
		width: 45.5rem;
		height: auto;
		padding: 1.25rem 1.25rem 0;

		.enter-trend-linechart {
			border: 1px #eeeeee solid;
			border-radius: 0.5rem;
			height: 32.5625rem;
		}
	}
</style>
