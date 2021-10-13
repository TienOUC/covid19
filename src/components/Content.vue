<template>
	<div class="main">
		<DataDashboard />
		<ChinaMapChart />
		<EnterTrendLine />
		<ChartSelectCard />
		<EnterTrendBar />
		<!-- <TestChart /> -->
	</div>
</template>

<script setup>
	import DataDashboard from './DataDashboard.vue';
	import ChinaMapChart from './Charts/ChinaMapChart.vue';
	import EnterTrendLine from './Charts/EnterTrendLine.vue';
	import EnterTrendBar from './Charts/EnterTrendBar.vue';
	import ChartSelectCard from './ChartSelectCard.vue';
	// import TestChart from './Charts/TestChart.vue';
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
