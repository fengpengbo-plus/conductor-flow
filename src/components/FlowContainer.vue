<template>
	<div>
		<a-layout>
			<a-layout-header><MenuContainer /></a-layout-header>
			<a-layout style="border-bottom: 1px solid rgb(235, 237, 240);">
				<a-layout-sider><SideContainer/></a-layout-sider>
				<a-layout-content><CanvasContainer/></a-layout-content>
			</a-layout>
		</a-layout>
	</div>
</template>

<script>
	import MenuContainer from './MenuContainer.vue'
	import SideContainer from './SideContainer.vue'
	import CanvasContainer from './CanvasContainer.vue'
	export default {
		name: 'FlowContainer',
		components: {
			MenuContainer,
			SideContainer,
			CanvasContainer
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