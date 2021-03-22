import Vue from 'vue'
import App from './App.vue'
import { Button, PageHeader, Tooltip, Layout, Popover,Icon } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

Vue
.use(Button)
.use(PageHeader)
.use(Tooltip)
.use(Layout)
.use(Popover)
.use(Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')