<template>
	<DataDashboardTitle />
	<DataDashboard :title="state.title" />
</template>

<script setup>
	import { reactive } from 'vue';
	import DataDashboardTitle from './DataDashboardTitle.vue';
	import DataDashboard from './DataDashboard.vue';

	const state = reactive({
		title: '国内疫情',
	});
</script>

<style lang="scss" scoped></style>
