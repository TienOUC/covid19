<template>
	<div class="world-data-view">
		<WorldDataDashboard />
		<WorldMapChart />
		<NewDiagnosisTop10Chart />
		<WorldSwitchCard />
		<WorldTable />
	</div>
</template>

<script setup>
	import WorldMapChart from '../../components/Charts/WorldMapChart.vue';
	import WorldSwitchCard from '../../components/WorldSwitchCard.vue';
	import NewDiagnosisTop10Chart from '../../components/Charts/NewDiagnosisTop10Chart.vue';
	import WorldDataDashboard from '../../components/Databoard/WorldDataDashboard.vue';
	import WorldTable from '../../components/Table/WorldTable.vue';
</script>

<style lang="scss" scoped>
	.world-data-view {
		widows: 100%;
		height: 100%;
	}
</style>
