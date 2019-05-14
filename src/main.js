// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import store from './store/index'
import filters from './utils/filters'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.filter('toYuan', filters.toYuan)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
