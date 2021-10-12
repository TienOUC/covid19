<template>
	<div class="data-content">
		<div class="data-title">{{ title }}</div>
		<div class="data-current" :style="{ color: color }">2501</div>
		<div class="data-desc">较昨日-32</div>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue';

	defineProps({
		title: String,
		color: String,
	});
</script>

<style lang="scss" scoped>
	.data-content {
		width: 11.46875rem;
		height: 3.9375rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.data-title {
			font-size: 0.9375rem;
			height: 0.9375rem;
			line-height: 0.9375rem;
			margin-bottom: 0.625rem;
			color: #333;
		}
		.data-current {
			// color: #e86d48;
			font-size: 1.1875rem;
			font-weight: 700;
		}
		.data-desc {
			color: #999;
			font-size: 0.8125rem;
			height: 0.8125rem;
			line-height: 0.8125rem;
			margin-top: 0.375rem;
		}
	}
</style>
