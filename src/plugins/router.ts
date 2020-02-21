// Dependencies
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Address from '../views/Address.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/:privateKey',
      name: 'address',
      component: Address,
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
    },
  ],
})

export default router
