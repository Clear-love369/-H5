<template>
<div>
<common-head title='商品列表' />
    <div class="item-nav">
      <div :class="['sale',{active:order_by.sale!==-1}]" @click ='bySile' >
        <span>销量</span>
        <div :class="['angle-down',{active:order_by.sale===1}]"></div>
        <div :class="['angle-up',{active:order_by.sale===0}]"></div>
      </div>
      <div :class="['price',{active:order_by.price!==-1}]" @click='byPrice'>
        <span>价格</span>
        <div :class="['angle-down',{active:order_by.price===0}]"></div>
        <div :class="['angle-up',{active:order_by.price===1}]"></div>
      </div>
    </div>
    <div class="item-main">
      <div class="item" v-for='item in floors' :key='item.id' @click="enterDetail(item.id)">
        <img :src="item.pic" alt="">
        <h5>
          {{ item.name }}
        </h5>
        <em>{{ item.tags }}</em>
        <div class="price">
          <span class="discount-price">
            {{ item.minPrice | currency}}
          </span>
          <span class="original-price">
            {{ item.originalPrice |currency }}
          </span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import CommonHead from '@components/CommonHead'
import { currency } from '@/utils/filters'
import { fetchFaddish } from '@/api'
// import axios from 'axios'
export default {
  data () {
    return {
      floors: [],
      orderBy: 'ordersDown',
      order_by: {
        sale: 0, // sale 0 默认值是销量降序 1 是销量升序 -1（价格排序）
        price: -1 // price 0 价格升序 1 价格降序 -1 销量排序
      }
    }
  },
  created () {
    this.fetchFaddishData()
    // console.log(this.$route.params.cateId)
  },
  methods: {
    enterDetail (id) {
      this.$router.push(`/detail/${id}`)
    },
    bySile () {
      this.order_by.price = -1
      if (this.order_by.sale === -1) {
        this.order_by.sale = 0
        this.orderBy = 'ordersDown'
        // 销量降序
      } else if (this.order_by.sale === 0) {
        this.order_by.sale = 1
        this.orderBy = 'ordersUp'
      } else {
        this.order_by.sale = 0
        this.orderBy = 'ordersDown'
      }
      this.fetchFaddishData()
    },
    byPrice () {
      this.order_by.sale = -1
      if (this.order_by.price === -1) {
        this.order_by.price = 0
        this.orderBy = 'priceUp'
        // 销量降序
      } else if (this.order_by.price === 0) {
        this.order_by.price = 1
        this.orderBy = 'priceDown'
      } else {
        this.order_by.price = 0
        this.orderBy = 'priceUp'
      }
      this.fetchFaddishData()
    },
    fetchFaddishData () {
      const params = {
        orderBy: this.orderBy,
        categoryId: this.$route.params.cateId
      }
      fetchFaddish(params).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.floors = res.data.data
        }
      })
    }
  },
  components: {
    CommonHead
  },
  filters: {
    currency
  }
}
</script>

<style lang="scss" scoped>
.item-nav{
  z-index: 999;
  position: fixed;
  left: 0;
  top: 46px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size:14px;
  color:#666;
  background: #f2f2f2;
  .sale{
    &.active{
      color:#f66;
    }
    position: relative;
    .angle-down{
      width:0;
      height:0;
      border:6px solid transparent;
      border-bottom-color:#aaa;
      position: absolute;
      right:-18px;
      top:-4px;
      &.active{
         border-bottom-color:#f66;
      }
    }
    .angle-up{
      width:0;
      height:0;
      border:6px solid transparent;
      border-top-color:#aaa;
      position: absolute;
      right:-18px;
      bottom:-6px;
      &.active{
         border-top-color:#f66;
      }
    }
  }
  .price{
    position: relative;
    &.active{
         color:#f66;
      }
    .angle-down{
      width:0;
      height:0;
      border:6px solid transparent;
      border-bottom-color:#aaa;
      position: absolute;
      right:-18px;
      top:-4px;
      &.active{
         border-bottom-color:#f66;
      }
    }
    .angle-up{
      width:0;
      height:0;
      border:6px solid transparent;
      border-top-color:#aaa;
      position: absolute;
      right:-18px;
      bottom:-6px;
      &.active{
         border-top-color:#f66;
      }
    }
  }
}

.item-main{
    display:flex;
     margin-top:86px;
    flex-wrap:wrap;
    .item{
      width:50%;
      padding:0 10px;
      box-sizing: border-box;
      position: relative;
      margin-bottom: 5px;
      img{
        width:100%;
        // position: relative;
      }
      h5{
        width: 100%;
        margin: 20px 0 10px 0;
        font-size: 14px;
        font-weight: normal;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      em{
        font-weight: normal;
        font-style: normal;
        font-size: 8px;
        position: absolute;
        bottom: 35%;
        color: white;
        padding: 0 5px;
        background-color: red;
        // border: 1px solid red;
        border-radius: 6px;
      }
      &-title{
        font-size:14px;
        color:#333;
        line-height:20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .price{
        height:30px;
        display: flex;
        align-items: center;
        .discount-price{
          font-size:24px;
          color:#f66;
        }
        .original-price{
          font-size:16px;
          margin: 0 10px;
          color:#999;
          text-decoration: line-through;
        }
      }
    }
}
</style>
