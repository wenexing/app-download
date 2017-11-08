<template>
  <section>
    <h2 style="color:#333;size:24px;margin-bottom: -5px;">稳E行理财</h2>
    <ul class="breadcrumb">
      <li>版本：1.0.3 (build 1)</li>
      <li>大小：11.6 MB</li>
      <li>更新时间：2017-09-18</li>
    </ul>

    <div id="" class="view row" style="margin-top:30px;">

      <div class="span12 margin-bottom-20" style="text-align:center;">
        <div class="spinner">
          <div id="showtext">正在下载，请在浏览器中查看下载进度</div>
          <div class="loading"></div>
          <a href="javascript:void(0);" @click="install_loading" id="down_load" class="btn-u btn-u-lg">
            <i class="fa fa-download"></i> 点击安装</a>

        </div>
      </div>
      <div class="span12 margin-bottom-20" style="text-align:center;display:none;">
        <div class="spinner">
          <div id="showtext">正在安装，请按 Home 键在桌面查看</div>
          <div class="loading"></div>
          <a href="javascript:void(0);" onclick="javascript:install_loading();" id="down_load"
             class="btn-u btn-u-lg btn-u-green"><i class="fa fa-download"></i> 点击安装</a>
        </div>

      </div>

      <div class="span12 gray-text" style="text-align:center;margin-bottom:10px;">
        <span class=""><i aria-hidden="true" class="fa fa-android" style="font-size:16px;"></i> 适用于Android设备</span>
      </div>

    </div>
    <hr class="devider devider-dotted">
    <div class="row">
      <div class="col-md-8 col-md-offset-2" style="word-break:break-all;">
        <div class="tag-box margin-bottom-40">
          <h2 class="content-title">更新说明</h2>
          版本 ： v1.0.3
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-md-offset-2" style="word-break:break-all;">
        <div class="tag-box ">
          <h2 class="content-title">应用介绍</h2>
          稳智行旗下理财平台-稳E行理财
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="tag-box  margin-bottom-40">
          <h2 class="content-title">应用截图</h2>
          <div class="table-responsive" style="border:none; overflow:auto;">
            <table class="table" style="margin-bottom:0;">
              <tbody>
              <tr>
                <td class="text-center" width="20%" style="border:none;">
                  <div style="">
                    <img
                      src="https://o1whyeemo.qnssl.com/image/view/app_screenshots/dad6db07f0a56eb50a04236eed583629/528"
                      style="width:230px;">
                  </div>
                </td>
                <td class="text-center" width="20%" style="border:none;">
                  <div style="">
                    <img
                      src="https://o1whyeemo.qnssl.com/image/view/app_screenshots/140661f92d96eefdebadf88ae96b15e2/528"
                      style="width:230px;">
                  </div>
                </td>
                <td class="text-center" width="20%" style="border:none;">
                </td>
                <td class="text-center" width="20%" style="border:none;">
                </td>
                <td class="text-center" width="20%" style="border:none;">
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'DownLoad',
    methods: {
      install_loading: function () {
        alert()
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    background: url(../assets/top_bg.png) no-repeat scroll center;
    height: 300px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
