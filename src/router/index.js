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
        path: '/',
        name: 'home',
        component:() => import('../view/index.vue'),
    },
    {
        path: '/index/hdhh',
        name: 'homes',
        component:() => import('../App.vue'),
    },
    {
        path: '/first',
        name: 'first',
        component:() => import('../view/first.vue'),
    },
    {
        path: '*',
        name: 'NotFount',
        component: () => import('../view/notFound.vue')
    }
  ]
})

export default router