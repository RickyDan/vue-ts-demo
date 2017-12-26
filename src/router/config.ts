export default {
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  }]
}
