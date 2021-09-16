import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    }
  ]
})
