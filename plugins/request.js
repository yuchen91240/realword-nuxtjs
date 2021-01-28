/**
 * 基于axios封装的请求模块
 */

import axios from 'axios'

//  创建请求对象
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})


// 通过插件机制获取到上下文对象(query、params、req、res、app、store...)
// 插件导出函数必须作为default成员
export default ({
  store
}) => {
  // 请求拦截器
  // 所有请求都要经过拦截器
  request.interceptors.request.use(function (config) {
    // DO something before request is sent
    // 请求都会进过这里
    const {
      user
    } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config;
  }, function (error) {
    // 如果请求失败，会进入这里
    // Do something with request error
    return Promise.reject(error);
  })
}