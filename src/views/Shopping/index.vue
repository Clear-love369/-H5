<template>
  <div class="main-detail">
    <common-head title='购物车'/>
    <Tabbar/>

    <!-- 商品卡片 -->
    <van-swipe-cell  v-for='(item,index) in cart.lists' :key='item.id'>
      <div class="item">
        <van-checkbox v-model="item.isChecked" @change='checkChange' ></van-checkbox>
          <van-card
              :num="item.num"
              :price="item.minPrice"
              :desc="item.tags"
              :title="item.name"
              :thumb="item.pic"
            >
              <template #footer>
                <van-button size="small" @click='reduceNum(index)'>-</van-button>
                <span class="num">{{item.num}}</span>
                <van-button size="small" @click='addNum(index)'>+</van-button>
              </template>
            </van-card>
      </div>
    <template #right>
      <van-button square text="删除" type="danger" class="delete-button" @click='del_item(index)' />
    </template>
  </van-swipe-cell>

  <!-- 结算 -->
  <van-submit-bar :price="cart.total*100" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="cart.isAllChecked" @click='setChecked'>全选</van-checkbox>
</van-submit-bar>
    <!-- 商品卡片 -->

    <!-- // 暂无商品 -->
    <div class="isNotClasssify" v-if='!this.cart.lists.length'>
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596781862763&di=d865c6d57a1140ba2a9948acada8783f&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F31%2F68%2F94573b4e1f9d684.jpg" alt="">
      暂无商品</div>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import CommonHead from '@/components/CommonHead'
import { mapState, mapActions, mapMutations } from 'vuex'
import { checkLogin } from '@/utils'
import { Toast, Dialog } from 'vant'

export default {
  data () {
    return {
      checked: true
    }
  },
  created () {
    this.calc_total()
    // console.log(item)
  },
  methods: {
    checkLogin,
    // 增加商品
    // 删除订单
    del_item (index) {
      Dialog.confirm({
        message: '确认删除吗'
      }).then(() => {
        this.delItem(index)
        this.calc_total()
      }).catch(() => {
        Toast('取消删除')
      })
    },
    addNum (index) {
      this.add_num(index)
      this.calc_total()
    },
    reduceNum (index) {
      this.reduce_num(index)
      this.calc_total()
    },
    checkChange () {
      this.calc_total(this.cart)

      const { lists } = this.cart
      const isAllChecked = lists.every(el => el.isChecked)
      console.log(isAllChecked)
      this.setAllChecked(isAllChecked)
      console.log(this.cart.isAllChecked)
    },
    setChecked () {
      console.log(1223)
      this.set_Check(this.cart.isAllChecked)
      this.setAllChecked(this.cart.isAllChecked)
    },
    onSubmit () {
      console.log(this.cart.lists.filter(el => el.isChecked).length)
      console.log(this.checkLogin())
      const isCheck = this.cart.lists.filter(el => el.isChecked)
      if (this.checkLogin()) {
        if (this.cart.lists.length === 0) {
          this.$dialog.alert({
            closeOnClickOverlay: true,
            title: '温馨提示',
            message: '购物车暂无内容，是否去首页'
          }).then(() => {
            this.$router.push({ path: '/home' })
          })
        } else if (isCheck.length === 0) {
          Toast('请选择相关商品')
        } else {
          console.log(isCheck)
          this.createOrder(isCheck)
          this.$router.push('/order')
        }
      } else {
        this.$dialog.alert({
          closeOnClickOverlay: true,
          title: '温馨提示',
          message: '请登录再查看相关内容'
        }).then(() => {
          this.$router.push({ path: '/mine', query: { path: '/shopping' } })
        })
        // this.$toast('请登录')
        console.log(this.$route)
      }
    },
    ...mapActions(['calc_total']),
    ...mapMutations(['add_num', 'reduce_num', 'setAllChecked', 'set_Check', 'createOrder', 'delItem'])
  },
  computed: {
    ...mapState(['cart'])
  },
  components: {
    Tabbar,
    CommonHead
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.css" ;
.main-detail{
  // background-color: rgba(246,246,246,.5);
  // min-height: 667px;
  .item{
    position: relative;
    padding-left: 30px;
    .van-checkbox{
      z-index: 3;
      position: absolute;
      // top: 25%;
      top: 25%;
      margin-top: 10px;
      left: 0;
      z-index: 2;
    }
    .van-card{
    margin: 0 0 10px 0;
    .van-card__desc{
      color: red;
    }
  }
  }
  .van-swipe-cell__right{
    button{
      height: 100%;
    }
  }
  .van-submit-bar{
    position: fixed;
    bottom: 50px;
  }
}
  .isNotClasssify{
    font-size: 20px;
    color: #ccc;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 30%;
    img{
      width: 50%;
      height: 50%;
      margin: 0 auto;
      opacity: .1;
    }
  }
</style>
