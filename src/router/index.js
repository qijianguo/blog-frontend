import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Archives from '@/pages/archive/Archives'
import Tags from '@/pages/tags/Tags'
import About from '@/pages/about/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/archive',
      name: 'Archives',
      component: Archives
    },{
      path: '/tags',
      name: 'Tags',
      component: Tags
    },{
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
