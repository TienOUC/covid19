<template>
	<DataDashboard :title="state.title" />
</template>

<script setup>
	import { reactive } from 'vue';
	import DataDashboard from './DataDashboard.vue';

	const state = reactive({
		title: '国外疫情',
	});
</script>

<style lang="scss" scoped></style>
