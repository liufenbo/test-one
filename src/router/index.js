import Vue from 'vue'
import Router from 'vue-router'
// 引入其他路由文件
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
        path: '/index/hdhh',
        name: 'home',
        component:() => import('../view/index.vue'),
    },
    {
        path: '/',
        name: 'homes',
        component:() => import('../App.vue'),
    },
    {
        path: '*',
        name: 'NotFount',
        component: () => import('../view/notFound.vue')
    }
  ]
})

export default router