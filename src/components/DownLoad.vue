<template>
  <section>
    <div class="span12 margin-bottom-30" id="appicon-bg" style="text-align:center;">
      <a href="javascript:void(0);" @click="install">
        <img src="../assets/wex_logo.png">
      </a>
    </div>
    <h2 style="color:#333;margin-bottom: -5px;">稳E行理财</h2>
    <div class="span12 gray-text" style="text-align:center;">
      <ul class="breadcrumb">
        <li>版本：1.0.3 (build 1)</li>
        <li>大小：11.6 MB</li>
        <li>更新时间：2017-09-18</li>
      </ul>
    </div>
    <div class="view row margin-bottom-30" style="padding-top:26px;">
      <div class="span12 gray-text" style="text-align:center;">
        <img src="../assets/wenexing-android.png" style="width:156px; height:156px;">
        <p style="padding-top:10px;color:#969b9d;">或者用手机扫描二维码安装</p>
      </div>
    </div>
    <div class="view row" style="margin-top:30px;">
      <div class="span12 margin-bottom-20" style="text-align:center;">
        <div class="spinner">
          <div id="showtext"><!--正在下载，请在浏览器中查看下载进度--></div>
          <div class="loading"></div>
          <a href="javascript:void(0);" @click="install_loading" id="down_load" class="btn-u btn-u-lg">
            <i class="fa fa-android"><icon name="download"></icon></i>
            点击安装</a>
        </div>
      </div>

      <div class="span12 gray-text" style="text-align:center;margin-bottom:10px;">
        <span class=""><i aria-hidden="true" class="fa fa-android" style="font-size:16px;"><icon name="android"></icon></i> 适用于Android设备</span>
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
      install: function () {
        alert()
      },
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

  #appicon-bg {
    box-shadow: 0 10px 29px rgba(0, 0, 0, .06);
    -webkit-transition: box-shadow 0.2s ease-in-out;
    -moz-transition: box-shadow 0.2s ease-in-out;
    -o-transition: box-shadow 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;
    width: 120px;
    height: 120px;
    -webkit-border-radius: 24px;
    -moz-border-radius: 24px;
    border-radius: 24px;
    border: none;
    background-color: #ffffff;
    padding: 30px;
    margin: auto;
    margin-top: -150px;
    margin-bottom: 30px;
  }
  .gray-text {
    color: #969b9d;
  }
  .breadcrumb {
    top: 10px;
    padding-right: 0;
    background: 0 0;
    position: relative;
    padding: 8px 15px;
    margin-bottom: 20px;
    list-style: none;
    border-radius: 4px;
  }

  .btn-u-lg, a.btn-u-lg {
    font-size: 18px;
    padding: 10px 50px;
    background-color: #28caad;
    border-radius: 5px;
  }

  .btn-u {
    background: #1abc9c;
    border: 1px solid #1ABC9C;
    color: #fff;
    cursor: pointer;
    position: relative;
    font-weight: 400;
    display: inline-block;
  }

  .fa-download:before {
    content: "\f019";
  }

  .fa {
    font: normal normal normal 14px/1 FontAwesome;
    display: inline-block;
  }
  
</style>
