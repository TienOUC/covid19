<template>
	<footer class="footer">
		<p>
			<a href="https://www.baidu.com/search/jubao.html"> 举报 </a>
			<a href="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner#tab0">
				数据来自百度疫情
			</a>
		</p>
	</footer>
</template>

<script setup>
	defineProps({
		headTitle: String,
	});
</script>

<style lang="scss" scoped>
	.footer {
		margin-top: 200px;
		width: 100%;
		height: 3.75rem;
		background-color: #fff;
		display: flex;
		justify-content: center;
		p {
			display: flex;
			align-items: center;
			a {
				margin: 0 1.25rem;
				text-decoration: none;
				font-size: 0.875rem;
				font-weight: 800;
				color: #918e8e;
			}
		}
	}
</style>
