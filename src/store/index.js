/**
 * Created by Administrator on 2018/3/8 0008.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import active from './modules/active'
import createLogger from 'vuex/dist/logger'//    调试
import process from 'process'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug, // 启动调试严格模式
  plugins: debug ? [createLogger()] : [],
  modules: {
    active
  }
})
