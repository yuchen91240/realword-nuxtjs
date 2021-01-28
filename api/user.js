import {
  request
} from '@/plugins/request'



// 用户注册
export const register = (data) => {
  return request({
    method: 'POST',
    url: '/api/users',
    data // data: data,  简写为  data
  })
}



// 用户登录
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data // data: data,  简写为  data
  })
}