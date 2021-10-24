<template>
	<div class="china-data-view" id="content0">
		<ChinaDataDashboard />
		<ChinaSwitchButton />
		<ChinaMapChart />
		<ChinaTrendChart />
		<ChinaSwitchCards />
		<ChinaTable />
	</div>
</template>

<script setup>
	import ChinaDataDashboard from '../components/Databoard/ChinaDataDashboard.vue';
	import ChinaSwitchButton from '../components/ChinaSwitchButton.vue';
	import ChinaMapChart from '../components/Charts/ChinaMapChart.vue';
	import ChinaTrendChart from '../components/Charts/ChinaTrendChart.vue';
	import ChinaSwitchCards from '../components/ChinaSwitchCards.vue';
	import ChinaTable from '../components/Table/ChinaTable.vue';
</script>

<style lang="scss" scoped>
	.china-data-view {
		widows: 100%;
		height: 100%;
	}
</style>
