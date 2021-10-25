<template>
	<BaseChart :options="state.chartOption" :chart-id="state.chartId" />
</template>

<script setup>
	import { reactive, onMounted, watch } from 'vue';
	import store from '../../store';
	import optionCreater from '../../utils/optionCreater';
	import BaseChart from './BaseChart.vue';
	import worldTop10Option from '../../options/world/worldTop10Option';
	import southAmericaTop10Option from '../../options/world/southAmericaTop10Option';
	import africaTop10Option from '../../options/world/africaTop10Option';
	import asiaTop10Option from '../../options/world/asiaTop10Option';
	import europeTop10Option from '../../options/world/europeTop10Option';
	import axios from 'axios';

	const state = reactive({
		chartOption: worldTop10Option(),
		chartId: 'world-trend-chart',
	});

	onMounted(async () => {
		getCurrentConfirmedTop10Data();
	});

	watch(
		() => store.state.worldChartIndex,
		async (newIdx) => {
			//world Top10
			if (newIdx == 0) {
				getCurrentConfirmedTop10Data();
			}
			//southAmerica & northAmerica Top10
			if (newIdx == 1) {
				getSouthAmericaIcrData();
			}

			//Africa Top10
			if (newIdx == 2) {
				getAficaIcrData();
			}

			//Asia Top10
			if (newIdx == 3) {
				getAsiaIcrData();
			}

			//Europe Top10
			if (newIdx == 4) {
				getEuropeIcrData();
			}
		}
	);

	const getCurrentConfirmedTop10Data = async () => {
		const filterArr = [];
		axios.get('https://covid.dodolo.top/api').then((res) => {
			const result = res.data.getListByCountryTypeService2true;
			result.forEach((item) => {
				if (item) {
					filterArr.push({
						province: item.provinceName,
						count: item.currentConfirmedCount,
					});
				}
			});
			// 按照各省境外输入累计病例数排序
			filterArr.sort((a, b) => b['count'] - a['count']);
			// 返回top10
			const temp = filterArr.slice(0, 10);
			const { province, count } = optionCreater(temp);
			state.chartOption = worldTop10Option(province, count);
		});
	};

	const getSouthAmericaIcrData = async () => {
		const filterArr = [];
		axios.get('https://covid.dodolo.top/api').then((res) => {
			const result = res.data.getListByCountryTypeService2true;
			result.forEach((item) => {
				if (item.continents == '南美洲' || item.continents == '北美洲') {
					filterArr.push({
						province: item.provinceName,
						count: item.incrVo.currentConfirmedIncr,
					});
				}
			});
			// 按照各省境外输入累计病例数排序
			filterArr.sort((a, b) => b['count'] - a['count']);
			// 返回top10
			const temp = filterArr.slice(0, 10);
			const { province, count } = optionCreater(temp);
			state.chartOption = southAmericaTop10Option(province, count);
		});
	};

	const getAficaIcrData = async () => {
		const filterArr = [];
		axios.get('https://covid.dodolo.top/api').then((res) => {
			const result = res.data.getListByCountryTypeService2true;
			result.forEach((item) => {
				if (item.continents == '非洲') {
					filterArr.push({
						province: item.provinceName,
						count: item.incrVo.currentConfirmedIncr,
					});
				}
			});
			// 按照各省境外输入累计病例数排序
			filterArr.sort((a, b) => b['count'] - a['count']);
			// 返回top10
			const temp = filterArr.slice(0, 10);
			const { province, count } = optionCreater(temp);
			state.chartOption = africaTop10Option(province, count);
		});
	};

	const getAsiaIcrData = async () => {
		const filterArr = [];
		axios.get('https://covid.dodolo.top/api').then((res) => {
			const result = res.data.getListByCountryTypeService2true;
			result.forEach((item) => {
				if (item.continents == '亚洲') {
					filterArr.push({
						province: item.provinceName,
						count: item.incrVo.currentConfirmedIncr,
					});
				}
			});

			// 按照各省境外输入累计病例数排序
			filterArr.sort((a, b) => b['count'] - a['count']);
			// 返回top10
			const temp = filterArr.slice(0, 10);
			const { province, count } = optionCreater(temp);
			state.chartOption = asiaTop10Option(province, count);
		});
	};

	const getEuropeIcrData = async () => {
		const filterArr = [];
		axios.get('https://covid.dodolo.top/api').then((res) => {
			const result = res.data.getListByCountryTypeService2true;
			result.forEach((item) => {
				if (item.continents == '欧洲') {
					filterArr.push({
						province: item.provinceName,
						count: item.incrVo.currentConfirmedIncr,
					});
				}
			});
			// 按照各省境外输入累计病例数排序
			filterArr.sort((a, b) => b['count'] - a['count']);
			// 返回top10
			const temp = filterArr.slice(0, 10);
			const { province, count } = optionCreater(temp);
			state.chartOption = europeTop10Option(province, count);
		});
	};
</script>

<style lang="scss" scoped></style>
