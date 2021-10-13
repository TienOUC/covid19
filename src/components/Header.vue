<template>
	<header class="header">
		<div class="header-img">
			<img src="../assets/headerImg.png" alt="headerImg" />
		</div>
		<label class="header-chain" for="header-chain">
			<div class="header-text">
				<span>
					<a href="https://www.baidu.com" id="header-chain">
						{{ headTitle }}
					</a>
				</span>
			</div>
		</label>
	</header>
</template>

<script setup>
	defineProps({
		headTitle: String,
	});
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		height: 50px;
		padding: 0 50px;
		display: flex;
		// background-color: #f8f8f9;
		background-color: #fff;

		.header-img {
			margin: 5px;
			height: 40px;
			width: 40px;
			img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}

		.header-chain {
			display: flex;
			cursor: pointer;

			.header-text {
				display: flex;
				margin: 5px;
				align-items: center;
				a {
					color: #000;
					text-decoration: none;
				}
			}
		}
	}
</style>
