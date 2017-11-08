<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <router-view class="view two" name="header"></router-view>
    <router-view class="view two" name="download"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
