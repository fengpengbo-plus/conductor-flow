import Vue from 'vue'
import App from './App.vue'
import { Button, PageHeader, Tooltip, Layout } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

Vue
.use(Button)
.use(PageHeader)
.use(Tooltip)
.use(Layout)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')