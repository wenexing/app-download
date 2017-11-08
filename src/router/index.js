import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import DownLoad from '@/components/DownLoad'

Vue.use(Router)
// https://router.vuejs.org/en/essentials/history-mode.html
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Download',
      // component: Header
      components: {
        header: Header,
        download: DownLoad
      }
    },
    {
      path: '/index.html',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
