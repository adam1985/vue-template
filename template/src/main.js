import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(axios)
require('es6-promise').polyfill()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
