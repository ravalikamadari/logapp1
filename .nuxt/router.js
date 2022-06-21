import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0f9689d6 = () => interopDefault(import('..\\pages\\CreateTag.vue' /* webpackChunkName: "pages/CreateTag" */))
const _016b7bc6 = () => interopDefault(import('..\\pages\\log\\index.vue' /* webpackChunkName: "pages/log/index" */))
const _3c1f3d20 = () => interopDefault(import('..\\pages\\LoginPage.vue' /* webpackChunkName: "pages/LoginPage" */))
const _0c943921 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _052f6db0 = () => interopDefault(import('..\\pages\\tag\\index.vue' /* webpackChunkName: "pages/tag/index" */))
const _9a041e36 = () => interopDefault(import('..\\pages\\user-management\\index.vue' /* webpackChunkName: "pages/user-management/index" */))
const _435646f8 = () => interopDefault(import('..\\pages\\user-management\\CreateUser.vue' /* webpackChunkName: "pages/user-management/CreateUser" */))
const _0ab8b381 = () => interopDefault(import('..\\pages\\user-management\\form.vue' /* webpackChunkName: "pages/user-management/form" */))
const _4995515e = () => interopDefault(import('..\\pages\\user-management\\UpdateUser.vue' /* webpackChunkName: "pages/user-management/UpdateUser" */))
const _4f11b7ae = () => interopDefault(import('..\\pages\\log\\_id.vue' /* webpackChunkName: "pages/log/_id" */))
const _7aace88d = () => interopDefault(import('..\\pages\\user-management\\_id.vue' /* webpackChunkName: "pages/user-management/_id" */))
const _5dc9f3ca = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CreateTag",
    component: _0f9689d6,
    name: "CreateTag"
  }, {
    path: "/log",
    component: _016b7bc6,
    name: "log"
  }, {
    path: "/LoginPage",
    component: _3c1f3d20,
    name: "LoginPage"
  }, {
    path: "/profile",
    component: _0c943921,
    name: "profile"
  }, {
    path: "/tag",
    component: _052f6db0,
    name: "tag"
  }, {
    path: "/user-management",
    component: _9a041e36,
    name: "user-management"
  }, {
    path: "/user-management/CreateUser",
    component: _435646f8,
    name: "user-management-CreateUser"
  }, {
    path: "/user-management/form",
    component: _0ab8b381,
    name: "user-management-form"
  }, {
    path: "/user-management/UpdateUser",
    component: _4995515e,
    name: "user-management-UpdateUser"
  }, {
    path: "/log/:id",
    component: _4f11b7ae,
    name: "log-id"
  }, {
    path: "/user-management/:id?",
    component: _7aace88d,
    name: "user-management-id"
  }, {
    path: "/",
    component: _5dc9f3ca,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
