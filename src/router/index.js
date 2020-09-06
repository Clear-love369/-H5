import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import('@/views/Classify'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/Mine')
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: () => import('@/views/Shopping'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/itemList/:cateId',
    name: 'itemList',
    component: () => import('@/views/ItemList'),
    meta: {

    }
  },
  {
    path: '/Detail/:cateId',
    name: 'detail',
    component: () => import('@/views/Detail'),
    meta: {

    }
  },
  {
    path: '/Order',
    name: 'order',
    component: () => import('@/views/Order'),
    meta: {
      needLogin: true
    }
  },
  {
    path: '/AddContact',
    name: 'addcontact',
    component: () => import('@/views/AddContact'),
    meta: {
      needLogin: true
    }
  },
  {
    path: '/AddressLists',
    name: 'addresslists',
    component: () => import('@/views/AddressLists'),
    meta: {
      needLogin: true
    }
  },
  {
    path: '/EditContact/:index',
    name: 'editcontact',
    component: () => import('@/views/EditContact'),
    meta: {
      needLogin: true
    }
  },
  {
    path: '/Search',
    name: 'search',
    component: () => import('@/views/Search'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/SearchResult',
    name: 'searchResult',
    component: () => import('@/views/SearchResult'),
    meta: {
      needLogin: false
    }
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // 判断是不是去登录页
  if (to.fullPath === '/main') {
    next()
  } else {
    if (to.meta.needLogin) {
      const accessToken = localStorage.getItem('accessToken')
      if (accessToken) {
        next()
      } else {
        next({ path: '/mine', query: { path: to.fullPath } })
      }
    } else {
      next()
    }
  }
})
export default router
