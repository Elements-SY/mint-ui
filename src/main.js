// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./util/rem"
import store from './store/index'
import axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './iconfont/iconfont.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon',Icon)
Vue.use(Mint)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
