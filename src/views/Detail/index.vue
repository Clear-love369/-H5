<template>
  <div>
    <common-head title="商品详情" />
    <div class="main-detail" v-if="detail.basicInfo">
      <van-swipe class="my-swipe" :autoplay="3000">
        <van-swipe-item v-for="pic in detail.pics" :key="pic.id">
          <img class="banner" :src="pic.pic" alt />
        </van-swipe-item>
      </van-swipe>
      <h1>{{ detail.basicInfo.minPrice | currency }}</h1>
      <p>
        <em>{{ detail.basicInfo.tags }}</em>
        {{ detail.basicInfo.name }}
      </p>
      <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
        <van-card
          :num="sku.num"
          :price="sku.minPrice"
          :desc="sku.tags"
          :title="sku.name"
          :thumb="sku.pic"
        />
        <template>
          <div class="vanButton">
            <van-button size="small" plain type='defaulr' @click='addNum'>+</van-button>
            <span> {{ sku.num }}</span>
            <van-button size="small" plain type='defaulr' @click='reduceNum'>-</van-button>
          </div>
        </template>
        <van-button type="primary" size="large" @click="act">确认</van-button>
      </van-popup>
      <div class="min-about" v-html="detail.content"></div>
      <van-goods-action>
        <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="首页" dot @click="$router.push('/home')" />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" :badge="cart.lists.length?cart.lists.length:''" @click="$router.push('/shopping')"/>
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button type="warning" text="加入购物车" @click='showPopCart' />
        <van-goods-action-button type="danger" text="立即购买" @click='showPopBuyNow' />
      </van-goods-action>
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { currency } from '@/utils/filters'
import { fetchItemById } from '@api'
import CommonHead from '@components/CommonHead'
import { mapState } from 'vuex'
import addCart from '../../mixins/addCart'
export default {
  data () {
    return {
      detail: {

      },
      show: false,
      sku: {

      },
      btn: 0
    }
  },
  mixins: [addCart],
  created () {
    this.fetchItem()
  },
  methods: {
    act () {
      if (this.btn) {
        alert('立即购买')
        // this.add_cart(this.sku)
        // this.$router.push('/order')
      } else {
        this.add_cart(this.sku)
        this.show = false
      }
    },
    // 点击添加购物车
    showPopCart () {
      this.show = true
      this.btn = 0
    },
    // 点击立即购买
    showPopBuyNow () {
      this.show = true
      this.btn = 1
    },
    addNum () {
      this.sku.num++
    },
    reduceNum () {
      this.sku.num--
      if (this.sku.num <= 1) {
        this.sku.num = 1
      }
    },
    fetchItem () {
      console.log(this.$route.params)
      fetchItemById(this.$route.params.cateId).then((res) => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.detail = res.data.data
          this.sku = {
            ...this.detail.basicInfo,
            num: 1,
            isChecked: true
          }
        }
      })
    }
  },
  filters: {
    currency
  },
  components: {
    CommonHead
  },
  computed: {
    ...mapState(['cart']),
    content () {
      return this.detail.content.replace(/<img/g, "<img style='vertical-align:bottom;width:100%';align-item:center;")
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/reset.css";
@import "../../assets/css/common.css";
.main-detail {
  border-bottom: 10px solid hsl(0, 18%, 93%);
  .van-card__desc{
    color: red;
    // border: 1px solid;
    // width: 50px;
    border-radius: 10px;
    // background-color: #fff;
    font-weight: 600;
  }
  .vanButton{
    display: flex;
    align-items: center;
    padding-left: 40%;
    button{
      border: 0;
      height: 100%;
      font-size: 32px;
    }
  }
  .van-button--primary{
    margin-top: 20px;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 320px;
  text-align: center;
  & img {
    width: 100%;
    vertical-align: middle;
  }
}
h1 {
  font-size: 32px;
  color: red;
  font-weight: 600;
  margin-left: 5px;
}
p {
  margin-bottom: 20px;
  // width: 100%;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 600;
  em {
    font-size: 10px;
    border: 1px solid red;
    color: red;
    border-radius: 25%;
  }
}
</style>
