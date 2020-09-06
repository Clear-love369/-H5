<template>
  <div>

    <van-tabbar :route='true' active-color='#07c160' inactive-color='#000'>
      <van-tabbar-item name='home' icon="home-o" to='/home'>首页</van-tabbar-item>
      <van-tabbar-item icon="search" to='/classify'>分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to='/shopping' :badge='cart.lists.length?cart.lists.length:""'>购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to='/mine'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style scoped lang="scss">
.van-tabbar{
  z-index: 10;
}
</style>
