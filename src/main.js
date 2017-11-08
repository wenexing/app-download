// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery'
// import jquery from 'jquery'
// import 'jquery/dist/jquery.min'
// global.jQuery = require('jquery')
// import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome-webpack'
// require("font-awesome-webpack");
// [webpack如何全局引入jquery和插件?](https://www.zhihu.com/question/33448231)
// window.jQuery = window.$ = require('jquery')
// require('bootstrap/dist/js/bootstrap.min')
import $ from './assets/jquery-vendor.js'
import 'bootstrap/dist/js/bootstrap.min'

// https://github.com/Justineo/vue-awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('icon', Icon)

Vue.config.productionTip = false
$()
// jQuery()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
