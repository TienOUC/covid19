<template>
	<BaseTable :title="state.title" :content="state.content" />
</template>

<script setup>
	import { reactive } from 'vue';
	import BaseTable from './BaseTable.vue';
	const state = reactive({
		title: ['地区', '新增', '累计', '治愈', '死亡'],
		content: ['美国', 0, 123, 1294, 1170],
	});
</script>

<style lang="scss" scoped></style>
