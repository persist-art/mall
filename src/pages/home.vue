<template>
  <div>
      <nav-header></nav-header>
      <router-view></router-view>
      <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'nav-home',
  components:{
    NavHeader,
    NavFooter
  }
}
</script>

<style>

</style>