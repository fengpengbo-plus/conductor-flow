<template>
	<div id="canvas" style="width: 700px;height: 400px;background-color: #f2f2f2;" @mousedown.left="clickLeft()"
		@contextmenu.prevent="clickRight()" @mousemove="calcPosition" @mouseup.left="mouseUpLeft">
	</div>
</template>

<script>
	import * as zrender from 'zrender'
	import $ from 'jquery'
	export default {
		name: 'CanvasContainer',
		data() {
			return {
				zr: null,
				group: null,
				dragCanvas: false,
				dragStartX: 0,
				dragStartY: 0,
				nodes: [],
				edges: []
			}
		},
		mounted: function() {
			this.init();
		},
		methods: {
			init() {
				this.zr = zrender.init(document.getElementById('canvas'))
				this.group = new zrender.Group();
				this.drawCircle();
				this.zr.add(this.nodes[0]);
			},
			clickLeft() {
				let x = event.offsetX;
				let y = event.offsetY;
				let isBlack = true;
				this.nodes.forEach(function(node) {
					if (node.contain(x, y)) {
						isBlack = false;
					}
				});
				if (isBlack) {
					$("#canvas").find("svg").addClass('drag');
					this.dragStartX = x;
					this.dragStartY = y;
					this.dragCanvas = true;
				}
			},
			clickRight() {
				console.log("右键")
			},
			calcPosition() {
				let x = event.offsetX;
				let y = event.offsetY;
				let moveX = (x - this.dragStartX);
				let moveY = (y - this.dragStartY);
				this.dragStartX = x;
				this.dragStartY = y;
				if (this.dragCanvas) {
					this.nodes.forEach(function(node) {
						if (node.type == 'circle') {
							node.attr({
								shape: {
									cx: node.shape.cx + moveX,
									cy: node.shape.cy + moveY
								}
							})
						} else {
							node.attr({
								shape: {
									x: node.shape.x + moveX,
									y: node.shape.y + moveY
								}
							})
						}
					});
					this.edges.forEach(function(edge) {
						edge.attr({
							shape: {
								x1: edge.shape.x1 + moveX,
								y1: edge.shape.y1 + moveY,
								x2: edge.shape.x2 + moveX,
								y2: edge.shape.y2 + moveY,
								cpx1: edge.shape.cpx1 + moveX,
								cpy1: edge.shape.cpy1 + moveY
							}
						})
					});
				}
			},
			mouseUpLeft() {
				$("#canvas").find("svg").removeClass('drag')
				this.dragCanvas = false;
			},
			drawCircle() {
				// 创建一个圆circle
				let circle = new zrender.Circle({
					type: 'circle',
					draggable: true,
					shape: {
						cx: 5 + 200 * (2 - 1),
						cy: 2 + 50 * (2 - 1),
						r: 40
					},
					style: {
						fill: 'rgb(255,247,232)',
						stroke: 'rgb(255,191,114)'
					},
				})
				// 添加圆到group里
				console.log(circle.type)
				this.nodes.push(circle)
			}
		}
	}
</script>

<style>
	.drag {
		cursor: url('../assets/drag2.ico'), pointer;
	}
</style>
