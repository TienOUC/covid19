<template>
	<DataDashboardTitle />
	<keep-alive>
		<DataDashboard :title="state.title" :content="state.content" />
	</keep-alive>

	<!-- <div>{{ state.content }}</div> -->
	<!-- <DataDashboard :title="state.title" /> -->
</template>

<script setup>
	import { reactive, onMounted, watch, inject } from 'vue';
	import DataDashboardTitle from './DataDashboardTitle.vue';
	import DataDashboard from './DataDashboard.vue';
	import formatCount from '../../utils/formatCount';

	const axios = inject('axios');

	const state = reactive({
		title: '国内疫情',
		content: [
			{ title: '现有确诊', color: '#ff6a57' },
			{ title: '现有疑似', color: '#ec9217' },
			{ title: '境外输入', color: '#4a6fa1' },
			{ title: '累计确诊', color: '#e83132' },
			{ title: '累计治愈', color: '#14afb6' },
			{ title: '累计死亡', color: '#4d5054' },
		],
		// count: [],
	});

	onMounted(() => {
		getCurrentConfirmedCount();
	});

	watch(
		() => state.content,
		(newContent) => {
			state.content = newContent;
		}
	);

	const getCurrentConfirmedCount = async () => {
		axios({
			method: 'get',
			url: 'http://localhost:3000/src/data/data.json',
		}).then((res) => {
			const result = res.data.getListByCountryTypeService2true;
			const result2 = res.data.getAreaStat;
			result.forEach((item) => {
				if (item.provinceName == '中国') {
					state.content.forEach((el) => {
						if (el.title == '现有确诊') {
							el.count = formatCount(item.currentConfirmedCount);
						}
						if (el.title == '现有疑似') {
							el.count = formatCount(item.suspectedCount);
						}
						if (el.title == '境外输入') {
							el.count = formatCount(item.currentConfirmedCount);
						}
						if (el.title == '累计确诊') {
							el.count = formatCount(item.confirmedCount);
						}
						if (el.title == '累计治愈') {
							el.count = formatCount(item.curedCount);
						}
						if (el.title == '累计死亡') {
							el.count = formatCount(item.deadCount);
						}
					});
					// console.log(state.content);
				}
			});
		});
		return;
	};
</script>

<style lang="scss" scoped></style>
