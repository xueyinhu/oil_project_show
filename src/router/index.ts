import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router



