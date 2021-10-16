<template>
	<div class="world-switch-cards">
		<BaseCard :content="state.content" />
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseCard from './BaseCard.vue';

	const state = reactive({
		content: ['新增确诊-TOP10', '南美多国-新增确诊', '北美多国-新增确诊', '亚洲多国-新增确诊', '欧洲多国-新增确诊'],
	});
</script>

<style lang="scss" scoped>
	.world-switch-cards {
		width: calc(100% - 2.25rem);
		height: 3rem;
		margin: 1.25rem auto;

		display: flex;
	}
</style>
