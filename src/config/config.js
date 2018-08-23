import Vue from 'vue'
import axios from 'axios'
import iView from 'iview'
Vue.use(iView)
// 拦截请求
axios.interceptors.request.use(
  config => {
    iView.LoadingBar.start()
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  })

// 拦截相应
axios.interceptors.response.use(
  response => {
    iView.LoadingBar.finish()
    // console.log(response, '响应正确')
    return response
  },
  error => {
    iView.LoadingBar.error()
    console.log(error, '响应错误拦截')
    // return Promise.reject(error.response.data)
  })
