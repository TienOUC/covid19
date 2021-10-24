<template>
	<BaseTable
		:header-title="state.headerTitle"
		:title="state.title"
		:content="state.content"
		:table-id="state.tableId"
	/>
</template>

<script setup>
	import { reactive, onMounted, inject } from 'vue';
	import BaseTable from './BaseTable.vue';
	const axios = inject('axios');

	const state = reactive({
		title: ['地区', '累计', '治愈', '死亡', '当前确诊', '当前疑似'],
		content: {},
		headerTitle: '国内各地区疫情统计汇总',
		tableId: 'china-table-btn',
	});

	onMounted(async () => {
		getProvinceData();
	});

	const getProvinceData = () => {
		axios({
			method: 'get',
			url: 'http://localhost:3000/src/data/data.json',
		})
			.then((res) => {
				const filterArr = [];
				const result = res.data.getAreaStat;
				result.forEach((item) => {
					filterArr.push({
						provinceShortName: item.provinceShortName,
						confirmedCount: item.confirmedCount,
						curedCount: item.curedCount,
						deadCount: item.deadCount,
						currentConfirmedCount: item.currentConfirmedCount,
						suspectedCount: item.suspectedCount,
					});
				});
				state.content = filterArr;
			})
			.catch((err) => {
				console.log(err);
			});
	};
</script>

<style lang="scss" scoped></style>
