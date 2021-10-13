<template>
	<div class="switch-box">
		<div class="switch-btn">
			<input type="checkbox" id="input" />
			<label for="input"></label>
		</div>
		<div class="text">现有确诊病例数，排除治愈、死亡</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.switch-box {
		vertical-align: baseline;
		margin: 0 auto;
		width: calc(100% - 2.5rem);
		height: 4.1875rem;

		.switch-btn {
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
