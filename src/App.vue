<template>
  <div id="app">
    <FlowContainer/>
  </div>
</template>

<script>
import FlowContainer from './components/FlowContainer.vue'

export default {
  name: 'app',
  components: {
    FlowContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
