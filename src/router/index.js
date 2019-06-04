/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from "vue-router"
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
  // 应用中所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta:{
        isShowFoot: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        isShowFoot: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        isShowFoot: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        isShowFoot: true
      }
    },
    {
      path:'/login',
      component:Login
    },

    { // 当访问根路径自动重定向到/miste
      path: '/',
      redirect: '/msite'
    }
  ]
})