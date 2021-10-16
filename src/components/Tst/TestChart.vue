<template>
	<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseChart from '../Charts/BaseChart.vue';
	import testOption from '../../options/tst/testOption';

	const state = reactive({
		chartOption: testOption,
		chartId: 'test-chart',
	});
</script>

<style lang="scss" scoped></style>
