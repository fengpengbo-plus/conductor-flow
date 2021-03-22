<template>
	<div style="background-color: #fafafa; padding: 5px 0; width: 100%;height: 2.375rem;">
		<a-button-group>
			<a-tooltip placement="topLeft" title="撤销">
				<a-button size="small" icon="undo" />
			</a-tooltip>
			<a-tooltip placement="topLeft" title="前进">
				<a-button size="small" icon="redo" />
			</a-tooltip>
			<a-tooltip placement="topLeft" title="复制">
				<a-button size="small" icon="copy" />
			</a-tooltip>
			<a-tooltip placement="topLeft" title="粘贴">
				<a-button size="small" icon="snippets" />
			</a-tooltip>
			<a-tooltip placement="topLeft" title="删除">
				<a-button size="small" icon="delete" />
			</a-tooltip>
			<a-tooltip placement="topLeft" title="放大">
				<a-button size="small" icon="zoom-in" />
			</a-tooltip>
			<a-tooltip placement="topLeft" title="缩小">
				<a-button size="small" icon="zoom-out" />
			</a-tooltip>
			<a-tooltip placement="topLeft" title="置顶">
				<a-button size="small" icon="vertical-align-top" />
			</a-tooltip>
			<a-tooltip placement="topLeft" title="置底">
				<a-button size="small" icon="vertical-align-bottom" />
			</a-tooltip>
			<a-tooltip placement="topLeft" title="居中">
				<a-button size="small" icon="pic-center" />
			</a-tooltip>
			<a-tooltip placement="topLeft" title="原大小">
				<a-button size="small" icon="fullscreen-exit" />
			</a-tooltip>
		</a-button-group>
		<a-button-group>
			<a-tooltip placement="topLeft" title="保存">
				<a-button size="small" type="primary" icon="save" />
			</a-tooltip>
		</a-button-group>
	</div>
</template>

<script>
	export default {
		name: 'MenuContainer'
	}
</script>

<style scoped>
	.ant-btn {
		box-shadow: 2px 2px 2px #cccccc;
	}

	.ant-btn-group {
		margin-right: 8px;
	}
</style>
