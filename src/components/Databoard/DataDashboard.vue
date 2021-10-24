<template>
	<div class="data-board">
		<h3>{{ props.title }}</h3>
		<div class="data-board-subtitle">
			<span>数据更新至 {{ updateTime }}</span>
			<span><img src="../../assets/question-circle.svg" />数据说明</span>
		</div>
		<!-- <DataItemContainer /> -->
		<!-- <DataItemRow :dataContent="state.content1" /> -->
		<!-- <DataItemRow :dataContent="state.content2" /> -->
		<div class="data-item-row">
			<DataItem v-for="item in state.content" :title="item.title" :color="item.color" :count="item.count" />
		</div>
	</div>
</template>

<script setup>
	import { computed, reactive, onMounted } from 'vue';
	// import DataItemContainer from './DataItemContainer.vue';
	// import DataItemRow from './DataItemRow.vue';
	import DataItem from './DataItem.vue';
	const props = defineProps({
		title: String,
		content: {
			required: true,
			type: Array,
			default: [],
		},
	});

	const state = reactive({
		content: [],
	});

	onMounted(() => {
		state.content = props.content;
	});

	const updateTime = computed(() => {
		const date = new Date();
		const option = {
			hour12: false,
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: '2-digit',
		};
		return date.toLocaleString('zh-CN', option).replace(/\//g, '.');
	});
</script>

<style lang="scss" scoped>
	.data-board {
		margin-top: 1.25rem;
		margin-left: 1.0625rem;
		width: 45.875rem;
		height: auto;
		h3 {
			margin-bottom: 0.625rem;
			font-size: 1rem;
			font-weight: 700;
		}
		.data-board-subtitle {
			display: flex;
			justify-content: space-between;
			margin-bottom: 1.875rem;
			span {
				display: block;
				font-size: 0.8125rem;
				line-height: 0.8125rem;
				font-weight: 700;
				color: #999;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					width: 0.9375rem;
					height: auto;
					vertical-align: middle;
				}
			}
		}
		.data-item {
			display: flex;
			justify-content: space-between;
		}

		.data-item-row {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 1.25rem;
		}
	}
</style>
