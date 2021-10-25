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
	import axios from 'axios';

	const state = reactive({
		chartOption: enterTrendLineOption(),
		chartId: 'china-trend-chart',
	});

	onMounted(async () => {
		getHistoryIncData();
	});

	watch(
		() => store.state.chinaChartIndex,
		async (newIdx) => {
			if (newIdx == 0) {
				getHistoryIncData();
			}
			if (newIdx == 1) {
				getYesterdayLocalConfirmedData();
			}
			if (newIdx == 2) {
				getSuspectedTop10Data();
			}
			if (newIdx == 3) {
				getEnterTop10Data();
			}
		}
	);

	// 本土30日新增趋势
	const getHistoryIncData = async () => {
		axios.get('https://covid.dodolo.top/api/historyData').then((res) => {
			let time = [];
			let count = [];
			const data = res.data.data;
			const times = res.data.times;

			const day = getBeforeDay(30);
			times.forEach((item) => {
				let date = new Date(item * 1);
				let options = { month: 'numeric', day: 'numeric' };
				let el = date.toLocaleString('zh-CN', options).replace(/\//g, '.');

				time.push(el);
			});

			const index = time.lastIndexOf(day);
			time = time.slice(index, -1);
			count = data[4].slice(index, -1);
			state.chartOption = enterTrendLineOption(time, count);
		});
	};

	//昨日本土新增TOP10
	const getYesterdayLocalConfirmedData = async () => {
		const filterArr = [];
		axios.get('https://covid.dodolo.top/api').then((res) => {
			const result = res.data.fetchRecentStatV2;
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

			// top10
			const temp = filterArr.slice(0, 10);

			const { province, count } = optionCreater(temp);
			state.chartOption = yesterdayLocalConfirmedTop10Option(province, count);
		});
	};

	//现有省级疑似感染TOP10
	const getSuspectedTop10Data = async () => {
		const filterArr = [];
		axios.get('https://covid.dodolo.top/api').then((res) => {
			const result = res.data.getAreaStat;
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
			const temp = filterArr.slice(0, 10);

			const { province, count } = optionCreater(temp);
			state.chartOption = suspectedTop10Option(province, count);
		});
	};

	// 请求省级境外输入TOP10数据
	const getEnterTop10Data = async () => {
		const filterArr = [];
		axios.get('https://covid.dodolo.top/api').then((res) => {
			const result = res.data.getAreaStat;
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
			const temp = filterArr.slice(0, 10);
			const { province, count } = optionCreater(temp);
			state.chartOption = enterTop10Option(province, count);
		});
	};
</script>

<style lang="scss" scoped></style>
