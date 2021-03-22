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
		Node
	} from '@antv/x6'
	import '@antv/x6-vue-shape'
	export default {
		name: 'X6Container',
		mounted() {
			const data = {
				num: 0
			}
			// 从 CND 引入时，我们暴露了 X6 这个全局变量
			// const { Graph } = X6

			// 创建 Graph 的实例
			const graph = new Graph({
				container: document.getElementById('container'),
				grid: true,
				panning: {
					enabled: true,
					modifiers: 'shift',
				},
			})
			graph.addNode({
				shape: 'vue-shape',
				width: 180,
				height: 32,
				x: 100,
				y: 100,
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
					template: `<count :num="num" @add="add()"></count>`,
					data() {
						return data
					},
					methods: {
						add: () => {
							data.num += 1
						}
					},
					components: {
						Count,
					}
				}
			});

		}
	}
</script>

<style>
</style>
