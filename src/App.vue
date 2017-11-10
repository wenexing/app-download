<template>
  <div id="app">
    <div style="display:none;">
        <img src="./assets/logo_300.png" onerror="javascript:this.src='./assets/default-icon.png';">
    </div>
    <transition :duration="1000" appear>
      <div class="row view-alert" v-show="isWechat" transition="slideDown" style="z-index: 99; width: 100%; margin-left: 0px; margin-right: 0px; padding-top: 30px; padding-bottom: 30px; box-shadow: rgba(22, 22, 23, 0.619608) 0px -10px 16px inset; background: rgb(52, 52, 52);">
        <div class="col-md-12 text-left" style="padding-right:50px;padding-left:30px;">
          <p style="color:#7f7e7e;margin:0px;">
            点击右上角按钮，然后在弹出的菜单中，点击在浏览器中打开，即可安装
          </p>
        </div>
        <div class="col-md-12 pull-right">
          <img src="https://static.pgyer.com/static-20171115/assets/img/alert-arrow.png" class="pull-right" style="width:30px;margin-top:-68px;">
        </div>
      </div>
    </transition>
    <router-view/>
    <router-view class="header" name="header"></router-view>
    <router-view class="container" name="download"></router-view>
    <router-view class="footer" name="footer"></router-view>
  </div>
</template>

<script>
// import $ from './assets/jquery-vendor.js'
import $ from './assets/jquery-vendor.js'

export default {
  name: 'app',
  data () {
    return {
      isWechat: false
    }
  },
  methods: {
    // 是否微信浏览器
    isWechatRequest: function () {
      var ua = window.navigator.userAgent.toLowerCase()
      if (!ua.match(/MicroMessenger/i)) {
        return false
      }
      if (ua.match(/MicroMessenger/i).toString() === 'micromessenger') {
        return true
      } else {
        return false
      }
    }
  },
  created: function () {
    console.log('555')
  },
  mounted () {
    var vm = this
    console.log('444')
    setTimeout(function () {
      if (vm.isWechatRequest()) {
        // vm.isWechat = true
        $('.view-alert').slideDown()
      }
    }, 100)
  }
}
</script>

<style>
  /*@import '/static/css/easydialog.min.css';*/
  body {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #585f69;
    margin-top: 5px;
    text-shadow: none;
    font-weight: 400;
    font-family: NotoSansHans-Regular,AvenirNext-Regular,proxima-nova,"Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei","Open Sans","Helvetica Neue",Arial,sans-serif;
  }
  h2 {
    font-size: 24px;
    line-height: 33px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 0px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  /*import 'vue-animate/dist/vue-animate.min.css'*/
</style>
