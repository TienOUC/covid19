<template>
	<div class="table-container">
		<div class="header-title">
			{{ headerTitle }}<span> <img src="../../assets/question-circle.svg" /></span>
		</div>
		<input type="checkbox" :id="tableId" />
		<label :for="tableId"></label>
		<table>
			<thead>
				<tr class="table-header">
					<th v-for="item in title">
						<div>
							<span>{{ item }}</span>
							<span></span>
						</div>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="table-body" v-for="items in content">
					<td v-for="item in items">
						<div>
							<span></span>
							<span>{{ item }}</span>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
	defineProps({
		headerTitle: String,
		title: Array,
		content: Object,
		tableId: String,
	});
</script>

<style lang="scss" scoped>
	.table-container {
		margin: 0 auto;
		width: 45.875rem;
		height: auto;
		position: relative;

		.header-title {
			display: flex;
			align-items: center;
			margin: 1.25rem 0;
			font-weight: bolder;
			img {
				display: block;
				height: 1rem;
				width: 1rem;
				&:hover {
					cursor: pointer;
				}
			}
		}
		table {
			width: 100%;
			display: flex;
			flex-direction: column;
			height: 440px;
			overflow: hidden;

			.table-header {
				width: 100%;
				height: 2.0625rem;
				color: #555;
				font-size: 0.75rem;
				font-weight: 700;
				display: flex;
				justify-content: space-evenly;
				align-items: center;

				th {
					flex: 1;
					height: 100%;
					background: #f5f6f7;
					margin: 0 0.125rem;
					display: flex;
					justify-content: space-evenly;
					align-items: center;

					&:nth-child(1) {
						font-weight: bolder;
						border-top-left-radius: 0.1875rem;
						border-bottom-left-radius: 0.1875rem;
					}
					&:nth-last-child(1) {
						margin-right: 0.125rem;
						border-top-right-radius: 0.1875rem;
						border-bottom-right-radius: 0.1875rem;
					}
				}
			}

			.table-body {
				margin-top: 0.25rem;
				margin-left: 0.25rem;
				width: calc(100% - 0.5rem);
				height: 2.0625rem;
				color: #4d5054;
				background: #f5f6f7;
				font-size: 0.75rem;
				font-weight: 700;
				display: flex;
				flex-direction: row;
				td {
					flex: 1;
					height: 100%;
					background: #f5f6f7;
					margin: 0 0.125rem;
					display: flex;
					justify-content: space-evenly;
					align-items: center;

					&:nth-child(1) {
						color: #fff;
						font-weight: bolder;
						margin-left: -0.125rem;
						background-color: #00bec9;
						border-top-left-radius: 0.1875rem;
						border-bottom-left-radius: 0.1875rem;
					}
					&:nth-last-child(1) {
						margin-right: -0.125rem;
						border-top-right-radius: 0.1875rem;
						border-bottom-right-radius: 0.1875rem;
					}
				}
			}
		}
	}

	// show more button
	input {
		display: none;
	}

	label {
		z-index: 1000;
		border-radius: 0.1875rem;
		position: absolute;
		bottom: 0;
		height: 2.0625rem;
		width: 100%;
		background-color: #f5f6f7;

		&::before,
		&::after {
			position: absolute;
			width: 100%;
			height: 100%;
			font-weight: 700;
			text-align: center;
			font-size: 1rem;
			padding: 0.5rem 0;
			transition: all 0.2s ease;
			cursor: pointer;
		}

		&::before {
			content: '展开全部';
		}
		&::after {
			content: '收起全部';
			display: none;
		}
	}
	[type='checkbox']:checked + label::before {
		display: none;
	}

	[type='checkbox']:checked + label::after {
		display: block;
	}

	[type='checkbox']:checked ~ table {
		height: auto;
		overflow: auto;
	}
</style>
