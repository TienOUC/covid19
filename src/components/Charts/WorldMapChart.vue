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
			const filterArr = [];
			if (newFlag) {
				axios.get('https://covid.dodolo.top/api').then((res) => {
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
				axios.get('https://covid.dodolo.top/api').then((res) => {
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
		const filterArr = [];

		axios.get('https://covid.dodolo.top/api').then((res) => {
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
