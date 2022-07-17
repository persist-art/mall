<template>
  <div class="service">
    <div class="container">
        <ul>
            <li><span class="icon-setting"></span>预约维修服务</li>
            <li><span class="icon-7day"></span>7天无理由退货</li>
            <li><span class="icon-15day"></span>15天免费换货</li>
            <li><span class="icon-post"></span>满150元包邮</li>
        </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    name:'nav-header',
    data(){
      return {
        phoneList:[]
      }
    },
    computed:{
      /*username(){
        return this.$store.state.username;
      },
      cartCount(){
        return this.$store.state.cartCount;
      }*/
      ...mapState(['username','cartCount'])
    },
    filters:{
      currency(val){
        if(!val)return '0.00';
        return '￥' + val.toFixed(2) + '元';
      }
    },
    mounted(){
      this.getProductList();
      let params = this.$route.params;
      if(params && params.from == 'login'){
        this.getCartCount();
      }
    },
    methods:{
      login(){
        this.$router.push('/login');
      },
      getProductList(){
        this.axios.get('/products',{
          params:{
            categoryId:'100012',
            pageSize:6
          }
        }).then((res)=>{
          this.phoneList = res.list;
        })
      },
      getCartCount(){
        this.axios.get('/carts/products/sum').then((res=0)=>{
          this.$store.dispatch('saveCartCount',res);
        })
      },
      logout(){
        this.axios.post('/user/logout').then(()=>{
          this.$message.success('退出成功');
          this.$cookie.set('userId','',{expires:'-1'});
          this.$store.dispatch('saveUserName','');
          this.$store.dispatch('saveCartCount','0');
        })
      },
      goToCart(){
        this.$router.push('/cart');
      }
    }
  }
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
.service{
  padding: 33px 0;
  color: #666666;
  font-size: 16px;
  text-align: center;
  li{
  display: inline-block;
  width: 24.9%;
  text-align: center;
  border-right:1px solid #e5e5e5;
  }
  span{
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 8px;
  }
  .icon-setting{
    @include bgImg(20px,20px,'../../public/imgs/icon-setting.png');
  }
  .icon-7day{
    @include bgImg(20px,20px,'../../public/imgs/icon-7day.png');
  }
  .icon-15day{
    @include bgImg(20px,20px,'../../public/imgs/icon-15day.png');
  }
  .icon-post{
    @include bgImg(20px,20px,'../../public/imgs/icon-post.png');
  }
}
</style>