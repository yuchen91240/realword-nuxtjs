import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f9af8ce = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _0a5dcd0e = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _41941d1a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _06280f1a = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _5019e4d2 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _3738ac48 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _261b5b32 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1f9af8ce,
    children: [{
      path: "",
      component: _0a5dcd0e,
      name: "home"
    }, {
      path: "/login",
      component: _41941d1a,
      name: "login"
    }, {
      path: "/register",
      component: _41941d1a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _06280f1a,
      name: "profile"
    }, {
      path: "/settings",
      component: _5019e4d2,
      name: "settings"
    }, {
      path: "/editor",
      component: _3738ac48,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _261b5b32,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
