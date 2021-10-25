<template>
	<div class="tip">
		<span></span>
		{{ tips }}
		<span></span>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const tips = ref('积极防护，保护自己，戴口罩，勤洗手');
</script>

<style lang="scss" scoped>
	.tip {
		margin: 1.25rem auto;
		width: 48rem;
		height: 3.125rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
		font-weight: bolder;
		border-radius: 0.75rem;
		background-color: #fff;

		span {
			margin: 4rem;
			width: 0.3125rem;
			height: 0.3125rem;
			background-color: #10aeb5;
		}
	}
</style>
