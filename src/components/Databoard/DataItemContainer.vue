<template>
	<div class="data-item-container">
		<DataItemRow :dataContent="state.content1" />
		<DataItemRow :dataContent="state.content2" />
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import DataItemRow from './DataItemRow.vue';

	const state = reactive({
		content1: [
			{ title: '现有确诊', color: '#ff6a57' },
			{ title: '无症状', color: '#e86d48' },
			{ title: '现有疑似', color: '#ec9217' },
			{ title: '现有重症', color: '#545499' },
		],
		content2: [
			{ title: '累计确诊', color: '#e83132' },
			{ title: '境外输入', color: '#4a6fa1' },
			{ title: '累计治愈', color: '#14afb6' },
			{ title: '累计死亡', color: '#4d5054' },
		],
	});
</script>

<style lang="scss" scoped></style>
