<template>
	<div id="container" style="width: 600px; height: 400px"></div>
</template>

<script>
	import Count from './Count.vue'
	import Edge from './Edge.vue'
	// 从 node_modules 引入
	import {
		Graph,
		Shape,
		Node,
		Cell
	} from '@antv/x6'
	import '@antv/x6-vue-shape'
	export default {
		name: 'X6Container',
		data() {
			return {
				node1: {
					nodeName: 'ESG任务1',
					x: 100,
					y: 100,
					id: 1
				},
				node2: {
					nodeName: 'ESG任务2',
					x: 100,
					y: 200,
					id: 2
				},
				node3: {
					nodeName: 'ESG任务3',
					x: 300,
					y: 200,
					id: 3
				}
			}
		},
		mounted() {
			// 从 CND 引入时，我们暴露了 X6 这个全局变量
			// const { Graph } = X6

			// 创建 Graph 的实例
			this.graph = new Graph({
				container: document.getElementById('container'),
				grid: true,
				panning: {
					enabled: true,
					modifiers: 'shift',
				},
			})
			this.createNode(this.node1);
			this.createNode(this.node2);
			this.createNode(this.node3);
			console.log(this.graph.model.getNodes());
			this.graph.addEdge({
			  shape: 'edge', // 指定使用何种图形，默认值为 'edge'
			  source: {
				  cell: this.graph.model.getNodes()[0],
				  port: 'port2'
			  },
			  target: {
				  cell: this.graph.model.getNodes()[1],
				  port: 'port1'
			  },
			  vertices: [
			      { x: 100, y: 200 }, 
			      { x: 300, y: 120 },
			    ],
			  router: 'orth',
			    connector: {
			      name: 'rounded',
			      args: {
					  padding: 10,
				  },
			    },
			})
			this.graph.addEdge({
			  shape: 'edge', // 指定使用何种图形，默认值为 'edge'
			  source: {
				  cell: this.graph.model.getNodes()[0],
				  port: 'port2'
			  },
			  target: {
				  cell: this.graph.model.getNodes()[2],
				  port: 'port1'
			  },
			  router: 'orth',
			    connector: {
			      name: 'rounded',
			      args: {
					  padding: 10,
				  },
			    },
			})
			
			Graph.registerVueComponent(
			  "count-component",
			  {
				template: `<count></count>`,
				components: {
				  Count,
				},
			  },
			  true
			);
		},
		methods: {
			createNode: function(node) {
				this.graph.addNode({
				id: node.id,
				shape: 'vue-shape',
				width: 180,
				height: 32,
				x: node.x,
				y: node.y,
				ports: {
					groups: {
						in: {
							position: 'top',
							attrs: {
								circle: {
									r: 3,
									magnet: true,
									stroke: '#808080',
									strokeWidth: 1,
									fill: '#fff',
								},
							}
						},
						out: {
							position: 'bottom',
							attrs: {
								circle: {
									r: 3,
									magnet: true,
									stroke: '#808080',
									strokeWidth: 1,
									fill: '#fff',
								},
							},
						},
					},
					items: [{
							id: 'port1',
							group: 'in'
						},
						{
							id: 'port2',
							group: 'out'
						}
					],
				},
				
				
				component: {
					template: `<count :node-name="nodeName" @add="add()"></count>`,
					data() {
						return {
							nodeName: node.nodeName
						}
					},
					methods: {
						// add: () => {
						// 	data.num += 1
						// }
					},
					components: {
						Count,
					}
				}
			});
			}
		}
	
	}
</script>

<style>
</style>
