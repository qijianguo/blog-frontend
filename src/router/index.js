import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import Archives from '@/pages/archive/Archives'
import Tags from '@/pages/tag/tags'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/archive',
      name: 'Archives',
      component: Archives
    },{
      path: '/tag',
      name: 'Tags',
      component: Tags
    }
  ]
})
