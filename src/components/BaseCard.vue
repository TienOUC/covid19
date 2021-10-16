<template>
	<div
		v-for="(item, index) in props.content"
		:class="['card', state.cardIndex == index ? 'card-select' : '']"
		@click="cardSelected(index)"
	>
		<span>{{ item.split('-')[0] }}</span>
		<span>{{ item.split('-')[1] }}</span>
	</div>
</template>

<script setup>
	import { reactive } from 'vue';

	const props = defineProps({
		content: Array,
	});

	const state = reactive({
		cardIndex: 0,
	});

	const cardSelected = (index) => {
		state.cardIndex = index;
	};
</script>

<style lang="scss" scoped>
	.card {
		margin: 0 0.125rem;
		flex: 1;
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
</style>
