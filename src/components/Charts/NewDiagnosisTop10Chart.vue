<template>
	<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseChart from './BaseChart.vue';
	import newDiagnosisTop10Options from '../../options/world/newDiagnosisTop10Option';

	const state = reactive({
		chartOption: newDiagnosisTop10Options,
		chartId: 'new-diagnosis-top10-chart',
	});
</script>

<style lang="scss" scoped></style>
