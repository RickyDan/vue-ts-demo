export default {
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  }, {
    path: '/index',
    name: 'Index',
    component: () => import('../modules/Index.vue')
  }]
}
