<template>
	<BaseTable :title="state.title" :content="state.content" />
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseTable from './BaseTable.vue';

	const state = reactive({
		title: ['地区', '新增', '现有', '累计', '治愈', '死亡'],
		content: ['福建', 0, 123, 1294, 1170, 1],
	});
</script>

<style lang="scss" scoped></style>
