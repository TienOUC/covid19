<template>
	<div class="banner">
		<div class="banner-icon"><img src="../assets/bannerIcon.svg" alt="" /></div>
		<p>{{ subtitle }}</p>
		<h1>{{ title }}</h1>
		<span>共 9,392,198,546 人次已浏览</span>
	</div>
</template>

<script setup>
	import { reactive } from 'vue';

	defineProps({
		subtitle: String,
		title: String,
	});

	const state = reactive({ count: 0 });
</script>

<style lang="scss" scoped>
	.banner {
		margin: 0 auto;
		background: center / contain no-repeat url(../assets/bannerBgImg.png);
		width: 48rem;
		height: 187px;

		.banner-icon {
			margin: 0 20px;
			padding-top: 20px;
			width: 25px;
			height: 25px;
			img {
				color: #fff;
				width: 100%;
				height: 100%;
			}
		}

		p,
		h1,
		span {
			margin: 0.625rem;
			color: #fff;
		}
		p {
			margin-top: 0;
			padding-top: 20px;
			font-size: 0.875rem;
			font-weight: bold;
			letter-spacing: 0.125rem;
			color: #c4faff;
		}
		h1 {
			margin-top: 10px;
			font-size: 2rem;
			font-weight: bolder;
		}
		span {
			font-size: 0.625rem;
			font-weight: bold;
			background-color: #0da1ae;
			padding: 8px 10px;
			border-radius: 0.71875rem;
			height: 1.4375rem;
			line-height: 1.4375rem;
		}
	}
</style>
