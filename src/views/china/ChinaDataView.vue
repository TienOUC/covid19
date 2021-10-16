<template>
	<div class="china-data-view">
		<ChinaDataDashboard />
		<ChinaMapChart />
		<EnterTrendBar />
		<ChinaSwitchCards />
		<ChinaTable />
	</div>
</template>

<script setup>
	import ChinaDataDashboard from '../../components/Databoard/ChinaDataDashboard.vue';
	import ChinaMapChart from '../../components/Charts/ChinaMapChart.vue';
	import EnterTrendBar from '../../components/Charts/EnterTrendBar.vue';
	import ChinaSwitchCards from '../../components/ChinaSwitchCards.vue';
	import ChinaTable from '../../components/Table/ChinaTable.vue';
</script>

<style lang="scss" scoped>
	.china-data-view {
		widows: 100%;
		height: 100%;
	}
</style>
