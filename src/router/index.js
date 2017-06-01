import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Home',
      component: (resolve) => require(['../components/home/home.vue'], resolve) // 懒加载
    },
    {
      path: '/discover',
      name: 'Discover',
      component: (resolve) => require(['../components/discover/discover.vue'], resolve)
    },
    {
      path: '/order',
      name: 'Order',
      component: (resolve) => require(['../components/order/order.vue'], resolve)
    },
    {
      path: '/profile',
      name: 'Profile',
      component: (resolve) => require(['../components/profile/profile.vue'], resolve)
    },
    {
      path: '/shop',
      name: 'Shop',
      component: (resolve) => require(['../components/shop/shop.vue'], resolve)
    }
  ]
})
