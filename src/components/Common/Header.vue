<template>
	<header class="header">
		<div class="header-img">
			<img src="../../assets/headerImg.png" alt="headerImg" />
		</div>
		<label class="header-chain" for="header-chain">
			<div class="header-text">
				<span>
					<a href="https://www.dodolo.top" id="header-chain">
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
		height: 3.125rem;
		padding: 0 3.125rem;
		display: flex;
		background-color: #fff;

		.header-img {
			margin: .3125rem;
			height: 2.5rem;
			width: 2.5rem;
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
				margin: .3125rem;
				align-items: center;
				a {
					color: #000;
					text-decoration: none;
				}
			}
		}
	}
</style>
