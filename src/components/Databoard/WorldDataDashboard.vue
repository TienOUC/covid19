<template>
	<DataDashboard :title="state.title" :content="state.content" />
</template>

<script setup>
	import { reactive, onMounted, watch, inject } from 'vue';

	import DataDashboard from './DataDashboard.vue';
	import formatCount from '../../utils/formatCount';

	const axios = inject('axios');

	const state = reactive({
		title: '国外疫情',
		content: [
			{ title: '现有确诊', color: '#ff6a57' },
			{ title: '累计治愈', color: '#ec9217' },
			{ title: '累计死亡', color: '#4a6fa1' },
			{ title: '累计确诊', color: '#e83132' },
			{ title: '治愈率', color: '#14afb6' },
			{ title: '病死率', color: '#4d5054' },
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
			url: 'http://localhost:5000/src/data/data.json',
		}).then((res) => {
			const result = res.data.getListByCountryTypeService2true;
			const result2 = res.data.getAreaStat;

			let currentConfirmedCount = result.reduce((pre, item) => pre + item.currentConfirmedCount, 0);
			let curedCount = result.reduce((pre, item) => pre + item.curedCount, 0);
			let deadCount = result.reduce((pre, item) => pre + item.deadCount, 0);
			let confirmedCount = result.reduce((pre, item) => pre + item.confirmedCount, 0);

			state.content.forEach((el) => {
				if (el.title == '现有确诊') {
					el.count = formatCount(currentConfirmedCount);
				}
				if (el.title == '累计治愈') {
					el.count = formatCount(curedCount);
				}
				if (el.title == '累计死亡') {
					el.count = formatCount(deadCount);
				}
				if (el.title == '累计确诊') {
					el.count = formatCount(confirmedCount);
				}
				if (el.title == '治愈率') {
					el.count = formatCount(((curedCount * 100) / confirmedCount).toFixed(2)) + '%';
				}
				if (el.title == '病死率') {
					el.count = formatCount(((deadCount * 100) / confirmedCount).toFixed(2)) + '%';
				}
			});

			// console.log(state.content);
		});
		return;
	};
</script>

<style lang="scss" scoped></style>
