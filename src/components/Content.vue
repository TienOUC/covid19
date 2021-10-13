<template>
	<div class="main">
		<DataDashboard />
		<ChinaMapChart />
		<EnterTrendLine />
		<ChartSelectCard />
		<EnterTrendBar />
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import DataDashboard from './DataDashboard.vue';
	import ChinaMapChart from './Charts/ChinaMapChart.vue';
	import EnterTrendLine from './Charts/EnterTrendLine.vue';
	import EnterTrendBar from './Charts/EnterTrendBar.vue';
	import ChartSelectCard from './ChartSelectCard.vue';

	const obj = reactive({});
</script>

<style lang="scss" scoped>
	.main {
		margin: 0 auto;
		width: 48rem;
		min-height: auto;
		background-color: #fff;
		border-radius: 0.75rem;
	}
</style>
