import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import routes from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'//把作用域对象挂载到vue实例中
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import 'swiper/css'
// import env from './env'
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
const mock=true;
if(mock){
    // import是预编译加载，被编译的时候就会被加载进来写入内存中；而require是从上到下开始执行的时候才去加载的，如果mock是false不会被加载
    require('./mock/api');
}
// 根据前端的跨域方式做调整  /a/b : /api/a/b => /a/b
//如果是代理方式这里面就只是/api，然后把vue.config里的target改成https://test-www.imooc.com,而且没必要写env.js和改package.json了
axios.defaults.baseURL = '/api';
// 操作时间
axios.defaults.timeout=8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL=env.baseURL;
// 接口错误拦截。response是axios的插件，axios封装的。
axios.interceptors.response.use(function (response){
    // response.data获取接口的返回值
    let res=response.data;
    // 状态码是0就代表成功
    if(res.status == 0){
        return res.data;
    }else if(res.status==10){
        // 10是自定义的一个状态码，登录异常设为了10。未登录就会跳转到登录页面
        window.location.href = '/#/login';
    }else{
        // 报错信息
        alert(res.msg);
    }
})
// eslint-disable-next-line no-undef


createApp(App).use(router).use(VueAxios, axios).use(VueLazyload).use(VueAwesomeSwiper).mount('#app')
