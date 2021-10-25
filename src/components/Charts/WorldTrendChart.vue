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

	const state = reactive({
		chartOption: worldTop10Option(),
		chartId: 'world-trend-chart',
	});

	onMounted(async () => {
		const { province, count } = await optionCreater(getCurrentConfirmedTop10Data);
		state.chartOption = worldTop10Option(province, count);
	});

	watch(
		() => store.state.worldChartIndex,
		async (newIdx) => {
			//world Top10
			if (newIdx == 0) {
				const { province, count } = await optionCreater(getCurrentConfirmedTop10Data);
				state.chartOption = worldTop10Option(province, count);
			}
			//southAmerica & northAmerica Top10
			if (newIdx == 1) {
				const { province, count } = await optionCreater(getSouthAmericaIcrData);
				state.chartOption = southAmericaTop10Option(province, count);
			}

			//Africa Top10
			if (newIdx == 2) {
				const { province, count } = await optionCreater(getAficaIcrData);
				state.chartOption = africaTop10Option(province, count);
			}

			//Asia Top10
			if (newIdx == 3) {
				const { province, count } = await optionCreater(getAsiaIcrData);
				state.chartOption = asiaTop10Option(province, count);
			}

			//Europe Top10
			if (newIdx == 4) {
				const { province, count } = await optionCreater(getEuropeIcrData);
				state.chartOption = europeTop10Option(province, count);
			}
		}
	);

	const getCurrentConfirmedTop10Data = async () => {
		const res = await fetch('http://localhost:5000/src/data/data.json');
		const data = await res.json();
		const result = data.getListByCountryTypeService2true;
		const filterArr = [];
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
		return filterArr.slice(0, 10);
	};

	const getSouthAmericaIcrData = async () => {
		const res = await fetch('http://localhost:5000/src/data/data.json');
		const data = await res.json();
		const result = data.getListByCountryTypeService2true;
		const filterArr = [];
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
		return filterArr.slice(0, 10);
	};

	const getAficaIcrData = async () => {
		const res = await fetch('http://localhost:5000/src/data/data.json');
		const data = await res.json();
		const result = data.getListByCountryTypeService2true;
		const filterArr = [];
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
		return filterArr.slice(0, 10);
	};

	const getAsiaIcrData = async () => {
		const res = await fetch('http://localhost:5000/src/data/data.json');
		const data = await res.json();
		const result = data.getListByCountryTypeService2true;
		const filterArr = [];
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
		return filterArr.slice(0, 10);
	};

	const getEuropeIcrData = async () => {
		const res = await fetch('http://localhost:5000/src/data/data.json');
		const data = await res.json();
		const result = data.getListByCountryTypeService2true;
		const filterArr = [];
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
		return filterArr.slice(0, 10);
	};
</script>

<style lang="scss" scoped></style>
