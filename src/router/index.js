import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuView.vue')
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: () => import('../views/PedidosView.vue')
  },
  {
    path: '/ordenes',
    name: 'ordenes',
    component: () => import('../views/OrdenesView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
