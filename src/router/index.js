import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
        download: DownLoad,
        footer: Footer
      }
    },
    {
      path: '/android',
      name: 'Android',
      // component: Header
      components: {
        header: Header,
        download: DownLoad,
        footer: Footer
      }
    },
    {
      path: '/index.html',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
