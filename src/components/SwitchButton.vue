<template>
	<div class="switch-box">
		<div class="switch-btn">
			<input type="checkbox" :id="props.name" />
			<label :for="props.name" @click="clickBtn"></label>
		</div>
		<div class="text">{{ props.desc }}</div>
	</div>
</template>

<script setup>
	import { defineEmits } from 'vue';

	const props = defineProps({
		name: String,
		desc: String,
	});

	const emit = defineEmits(['click-btn']);

	//点击发送click-btn事件给父组件
	const clickBtn = () => {
		emit('click-btn');
	};
</script>

<style lang="scss" scoped>
	.switch-box {
		padding-top: 1.25rem;
		width: 100%;
		height: 4.1875rem;
		background-color: #f8f9fa;

		.switch-btn {
			margin: 0 auto;
			width: calc(100% - 2.5rem);
			height: 2.5rem;
			box-sizing: border-box;
			padding: 2px;
			background: #e3e6eb;
			border-radius: 0.375rem;

			input {
				display: none;
			}

			label {
				height: 100%;
				display: block;
				position: relative;
				cursor: pointer;

				&::before,
				&::after {
					position: absolute;
					width: 50%;
					height: 100%;
					font-weight: 700;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: all 0.1s ease;
				}

				&::before {
					content: '累计确诊';
					left: 50%;
				}
				&::after {
					content: '现有确诊';
					left: 0;
					border-radius: 0.375rem;
					background: #fff;
				}
			}
		}

		[type='checkbox']:checked + label::before {
			content: '现有确诊';
			left: 0;
			border-radius: 0;
			background: #e3e6eb;
		}

		[type='checkbox']:checked + label::after {
			content: '累计确诊';
			left: 50%;
			border-radius: 0.375rem;
			background: #fff;
		}

		.text {
			text-align: center;
			margin-top: 0.9375rem;
			font-size: 0.75rem;
			line-height: 0.75rem;
			font-weight: 700;
			color: #999;
			letter-spacing: 0;
		}
	}
</style>
