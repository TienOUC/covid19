<template>
	<div class="world-data-view" id="content1">
		<WorldDataDashboard />
		<WorldSwitchButton />
		<WorldMapChart />
		<WorldTrendChart />
		<WorldSwitchCard />
		<WorldTable />
	</div>
</template>

<script setup>
	import WorldDataDashboard from '../components/Databoard/WorldDataDashboard.vue';
	import WorldSwitchButton from '../components/WorldSwitchButton.vue';
	import WorldMapChart from '../components/Charts/WorldMapChart.vue';
	import WorldTrendChart from '../components/Charts/WorldTrendChart.vue';
	import WorldSwitchCard from '../components/WorldSwitchCard.vue';
	import WorldTable from '../components/Table/WorldTable.vue';
</script>

<style lang="scss" scoped>
	.world-data-view {
		widows: 100%;
		height: 100%;
	}
</style>
