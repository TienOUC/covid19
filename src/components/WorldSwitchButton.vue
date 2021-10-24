<template>
	<SwitchButton :name="state.name" :desc="desc" @click-btn="handleClickBtn" />
</template>

<script setup>
	import { reactive, computed } from 'vue';
	import SwitchButton from './SwitchButton.vue';
	import { useStore } from 'vuex';

	const store = useStore();
	const state = reactive({
		name: 'world-map-input',
		desc1: '现有确诊病例数，排除治愈、死亡',
		desc2: '累计确诊病例数，包含治愈、死亡',
		flag: false,
	});

	const desc = computed(() => {
		return state.flag ? state.desc2 : state.desc1;
	});

	//监听子组件change-card事件
	const handleClickBtn = async () => {
		state.flag = !state.flag;
		let flag = state.flag;
		switchMap(flag);
	};

	const switchMap = (flag) => {
		// store.commit('switchWorldMap', flag);
		store.dispatch('switchWorldMap', flag);
	};
</script>

<style lang="scss" scoped></style>
