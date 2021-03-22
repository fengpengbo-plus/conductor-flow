<template>
	<div>
		<a-layout>
			<a-layout-header><MenuContainer /></a-layout-header>
			<a-layout style="border-bottom: 1px solid rgb(235, 237, 240);">
				<a-layout-sider><SideContainer/></a-layout-sider>
				<a-layout-content style='z-index: 1;'><X6Container/></a-layout-content>
			</a-layout>
		</a-layout>
	</div>
</template>

<script>
	import MenuContainer from './MenuContainer.vue'
	import SideContainer from './SideContainer.vue'
	import X6Container from './X6Container.vue'
	export default {
		name: 'FlowContainer',
		components: {
			MenuContainer,
			SideContainer,
			X6Container
		}
	}
</script>

<style scoped>
	.ant-layout-header {
		height: auto;
		padding: 0;
		line-height: 0;
		background-color: #fafafa;
	}
	.ant-layout-sider {
		background-color: #fafafa;
	}
</style>