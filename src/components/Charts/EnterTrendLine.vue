<template>
	<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseChart from './BaseChart.vue';
	import enterTrendLineOption from '../../options/enterTrendLineOption';

	const state = reactive({
		chartOption: enterTrendLineOption,
		chartId: 'trent-line-chart',
	});
</script>

<style lang="scss" scoped></style>
