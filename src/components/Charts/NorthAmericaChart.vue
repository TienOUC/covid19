<template>
	<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseChart from './BaseChart.vue';
	import northAmericaOptions from '../../options/world/northAmericaOption';

	const state = reactive({
		chartOption: northAmericaOptions,
		chartId: ' north-america-chart',
	});
</script>

<style lang="scss" scoped></style>
