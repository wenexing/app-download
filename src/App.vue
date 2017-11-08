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
body {
  margin: 0;  
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
