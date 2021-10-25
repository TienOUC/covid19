<template>
	<div class="world-map">
		<keep-alive>
			<BaseChart :options="state.chartOption" />
		</keep-alive>
	</div>
</template>

<script setup>
	import { watch, reactive, onMounted, inject } from 'vue';
	import BaseChart from './BaseChart.vue';
	import worldMapOptions from '../../options/world/worldMapOption';
	import store from '../../store';

	const axios = inject('axios');
	const state = reactive({
		chartOption: [],
	});

	onMounted(() => {
		getJsonData();
	});

	watch(
		() => store.state.worldMapflag,
		(newFlag) => {
			if (newFlag) {
				axios({
					method: 'get',
					// url: 'https://covid.dodolo.top/api/',
					url: 'http://localhost:5000/src/data/data.json',
				}).then((res) => {
					const filterArr = [];
					const result = res.data.getListByCountryTypeService2true;
					result.forEach((item) => {
						filterArr.push({
							name: item.provinceName, // 国家
							value: item.confirmedCount,
						});
					});

					state.chartOption = worldMapOptions(filterArr);
				});
			}

			if (!newFlag) {
				axios({
					method: 'get',
					// url: 'https://covid.dodolo.top/api/',
					url: 'http://localhost:5000/src/data/data.json',
				}).then((res) => {
					const filterArr = [];
					const result = res.data.getListByCountryTypeService2true;
					result.forEach((item) => {
						filterArr.push({
							name: item.provinceName, // 国家
							value: item.currentConfirmedCount,
						});
					});

					state.chartOption = worldMapOptions(filterArr);
				});
			}
		}
	);

	//请求数据
	const getJsonData = async () => {
		// const res = await fetch('http://localhost:5000/src/data/data.json');
		// const data = await res.json();
		// const result = data.getListByCountryTypeService2true;
		// const filterArr = [];

		// //过滤数据
		// result.forEach((item) => {
		// 	filterArr.push({
		// 		name: item.provinceName, // 国家
		// 		value: state.flag ? item.confirmedCount : item.currentConfirmedCount,
		// 	});
		// });
		// state.chartOption = worldMapOptions(filterArr);

		axios({
			method: 'get',
			// url: 'https://covid.dodolo.top/api/',
			url: 'http://localhost:5000/src/data/data.json',
		}).then((res) => {
			const filterArr = [];
			const result = res.data.getListByCountryTypeService2true;
			result.forEach((item) => {
				filterArr.push({
					name: item.provinceName, // 国家
					value: item.currentConfirmedCount,
				});
			});

			state.chartOption = worldMapOptions(filterArr);
		});
	};
</script>

<style lang="scss" scoped>
	.world-map {
		width: 100%;
		height: auto;
		margin: 0 auto;
		padding: 1.25rem 0;
		background-color: #f8f9fa;
	}
</style>
