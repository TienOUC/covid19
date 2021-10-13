<template>
	<div class="chart-container">
		<div :id="state.chartId" class="chart"></div>
	</div>
</template>

<script setup>
	import * as echarts from 'echarts';
	import { reactive, onBeforeMount, onMounted } from 'vue';

	const props = defineProps({
		options: Object,
		chartId: String,
	});

	const state = reactive({
		chartId: null,
		// chartOptions: null,
	});

	onBeforeMount(() => {
		state.chartId = props.chartId;
		// state.chartOptions = props.options;
	});

	onMounted(() => {
		const baseChartId = echarts.init(document.getElementById(state.chartId));
		// baseChartId.setOption(state.chartOptions);
		baseChartId.setOption(props.options);
	});
</script>

<style lang="scss" scoped>
	.chart-container {
		width: 45.5rem;
		height: auto;
		padding: 1.25rem 1.25rem 0;

		.chart {
			border: 1px #eeeeee solid;
			border-radius: 0.5rem;
			height: 32.5625rem;
		}
	}
</style>
