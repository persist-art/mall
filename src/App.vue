<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      res:{}
    }
  },
  mounted(){
    // storage.setItem('a',1);
    // storage.setItem('user',{a:1});
    // storage.setItem('abc',{a:1},'user');
    // storage.clear('a');
    // storage.clear('a','user');
    // 本地加载请求静态json文件的形式
    /* this.axios.get('/mock/user/login.json').then((res)=>{
      this.res=res;
    }) */
    // 通过easy-moke平台实现数据mock
    /* this.axios.get('/user/login').then((res)=>{
      this.res=res;
    }); */
    // 本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res)=>{
      this.res=res;
    });
  }
}
</script>

<style>
@import './assets/scss/config.scss'
</style>
