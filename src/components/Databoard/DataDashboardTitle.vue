<template>
	<ul class="data-dashboard-title">
		<li
			v-for="(title, index) in state.itemTitle"
			:key="index"
			:class="{ choose: state.selectItemIndex == index }"
			@click="titleToggle(index)"
		>
			{{ title }}
		</li>
	</ul>
</template>

<script setup>
	import { reactive } from 'vue';

	const state = reactive({
		itemTitle: ['国内疫情', '国外疫情', '实时播报'],
		selectItemIndex: 0,
	});

	const titleToggle = (index) => {
		state.selectItemIndex = index;
	};
</script>

<style lang="scss" scoped>
	.data-dashboard-title {
		margin: 0 auto;
		padding: 0.625rem 6.25rem 0;
		display: flex;
		justify-content: space-between;
		font-weight: 500;
		border-bottom: 0.0625rem #f5f6f7 solid;

		li {
			padding: 0.625rem 0;
			font-size: 1rem;
			cursor: pointer;
		}

		.choose {
			color: #10aeb5;
			border-bottom: 0.1875rem solid #10aeb5;
		}
	}
</style>
