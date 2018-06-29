export default {
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('../modules/login/Login.vue')
  }, {
    path: '/orders/index',
    name: 'Orders',
    component: () => import('../modules/home/Orders.vue')
  }]
}
