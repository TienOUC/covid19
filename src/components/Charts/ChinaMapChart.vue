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
			const filterArr = [];

			if (newFlag) {
				axios.get('https://covid.dodolo.top/api').then((res) => {
					const result = res.data.getAreaStat;
					result.forEach((item) => {
						filterArr.push({
							name: item.provinceShortName, // 省份
							value: item.confirmedCount,
						});
					});

					state.chartOption = chinaMapOptions(filterArr);
				});
			}
			if (!newFlag) {
				axios.get('https://covid.dodolo.top/api').then((res) => {
					const result = res.data.getAreaStat;
					result.forEach((item) => {
						filterArr.push({
							name: item.provinceShortName, // 省份
							value: item.currentConfirmedCount,
						});
					});

					state.chartOption = chinaMapOptions(filterArr);
				});
			}
		}
	);

	//请求数据
	const getJsonData = async () => {
		const filterArr = [];
		axios.get('https://covid.dodolo.top/api').then((res) => {
			const result = res.data.getAreaStat;
			result.forEach((item) => {
				filterArr.push({
					name: item.provinceShortName, // 省份
					value: item.currentConfirmedCount,
				});
			});
			
			state.chartOption = chinaMapOptions(filterArr);
		});
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
