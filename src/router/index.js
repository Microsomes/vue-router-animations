import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import home from './../views/home.vue';
import about from './../views/about.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/home',
      component:home
    },{
      path:'/about',
      component:about
    }
  ]
})
