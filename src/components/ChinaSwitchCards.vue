<template>
	<div class="china-switch-cards">
		<BaseCard :content="state.content" />
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseCard from './BaseCard.vue';

	const state = reactive({
		content: ['境外输入-新增趋势', '境外输入-累计趋势', '境外输入-省级TOP10'],
	});
</script>

<style lang="scss" scoped>
	.china-switch-cards {
		width: calc(100% - 2.25rem);
		height: 3rem;
		margin: 1.25rem auto;

		display: flex;
	}
</style>
