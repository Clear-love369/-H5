<template>
  <div class="likes">
    <h1 class="likes-title">猜你喜欢</h1>
    <div class="likes-content">
      <div class="likes-content_item" v-for="(item,index) in faddish" :key="item.id" @click='clickItem(index,item.id)'>
        <van-icon name="plus" @click.stop='add_cart(item)'/>
        <img v-lazy="item.pic" alt />
        <p>{{ item.name }}</p>
        <span>
          {{item.originalPrice | currency}}
          <em>[{{ item.tags }}]</em>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { currency } from '@/utils/filters'
export default {
  props: {
    faddish: {
      type: Array,
      required: true
    }
  },
  methods: {
    clickItem (index, id) {
      this.$emit('clickItem', { index, id })
    },
    add_cart (item) {
      console.log(item)
      this.$emit('add_cart', item)
    }
  },
  filters: {
    currency
  }
}
</script>

<style lang="scss" scoped>
.likes {
  margin-bottom: 50px;
  &-title {
    font-size: 14px;
    text-align: center;
  }
  &-content {
    padding: 0 10px;
    // width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &_item {
      width: 45%;
      margin-bottom: 10px;
      margin-left: 5px;
      position: relative;
      .van-icon{
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 100%;
        color: rgb(201, 199, 199);
        z-index: 2;
      }
      & img {
        width: 100%;
      }
      p {
        font-size: 10px;
        width: 100%;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      span {
          font-size: 14px;
            font-weight: 700;
          color: #000;
          position: relative;
          display: flex;
          align-items: center;
          em{
              position: absolute;
            //   top: 0;
              display: block;
            //   width: 50px;
              font-size: 10px;
              right: 20%;
              font-style:normal;
              color: red;
              font-weight: 700;
          }
      }
    }
  }
}
</style>
