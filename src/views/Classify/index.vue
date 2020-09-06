<template>
  <div>
    <common-head title="分类页"/>
    <div class="cate-main">
      <div class="cate-left">
        <div :class="['cate',{active:index===num}]" v-for="(item, index) in cates" :key='item.id' @click="changeCates(index)">
          {{ item.name }}
        </div>
      </div>
      <div class="cate-right">
        <div class="notItem" v-if="!items.length">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596781862763&di=d865c6d57a1140ba2a9948acada8783f&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F31%2F68%2F94573b4e1f9d684.jpg" alt="">
          暂无商品</div>
        <div class="item" v-for='item in items' :key='item.id'>
            <img :src="item.pic" alt="">
            <em>[{{ item.tags }}]</em>
            <b>￥{{ item.minPrice | currenty}}</b>
            <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import CommonHead from '@/components/CommonHead'
import { fetchClassify, fetchFaddish } from '@api'
import currenty from '@/utils/filters'
export default {
  name: 'Cates',
  data () {
    return {
      cates: [],
      num: 0,
      items: []
    }
  },
  filters: {
    currenty
  },
  created () {
    this.fetchCates()
  },
  methods: {
    changeCates (index) {
      this.num = index
      this.fetchItems()
    },
    fetchCates () {
      fetchClassify().then(res => {
        this.cates = res.data.data
        this.fetchItems()
      })
    },
    fetchItems () {
      this.items = []
      fetchFaddish({ categoryId: this.cates[this.num].id }).then(res => {
        if (res.data.code === 0) {
          this.items = res.data.data
        }
      })
    }
  },
  components: {
    Tabbar,
    CommonHead
  }
}
</script>

<style lang="scss" scoped>
.cate-main{
  padding: 46px 0 50px 0;

  padding-left: 80px;
  // background: rgb(245,244,244);
  display: flex;
  .cate-left{
    position: fixed;
    top: 46px;
    left: 0;
    width: 80px;
    background-color: #fff;
    height: 100%;
    border-right: 1px solid #ccc;
    .cate{
      line-height: 40px;
      font-size: 14px;
      color: #333;
      text-align: center;
      &.active{
        border-left: 2px solid red;
        background-color: rgb(207,197,197);
        color: rgb(246, 246, 244);
      }
    }
  }
  .cate-right{
    flex: 1;
    background-color: #fff;
    // padding-bottom: 50px;
    // padding-left: 10%;
    .notItem{
      margin-top: 50%;
      display: flex;
      flex-direction: column;
      text-align: center;
      color: #ccc;
      img{
      width: 200px;
      margin-left: 20px;
      opacity: .1;
      }
    }
    .item{
      margin: 10px 0 20px 20px;
      img{
        display: block;
      }
      em{
        font-size: 12px;
        color: red;
        font-style: normal;
        font-weight: 600;
      }
      p{
        font-size: 12px;
        width: 80%;
        margin: 0;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      b{
        font-size: 20px;
        float: right;
        margin-right: 20px;
        color: red;
      }
    }
  }
}
</style>
