<template>
	<div class="world-map">
		<SwitchButton :name="state.name" :desc="desc" @change-card="handleChnageCard" />
		<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
	</div>
</template>

<script setup>
	import { reactive, computed } from 'vue';
	import BaseChart from './BaseChart.vue';
	import worldMapOptions from '../../options/world/worldMapOption';
	import SwitchButton from '../SwitchButton.vue';

	const state = reactive({
		chartOption: worldMapOptions,
		chartId: 'world-map-chart',
		name: 'world-map-input',
		desc1: '现有确诊病例数，排除治愈、死亡',
		desc2: '累计确诊病例数，包含治愈、死亡',
		flag: false,
	});

	const desc = computed(() => {
		return state.flag ? state.desc2 : state.desc1;
	});

	//监听子组件change-card事件
	const handleChnageCard = () => {
		state.flag = !state.flag;
	};
</script>

<style lang="scss" scoped>
	.world-map {
		width: 100%;
		height: auto;
		margin: 0 auto;
		padding: 1.25rem 0;
		background-color: #f8f9fa;
	}
</style>
