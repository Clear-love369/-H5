<template>
  <div>
      <common-head title="搜索" />
      <div class="main-detail">
          <van-search
            v-model.trim="value"
            show-action
            label="商品"
            placeholder="请输入搜索关键词"
            @search="onSearch"
            >
            <template #action>
                <div @click="onSearch">搜索</div>
            </template>
          </van-search>
          <h4>搜索记录:</h4>
          <ul class="search-his">
            <li v-for='item in history' @click='Search_his(item)' :key='item'>
              {{item}}
            </li>
          </ul>
          <div class="not-his" v-if='!history.length'>暂无搜索记录</div>
      </div>
  </div>
</template>

<script>
import CommonHead from '@/components/CommonHead'
import { Toast } from 'vant'
export default {
  data () {
    return {
      value: '',
      history: localStorage.getItem('his') ? JSON.parse(localStorage.getItem('his')) : []
    }
  },
  methods: {
    Search_his (item) {
      this.$router.push({
        path: '/searchResult',
        query: {
          word: item
        }
      })
    },
    onSearch () {
      if (this.value === '') {
        Toast('不能为空')
        return
      }
      const his = localStorage.getItem('his') ? JSON.parse(localStorage.getItem('his')) : []
      const index = his.indexOf(this.value)
      // eslint-disable-next-line eqeqeq
      if (index != -1) {
        his.splice(index, 1)
      }
      his.unshift(this.value)
      if (his.length > 5) {
        his.pop()
      }
      localStorage.setItem('his', JSON.stringify(his))

      this.$router.push({
        path: '/searchResult',
        query: {
          word: this.value
        }
      })
    }
  },
  components: {
    CommonHead
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.css" ;
.van-search--show-action{
  background-color: rgb(248, 244, 244);
  .van-search__content{
    background-color: #fff;
  }
}
h4{
  color: #ccc;
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 0;
  margin-left: 5px;
}
.search-his{
  li{
    float: left;
    margin: 10px;
    font-size: 12px;
    color: #fff;
    background-color: #ccc;
    border-radius: 6px;
    padding: 0 3px;
  }
}
.not-his{
  text-align: center;
  color: #ccc;
  font-size: 14px;
}
</style>
