<template>
  <div class="main-detail">
    <common-head title="我的"/>
    <div class="top">
      <img src="https://img22.iblimg.com/market-12/images/activity/943219889.png" alt="">
    </div>
      <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="username"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import CommonHead from '@/components/CommonHead'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      // console.log(values)
      const userInfo = {
        userName: 'zhangmeng',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596803426638&di=fb422c10ead41448eefc3f9e88fa1445&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png'
      }
      const accessToken = 'asda46451ca4s6'
      // 后端验证成功后，要将用户信息一聚accessToken缓存起来
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      localStorage.setItem('accessToken', accessToken)
      // 如果 是因为没有登录权限，访问某个需要登录的页面，重新定向到登录页
      console.log(this.$route)
      if (this.$route.query.path) {
        this.$router.push(this.$route.query.path)
      } else {
        this.$router.push('/home')
      }
    }
  },
  components: {
    Tabbar,
    CommonHead
  }
}
</script>

<style lang="scss" scoped>
.main-detail{
  & .top{
    margin-bottom: 20px;
    width: 100%;
    img{
      width: 100%;
    }
  }
}
</style>
