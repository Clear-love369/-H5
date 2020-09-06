<template>
  <div class="floors">
    <div class="floors-title">
      <h1>今日爆款</h1>
      <span>
        查看更多
        <van-icon name="arrow" />
      </span>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in faddish" :key="item.id">
          <dl>
            <dd>
              <img :src="item.pic" alt />
              <em>{{ item.tags }}</em>
            </dd>
            <dt>
              <h1 class="price">{{item.minPrice |currency  }}</h1>
              <span>参考价：{{ item.originalPrice | currency }}</span>
            </dt>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../assets/css/swiper-bundle.css'
import Swiper from 'swiper'
import { currency } from '@/utils/filters'
export default {
  props: {
    faddish: {
      type: Array,
      required: true
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    var mySwiper = new Swiper('.swiper-container', {
      freeMode: true,
      freeModeMinimumVelocity: 1
    })
  },
  filters: {
    currency
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.floors {
  // width: 100%;
  padding: 0 23px 6px 23px;
  border-bottom: 10px solid #F8F8F8;
  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h1 {
      font-size: 20px;
      letter-spacing: 10px;
    }
    & span {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #cccccc;
    }
  }
}
.swiper-container {
  margin-top: 10px;
  width: 100%;
  // height: 129px;
  & .swiper-wrapper {
    width: 500px;
    & .swiper-slide {
      margin: 0 0 0 10px;
      width: 90px !important;
      & dl {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        & dd {
          position: relative;
          & img {
            width: 100%;
          }
          & em {
            position: absolute;
            // width: 50px;
            top:0px;
            z-index: 10;
            left:0px;
            font-size: 2px;
            background-color: #FF4A4A;
            color: #fff;
            border-radius: 25%;
            font-style: normal;

          }
        }

        & dt h1 {
          font-size: 12px;
          color: #f66;
        }
        & dt span {
          font-size: 10px;
          color: #cccccc;
        }
      }
    }
  }
}
</style>
