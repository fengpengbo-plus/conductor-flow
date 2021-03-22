<template>
	<div></div>
</template>

<script>
	export default ({
		name: "edge",
		mounted() {
			// Graph.registerNode('red-edge', {
			//   inherit: Edge, // 或 'rect'
			//   attrs: {
			//     line: {
			//       stroke: 'red',
			//     },
			//   },
			// })
			Edge.define({
			  shape: 'edge',
			  connector: { name: 'pai' },
			  zIndex: 2,
			  attrs: {
			    line: {
			      stroke: '#808080',
			      strokeWidth: 1,
			      targetMarker: {
			        stroke: 'none',
			        fill: 'none',
			      },
			    },
			  },
			})
		}
	})
</script>