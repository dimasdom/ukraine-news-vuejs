import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

new Vue({
    store,
  render: h => h(App),
}).$mount('#app')
