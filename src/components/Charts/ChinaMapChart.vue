<template>
	<div class="china-map">
		<SwitchButton />
		<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseChart from './BaseChart.vue';
	import chinaMapOptions from '../../options/chinaMapOption';
	import SwitchButton from '../SwitchButton.vue';

	const state = reactive({
		chartOption: chinaMapOptions,
		chartId: 'china-map-chart',
	});
</script>

<style lang="scss" scoped>
	.china-map {
		width: 100%;
		height: auto;
		margin: 0 auto;
		padding: 1.25rem 0;
		background-color: #f8f9fa;
	}
</style>
