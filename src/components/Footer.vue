<template>
  <footer>
  <div class="copyright" style="margin-bottom: 0px;">
    <div class="container" style="z-index:-1;">
      <div class="row">
        <div class="col-lg-8  col-xs-12 col-md-6 col-sm-6 text-center" style="z-index:0;">
          由 <a href="http://www.wenexing.com">稳E行</a> 提供
        </div>
      </div><!--/row-fluid-->
    </div><!--/container-->
  </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    install: function () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.copyright {
  color: #777!important;
  padding: 30px 0;
  background: #f4f4f4;
  border-top: solid 1px #e5e5e5;
}

.copyright a {
  margin: 0;
  color: #1abc9c!important;
}
</style>
