<template>
	<div class="chart-select-card">
		<div
			v-for="(item, index) in state.card"
			:class="['card', state.selectCardIdx == index ? 'card-select' : '']"
			@click="cardSelected(index)"
		>
			<span>{{ item.split('-')[0] }}</span>
			<span>{{ item.split('-')[1] }}</span>
		</div>
	</div>
</template>

<script setup>
	import { reactive } from 'vue';

	const state = reactive({
		selectCardIdx: 0,
		card: ['境外输入-新增趋势', '境外输入-累计趋势', '境外输入-省级TOP10'],
	});

	const cardSelected = (index) => {
		state.selectCardIdx = index;
	};
</script>

<style lang="scss" scoped>
	.chart-select-card {
		width: calc(100% - 2.5rem);
		height: 3rem;
		margin: 1.25rem auto;
		display: flex;
		justify-content: space-between;

		.card {
			width: 33%;
			flex: 1/3;
			border-radius: 0.5rem;
			background-color: #f5f6f7;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;

			&:hover {
				cursor: pointer;
			}
			span {
				display: block;
				font-size: 0.875rem;
			}
		}

		.card-select {
			background-color: #00bec7;
			color: #fff;
			font-weight: 900;
			position: relative;
			&::before {
				content: '';
				display: block;
				width: 0;
				height: 0;
				font-weight: 700;
				border-width: 0.3125rem;
				border-style: solid;
				border-color: transparent transparent #00bec7;
				position: absolute;
				top: -0.625rem;
			}
		}
	}
</style>
