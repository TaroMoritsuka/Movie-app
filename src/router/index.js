import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NowShowing from '../views/NowShowing.vue'
import Popular from '../views/Popular.vue'
import WatchList from '../views/WatchList.vue'
import BootstrapVue from 'bootstrap-vue' // added
Vue.use(VueRouter)
Vue.use(BootstrapVue) // added

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/nowshowing',
    name: 'nowShowing',
    component: NowShowing
  },
  {
    path: '/popular',
    name: 'popular',
    component: Popular
  },
  {
    path: '/watchList',
    name: 'watchList',
    component: WatchList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
