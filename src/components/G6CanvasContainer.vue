<template>
	<div id="mountNode"></div>
</template>

<script>
	import G6 from '@antv/g6';
	import Plugin from '@antv/g6-plugin';
	export default {
		name: 'G6CanvasContainer',
		data() {
			return {}
		},
		mounted() {
			console.log(G6.version)
			const data = {
				nodes: [{
						id: 'node1',
						label: 'Circle1',
						x: 15,
						y: 150,
					},
					{
						id: 'node2',
						label: 'Circle2',
						x: 208,
						y: 150,
					},
				],
				edges: [{
					source: 'node1',
					target: 'node2',
				}, ],
			};
			const graph = new G6.Graph({
				container: 'mountNode',
				plugins: [ new Plugin.Minimap(), new Plugin.ToolBar() ],
				width: 800,
				height: 520,
				defaultNode: {
					type: 'circle',
					size: [100],
					style: {
						fill: 'rgb(255,247,232)',
						stroke: 'rgb(255,191,114)'
					},
				},
				defaultEdge: {
					style: {
						stroke: '#e2e2e2',
					},
				},
			});
			let drag = false;
			let dragStartX;
			let dragStartY;
			graph.on('canvas:mousedown', (ev)=>{
				drag = true;
				dragStartX = ev.x;
				dragStartY = ev.y;
			});
			graph.on('mouseup', (ev)=>{
				drag = false;
			});
			graph.on('canvas:mousemove', (ev)=>{
				if (drag) {
					let x = ev.x;
					let y = ev.y;
					let moveX = x - dragStartX;
					let moveY = y - dragStartY;
					dragStartX = x;
					dragStartY = y;
					console.log(moveX, moveY)
					// graph.translate(moveX, moveY);
				}
			});
			graph.data(data);
			graph.render();
		},
		methods: {
			initNode() {
				G6.registerNode('customNode', {
					draw(item) {
						const group = item.getGraphicGroup();
						const model = item.getModel();
						group.addShape('text', {
							attrs: {
								x: 0,
								y: 0,
								fill: '#333',
								text: '我是一个自定义节点，\n有下面那个方形和我自己组成'
							}
						});
						group.addShape('text', {
							attrs: {
								x: 0,
								y: 0,
								fill: '#333',
								text: ' (' + model.x + ', ' + model.y + ') \n 原点是组的图坐标',
								textBaseline: 'top'
							}
						});
						group.addShape('circle', {
							attrs: {
								x: 0,
								y: 0,
								r: 4,
								fill: 'blue'
							}
						});
						return group.addShape('rect', {
							attrs: {
								x: 0,
								y: 0,
								width: 100,
								height: 100,
								stroke: 'red'
							}
						});
					}
				});
			}
		}
	}
</script>

<style>
	canvas {
		float: left;
		border-right: 0.0625rem solid #cccccc;
		border-bottom: 0.0625rem solid #cccccc;
	}
</style>
