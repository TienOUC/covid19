<template>
	<div class="data-item-row">
		<DataItem v-for="item in dataContent" :title="item.title" :color="item.color" />
	</div>
</template>

<script setup>
	import DataItem from './DataItem.vue';

	defineProps({
		dataContent: Array,
	});
</script>

<style lang="scss" scoped>
	.data-item-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1.25rem;
	}
</style>
