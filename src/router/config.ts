export default {
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  }, {
    path: '/hello',
    name: 'Hello',
    component: () => import('../components/Hello.vue')
  }]
}
