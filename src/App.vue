<template>
	<Header headTitle="Tien's Blog" />
	<Banner subtitle="新型冠状病毒肺炎" title="疫情实时大数据报告" />
	<Content />
	<Tip />
	<Footer />
</template>

<script setup>
	import Header from './components/Common/Header.vue';
	import Banner from './components/Common/Banner.vue';
	import Content from './views/Content.vue';
	import Footer from './components/Common/Footer.vue';
	import Tip from './components/Common/Tip.vue';
</script>

<style lang="scss">
	@import '../src/style/reset.css';
	@import '../src/style/base.min.css';

	#app {
		font-family: Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #10aeb5;

		width: 100%;
		min-height: 100vh;
	}
</style>
