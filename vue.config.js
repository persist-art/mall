const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host:'localhost',
    port:8080,
    // proxy可以做一个接口的拦截，解决前后端跨域的问题。如果不用接口代理的话完全不用用vue.config.js这个文件，但用接口代理是最安全的方式
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin: true, // 是否改变域名：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite:{
          // 路径重写
          '/api':''
        }
      }
    }
  }
})
