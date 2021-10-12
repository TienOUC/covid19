<template>
	<ul class="title">
		<li
			v-for="(title, index) in state.itemTitle"
			:key="index"
			:class="{ choose: state.selectItemIndex == index }"
			@click="titleToggle(index)"
		>
			{{ title }}
		</li>
	</ul>
	<div class="data-board">
		<h3>国内疫情</h3>
		<div class="data-board-subtitle">
			<span>数据更新至 2021.10.12 10:52</span>
			<span>数据说明</span>
		</div>
		<DataItemContainer />
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import DataItemContainer from './DataItemContainer.vue';

	const state = reactive({
		itemTitle: ['国内疫情', '国外疫情', '实时播报'],
		selectItemIndex: 0,
	});

	const titleToggle = (index) => {
		state.selectItemIndex = index;
	};
</script>

<style lang="scss" scoped>
	.title {
		margin: 0 auto;
		padding: 20px 100px 0;
		display: flex;
		justify-content: space-between;
		font-weight: bold;
		border-bottom: 1px #f5f6f7 solid;

		li {
			padding: 10px 0;
			font-size: 1rem;
			cursor: pointer;
		}

		.choose {
			color: #10aeb5;
			border-bottom: 3px solid #10aeb5;
		}
	}

	.data-board {
		margin-top: 1.25rem;
		margin-left: 1.0625rem;
		width: 45.875rem;
		height: auto;
		h3 {
			margin-bottom: 0.625rem;
			font-size: 1rem;
			font-weight: 700;
		}
		.data-board-subtitle {
			display: flex;
			justify-content: space-between;
			margin-bottom: 1.875rem;
			span {
				font-size: 0.8125rem;
				font-weight: 700;
				color: #999;
			}
		}
		.data-item {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
