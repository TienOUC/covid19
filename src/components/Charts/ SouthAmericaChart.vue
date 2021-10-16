<template>
	<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseChart from './BaseChart.vue';
	import southAmericaOptions from '../../options/world/southAmericaOption';

	const state = reactive({
		chartOption: southAmericaOptions,
		chartId: 'south-america-chart',
	});
</script>

<style lang="scss" scoped></style>
