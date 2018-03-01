export default {
  routes: [{
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  }, {
    path: '/index',
    name: 'Index',
    component: () => import('../modules/Index.vue')
  }]
}
