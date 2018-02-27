export default {
  routes: [{
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  }, {
    path: '/index',
    name: 'Hello',
    component: () => import('../components/Index.vue')
  }]
}
