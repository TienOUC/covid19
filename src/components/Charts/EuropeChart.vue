<template>
	<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseChart from './BaseChart.vue';
	import europeOptions from '../../options/world/europeTop10Option';

	const state = reactive({
		chartOption: europeOptions,
		chartId: 'europe-chart',
	});
</script>

<style lang="scss" scoped></style>
