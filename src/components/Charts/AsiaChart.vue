<template>
	<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseChart from './BaseChart.vue';
	import asiaOptions from '../../options/world/asiaTop10Option';

	const state = reactive({
		chartOption: asiaOptions,
		chartId: 'asia-chart',
	});
</script>

<style lang="scss" scoped></style>
