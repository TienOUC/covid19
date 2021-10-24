<template>
	<div class="china-switch-cards" @click="changeCard($event)">
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
		content: ['本土新增-确诊趋势', '本土新增-省级TOP10', '现有疑似-省级TOP10', '境外输入-省级TOP10'],
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
		store.commit('changeChinaChartIndex', index);
	};
</script>

<style lang="scss" scoped>
	.china-switch-cards {
		width: calc(100% - 2.25rem);
		height: 3rem;
		margin: 1.25rem auto;

		display: flex;
	}
</style>
