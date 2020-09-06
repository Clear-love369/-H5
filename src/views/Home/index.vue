<template>
  <div>
    <HomeHeader @findItem ='findItem' />
    <div class="main">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in arr" :key="item.id">
          <img :src="item.picUrl" alt />
        </van-swipe-item>
      </van-swipe>
      <div class="activity" v-if='activitys'>
        <img :src="activitys[0].picUrl" alt />
      </div>
      <van-grid :column-num="5" icon-size="30px" :border="false" v-if="classify">
        <van-grid-item :icon="item.icon" :text="item.name" v-for="item in classify" :key="item.id" @click='enterList(item.id)'></van-grid-item>
      </van-grid>
      <div class="activityNew" v-if='activitys'>
        <img :src="activitys[1].picUrl" alt />
      </div>
      <Floors :faddish='faddish' />
      <Likes :faddish='faddish' @clickItem='enterclick' @add_cart='add_cart' />
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import HomeHeader from './components/HomeHeader'
import Floors from './components/Floors'
import Likes from './components/Likes'
import { fetchBanner, fetchActivitys, fetchFaddish, fetchClassify } from '@api'
import addCart from '../../mixins/addCart'
export default {
  data () {
    return {
      arr: [],
      activitys: [],
      classify: [],
      faddish: []
      // categoryId: 154572
    }
  },
  // eslint-disable-next-line no-undef
  mixins: [addCart],
  created () {
    this.fetchBannerData()
    this.fetchActivityData()
    this.fetchClassifyData()
    this.fetchFaddishData()
  },
  methods: {
    findItem () {
      this.$router.push('/search')
    },
    fetchBannerData () {
      fetchBanner().then(res => {
        if (res.data.code === 0) {
          this.arr = res.data.data
        }
      })
    },
    fetchActivityData () {
      fetchActivitys().then(res => {
        if (res.data.code === 0) {
          this.activitys = res.data.data
        }
      })
    },
    fetchClassifyData () {
      fetchClassify().then(res => {
        if (res.data.code === 0) {
          this.classify = res.data.data
        }
      })
    },
    fetchFaddishData () {
      fetchFaddish().then(res => {
        if (res.data.code === 0) {
          this.faddish = res.data.data
        }
      })
    },
    enterList (cateId) {
      console.log(cateId)
      this.$router.push(`/itemList/${cateId}`)
    },
    enterclick ({ index, id }) {
      console.log(id)
      this.$router.push(`/detail/${id}`)
    }
  },
  components: {
    Tabbar,
    HomeHeader,
    Floors,
    Likes
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/common.css" ;
.my-swipe .van-swipe-item {
  width: 320px;
  height: 140px;
  text-align: center;
  & img {
    width: 100%;
    height: 100%;
  }
}
.activity {
  width: 100%;
  height: 98px;
  & img {
    width: 100%;
    height: 100%;
  }
}
.van-grid {
  padding: 10px 15px;
}
.activityNew {
  padding:0 10px 5px 10px;
  & img {
    width: 100%;
    vertical-align: bottom;
  }
}
</style>
