export default {
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue')
  }, {
    path: '/hello',
    name: 'Hello',
    component: () => import('../components/Hello.vue')
  }]
}
