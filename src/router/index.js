import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Discover from '@/components/discover/discover'
import Order from '@/components/order/order'
import Profile from '@/components/profile/profile'
import Shop from '@/components/shop/shop'

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
      component: Home
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
