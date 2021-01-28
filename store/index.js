const cookieParser = process.server ? require('cookieparser') : undefined

// 在服务端渲染期间运行都是同一个实例
// 为了防止数据冲突，务必要把state定义为一个函数，返回数据对象
export const state = () => {
  return {
    // 当前登录用户状态
    user: null
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

export const actions = {
  // nuxtServerInit 是一个特殊的action 方法
  // 这个action会在服务端渲染期间自动调用
  // 作用：初始化容器数据，传递数据给客户端使用
  nuxtServerInit({
    commit
  }, {
    req
  }) {
    let user = null
    // 如果请求头中有Cookie
    if (req.headers.cookie) {
      // 使用cookierparser把cookie字符串转换为Javascript对象
      const parsed = cookieParser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }

    // 提交mutation修改state状态
    commit('setUser', user)
  }
}