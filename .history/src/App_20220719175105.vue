<template>
  <div id="app">
    <router-view></router-view>
  </div>
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
    if(this.$cookies.get('userId')){
      //拉取用户信息
      this.getUser();
      //拉取购物车数量
      this.getCartCount();
    }
  },
  methods:{
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
    /* this.axios.get('/user/login').then((res)=>{
      this.res=res;
    }); */
    //拉取用户信息
    getUser(){
        this.axios.get('/user').then((res={})=>{
        //to-do  保存到vuex里面
        this.$store.dispatch('saveUserName',res.username);
        })
      },
      //拉取购物车数量
      getCartCount(){
        this.axios.get('/carts/products/sum').then((res=0)=>{
          this.$store.dispatch('saveCartCount',res);
        })
      }
    }
  }

</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';
</style>
