<template>
	<div class="chart-container">
		<div class="chart" ref="container"></div>
	</div>
</template>

<script setup>
	import * as echarts from 'echarts';
	import { ref, watch, onMounted } from 'vue';

	const props = defineProps({
		options: {
			required: true,
			type: Object,
			default: {},
		},
	});

	const container = ref(null);
	const chart = ref(null);

	onMounted(() => {
		chart.value = echarts.init(container.value);
		chart.value.clear();
		chart.value.setOption(props.options);
	});

	watch(
		() => props.options,
		(newOptions) => {
			chart.value.clear();
			chart.value.setOption(newOptions);
		},
		{ deep: true }
	);
</script>

<style lang="scss" scoped>
	.chart-container {
		width: 45.5rem;
		height: auto;
		padding: 0 1.25rem;

		.chart {
			border: 1px #eeeeee solid;
			border-radius: 0.5rem;
			height: 32.5625rem;
		}
	}
</style>
