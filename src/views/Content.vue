<template>
	<div class="content">
		<ChinaDataView />
		<WorldDataView />
	</div>
</template>

<script setup>
	import ChinaDataView from './china/ChinaDataView.vue';
	import WorldDataView from './world/WorldDataView.vue';
</script>

<style lang="scss" scoped>
	.content {
		margin: 0 auto;
		padding-bottom: 1.25rem;
		width: 48rem;
		min-height: auto;
		background-color: #fff;
		border-radius: 0.75rem;
	}
</style>
