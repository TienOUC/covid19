<template>
	<div class="china-map">
		<keep-alive>
			<BaseChart :options="state.chartOption" />
		</keep-alive>
	</div>
</template>

<script setup>
	import { watch, reactive, onMounted, inject } from 'vue';
	import BaseChart from './BaseChart.vue';
	import chinaMapOptions from '../../options/china/chinaMapOption';
	import store from '../../store';

	const axios = inject('axios');
	const state = reactive({
		chartOption: [],
	});

	onMounted(() => {
		getJsonData();
	});

	watch(
		() => store.state.chinaMapflag,
		async (newFlag) => {
			if (newFlag) {
				axios({
					method: 'get',
					url: 'http://localhost:5000/src/data/data.json',
				}).then((res) => {
					const filterArr = [];
					const result = res.data.getAreaStat;
					result.forEach((item) => {
						filterArr.push({
							name: item.provinceShortName, // 省份
							value: item.confirmedCount,
						});
					});

					state.chartOption = chinaMapOptions(filterArr);
				});

				// const res = await fetch('http://localhost:5000/src/data/data.json');
				// const data = await res.json();
				// const result = data.getAreaStat;
				// const filterArr = [];

				// result.forEach((item) => {
				// 	filterArr.push({
				// 		name: item.provinceShortName, // 省份
				// 		// value: state.flag ? item.confirmedCount : item.currentConfirmedCount,
				// 		value: item.confirmedCount,
				// 	});
				// });
				// state.chartOption = chinaMapOptions(filterArr);
			}
			if (!newFlag) {
				axios({
					method: 'get',
					url: 'http://localhost:5000/src/data/data.json',
				}).then((res) => {
					const filterArr = [];
					const result = res.data.getAreaStat;
					result.forEach((item) => {
						filterArr.push({
							name: item.provinceShortName, // 省份
							value: item.currentConfirmedCount,
						});
					});

					state.chartOption = chinaMapOptions(filterArr);
				});
				// const res = await fetch('http://localhost:5000/src/data/data.json');
				// const data = await res.json();
				// const result = data.getAreaStat;
				// const filterArr = [];

				// result.forEach((item) => {
				// 	filterArr.push({
				// 		name: item.provinceShortName, // 省份
				// 		// value: state.flag ? item.confirmedCount : item.currentConfirmedCount,
				// 		value: item.currentConfirmedCount,
				// 	});
				// });
				// state.chartOption = chinaMapOptions(filterArr);
			}
		}
	);

	//请求数据
	const getJsonData = async () => {
		const res = await fetch('http://localhost:5000/src/data/data.json');
		const data = await res.json();
		const result = data.getAreaStat;
		const filterArr = [];

		result.forEach((item) => {
			filterArr.push({
				name: item.provinceShortName, // 省份
				value: item.currentConfirmedCount,
			});
		});
		state.chartOption = chinaMapOptions(filterArr);
		return;
	};
</script>

<style lang="scss" scoped>
	.china-map {
		width: 100%;
		height: auto;
		margin: 0 auto;
		padding: 1.25rem 0;
		background-color: #f8f9fa;
	}
</style>
