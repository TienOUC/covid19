<template>
	<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseChart from './BaseChart.vue';
	import enterTrendBarOption from '../../options/china/enterTrendBarOption';

	const state = reactive({
		chartOption: enterTrendBarOption,
		chartId: 'trend-bar-chart',
	});
</script>

<style lang="scss" scoped></style>
