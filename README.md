# app-download

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




https://www.pgyer.com/wenexing-android

npm install jquery --save-dev
npm install bootstrap --save-dev

npm install vue-awesome --save-dev

[font-awesome-webpack](https://www.npmjs.com/package/font-awesome-webpack)
npm i font-awesome --save-dev
npm i font-awesome-webpack --save-dev
npm i font-awesome-webpack2 --save-dev
npm i less --save-dev

npm install --save-dev less-loader less
npm install --save vue-animate

Todo:
- 提示浏览器打开的过渡动画[jquery slideDown]√
- 链接二维码制作http://app.wenexing.com/android
- 判断是否微信 √
- 判断还是ios android √
- 部署 

```
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);  
    window.location.href ="iPhone.html";
} else if (/(Android)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent); 
    window.location.href ="Android.html";
} else {
    window.location.href ="pc.html";
};
```