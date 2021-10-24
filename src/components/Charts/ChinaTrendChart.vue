<template>
	<keep-alive>
		<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
	</keep-alive>
</template>

<script setup>
	import { reactive, onMounted, watch } from 'vue';
	import store from '../../store';
	import optionCreater from '../../utils/optionCreater';
	import getBeforeDay from '../../utils/beforeDay';
	import BaseChart from './BaseChart.vue';
	import yesterdayLocalConfirmedTop10Option from '../../options/china/yesterdayLocalConfirmedTop10Option';
	import suspectedTop10Option from '../../options/china/suspectedTop10Option';
	import enterTop10Option from '../../options/china/enterTop10Option';
	import enterTrendLineOption from '../../options/china/enterTrendLineOption';

	const state = reactive({
		chartOption: enterTrendLineOption(),
		chartId: 'china-trend-chart',
	});

	onMounted(async () => {
		const { time, count } = await getHistoryIncData();
		state.chartOption = enterTrendLineOption(time, count);
	});

	watch(
		() => store.state.chinaChartIndex,
		async (newIdx) => {
			if (newIdx == 0) {
				const { time, count } = await getHistoryIncData();
				state.chartOption = enterTrendLineOption(time, count);
			}
			if (newIdx == 1) {
				const { province, count } = await optionCreater(getYesterdayLocalConfirmedData);
				state.chartOption = yesterdayLocalConfirmedTop10Option(province, count);
			}
			if (newIdx == 2) {
				const { province, count } = await optionCreater(getSuspectedTop10Data);
				state.chartOption = suspectedTop10Option(province, count);
			}
			if (newIdx == 3) {
				const { province, count } = await optionCreater(getEnterTop10Data);
				state.chartOption = enterTop10Option(province, count);
			}
		}
	);

	// 本土30日新增趋势
	const getHistoryIncData = async () => {
		const res = await fetch('http://localhost:3000/src/data/historyData.json');
		const data = await res.json();
		const times = data.times;
		let time = [];
		let count = [];

		const day = getBeforeDay(30);
		times.forEach((item) => {
			let date = new Date(item * 1);
			let options = { month: 'numeric', day: 'numeric' };
			let el = date.toLocaleString('zh-CN', options).replace(/\//g, '.');

			time.push(el);
		});

		const index = time.indexOf(day);
		time = time.slice(index, -1);
		count = data.data[4].slice(index, -1);

		// count = data.data[4];
		return { time, count };
	};

	//昨日本土新增TOP10
	const getYesterdayLocalConfirmedData = async () => {
		const res = await fetch('http://localhost:3000/src/data/data.json');
		const data = await res.json();
		const result = data.fetchRecentStatV2;
		const filterArr = [];
		result.forEach((item) => {
			if (item) {
				filterArr.push({
					province: item.provinceShortName,
					count: item.yesterdayLocalConfirmedCount,
				});
			}
		});
		// 按照各省境外输入累计病例数排序
		filterArr.sort((a, b) => b['count'] - a['count']);
		// 返回top10
		return filterArr.slice(0, 10);
	};

	//现有省级疑似感染TOP10
	const getSuspectedTop10Data = async () => {
		const res = await fetch('http://localhost:3000/src/data/data.json');
		const data = await res.json();
		const result = data.getAreaStat;
		const filterArr = [];
		result.forEach((item) => {
			if (item) {
				filterArr.push({
					province: item.provinceShortName,
					count: item.suspectedCount,
				});
			}
		});
		// 按照各省境外输入累计病例数排序
		filterArr.sort((a, b) => b['count'] - a['count']);
		// 返回top10
		return filterArr.slice(0, 10);
	};

	// 请求省级境外输入TOP10数据
	const getEnterTop10Data = async () => {
		const res = await fetch('http://localhost:3000/src/data/data.json');
		const data = await res.json();
		const result = data.getAreaStat;
		const filterArr = [];

		result.forEach((item) => {
			if (item.cities[0]) {
				filterArr.push({
					province: item.provinceShortName,
					count: item.cities[0].confirmedCount,
				});
			}
		});
		// 按照各省境外输入累计病例数排序
		filterArr.sort((a, b) => b['count'] - a['count']);
		// 返回top10
		return filterArr.slice(0, 10);
	};
</script>

<style lang="scss" scoped></style>
