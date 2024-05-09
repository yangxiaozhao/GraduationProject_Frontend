import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import index from '../views/index.vue'
import study from '../views/study.vue'
import account from '../views/account.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/study',
      name: 'study',
      component: study
    },
    {
      path: '/account',
      name: 'account',
      component: account
    }
    
  ]
})
