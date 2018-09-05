// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import iView from 'iview'
import axios from 'axios'
import i18n from './language'
import '@/common/stylus/index.styl'
// import 'iview/dist/styles/iview.css'
import '../my-theme/dist/iview.css'

import './config/config'
fastclick.attach(document.body)// 解决触摸延迟
Vue.config.productionTip = false
Vue.http = Vue.prototype.$http = axios
Vue.use(iView)
Vue.use(VueLazyload, {
  loading: require('./common/images/default.gif')// 初示加载的图片
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
