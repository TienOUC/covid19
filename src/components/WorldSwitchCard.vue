<template>
	<div class="world-switch-cards" @click="changeCard($event)">
		<BaseCard :content="state.content" :index="state.focusIndex" />
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseCard from './BaseCard.vue';
	import { useStore } from 'vuex';

	const store = useStore();
	const state = reactive({
		focusIndex: 0,
		content: [
			'现有确诊-国家TOP10',
			'新增确诊-美洲TOP10',
			'新增确诊-非洲TOP10',
			'新增确诊-亚洲TOP10',
			'新增确诊-欧洲TOP10',
		],
	});

	const changeCard = (event) => {
		const target = event.target;
		const className = target.className;

		if (className == 'card') {
			const index = parseInt(target.dataset.index);
			state.focusIndex = index;
			cardSelected(index);
		}
	};

	const cardSelected = (index) => {
		store.commit('changeWorldChartIndex', index);
	};
</script>

<style lang="scss" scoped>
	.world-switch-cards {
		width: calc(100% - 2.25rem);
		height: 3rem;
		margin: 1.25rem auto;

		display: flex;
	}
</style>
