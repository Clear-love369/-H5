import axios from 'axios'
import qs from 'qs'
const request = axios.create({
  baseURL: '/zhangmeng/',
  timeout: 5000
})

// 拦截器
request.interceptors.request.use(function (config) {
  // 解决post参数为json的问题
  if (config.method === 'post' && config.data) {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
request.interceptors.response.use(function (res) {
  return res
}, function (error) {
  return Promise.reject(error)
})

export default request
