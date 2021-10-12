<template>
	<div class="main">
		<DataDashboard />
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import DataDashboard from './DataDashboard.vue';

	const obj = reactive({});
</script>

<style lang="scss" scoped>
	.main {
		margin: 0 auto;
		width: 48rem;
		min-height: 100vh;
		background-color: #fff;
		border-radius: 12px;
	}
</style>
