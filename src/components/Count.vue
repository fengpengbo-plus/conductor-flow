<template>
	<!-- <a-popover>
		<template>
			<p>Content</p>
			<p>Content</p>
		</template>
		<div class="nodeElement">
			<div class="icon"><span role="img" aria-label="database" class="anticon anticon-database"
					style="color: rgb(24, 144, 255);"><svg viewBox="64 64 896 896" focusable="false" class=""
						data-icon="database" width="1em" height="1em" fill="currentColor" aria-hidden="true">
						<path
							d="M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32zM288 232c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160v224zm128-136c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM160 640h704V384H160v256zm128-168c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z">
						</path>
					</svg></span></div>
			<div class="notation">
				<div class="name">算法组件2</div>
			</div>
		</div>
	</a-popover> -->
	<a-popover placement="topLeft" title="Title">
	    <template slot="content">
	      <p>Content</p>
	      <p>Content</p>
	    </template>
	    <div class="nodeElement">
	    	<div class="icon"><span role="img" aria-label="database" class="anticon anticon-database"
	    			style="color: rgb(24, 144, 255);"><svg viewBox="64 64 896 896" focusable="false" class=""
	    				data-icon="database" width="1em" height="1em" fill="currentColor" aria-hidden="true">
	    				<path
	    					d="M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32zM288 232c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160v224zm128-136c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM160 640h704V384H160v256zm128-168c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z">
	    				</path>
	    			</svg></span></div>
	    	<div class="notation">
	    		<div class="name">算法组件2</div>
	    	</div>
	    </div>
	  </a-popover>
</template>

<script>
	export default ({
		name: 'Count',
		// props: {
		// 	num: Number
		// },
		// inject: ['getGraph', 'getNode'],
		// methods: {
		// 	click() {
		// 		this.$emit('add')
		// 		this.getNode().attr('body/strokeWidth', this.num + 1)
		// 	}
		// }
	});
</script>

<style scoped>
	.nodeElement {
	    display: flex;
	    align-items: center;
	    box-sizing: border-box;
	    width: 180px;
	    height: 32px;
	    overflow: hidden;
	    background-color: #fff;
	    border-radius: 4px;
	    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
	}
	.nodeElement .icon {
	    display: inline-flex;
	    flex-grow: 0;
	    align-items: center;
	    justify-content: center;
	    width: 32px;
	    height: 32px;
	    background-color: rgba(229,238,255,.85);
	    border-radius: 4px 0 0 4px;
	}
	.anticon {
	    display: inline-block;
	    color: inherit;
	    font-style: normal;
	    line-height: 0;
	    text-align: center;
	    text-transform: none;
	    vertical-align: -.125em;
	    text-rendering: optimizeLegibility;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	.nodeElement .notation {
	    display: inline-flex;
	    align-items: center;
	    width: calc(100% - 32px);
	    padding: 0 8px;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	}
	
	
	.nodeElement.selected, .nodeElement:hover {
	    background-color: rgba(243,249,255,.92);
	    border: 1px solid #1890ff;
	    box-shadow: 0 0 3px 3px rgb(64 169 255 / 20%);
	}
	.nodeElement.selected .icon, .nodeElement:hover .icon {
	    width: 32px;
	    height: 30px;
	    margin: 0 1px 0 -1px;
	}
	.nodeElement.selected .notation, .nodeElement:hover .notation {
	    position: relative;
	    left: -1px;
	}
</style>