<template>
	<div class="table-container">
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
				<tr class="table-body">
					<td v-for="item in content">
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
		title: Array,
		content: Array,
	});
</script>

<style lang="scss" scoped>
	.table-container {
		margin: 0 auto;
		width: 45.875rem;
		height: auto;
		table {
			width: 100%;
			display: flex;
			flex-direction: column;

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
						// background-color: #00bec9;
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
</style>
