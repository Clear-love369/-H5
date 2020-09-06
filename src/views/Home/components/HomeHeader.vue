<template>
  <div class="homeheader">
    <div class="homeheader-left">
      <van-icon size="20" name="apps-o" />
      <span>分类</span>
    </div>
    <div class="homeheader-center" @click="findItem" >
      <van-icon size="20" name="search" />
      <span>搜索商品</span>
    </div>
    <div class="homeheader-right">
      <van-icon size="20" name="shopping-cart-o" />
      <van-icon size="20" name="user-circle-o" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    findItem () {
      this.$emit('findItem')
    }
  }
}
</script>

<style lang="scss" scoped>
.homeheader {
  z-index: 998;
  height: 23px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(157, 179, 201, 0.3);
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 10.5px 15px;
  &-left {
    opacity: 1;
    width: 66px;
    height: 30px;
    border-radius: 15px;
    background-color: rgba(144, 150, 162, 0.5);
    display: flex;
    align-items: center;
    flex-direction: inherit;
    color: #fff;
    justify-content: center;
    font-size: 12px;
  }
  &-center {
    z-index: 999;
    width: 190px;
    height: 32px;
    background: rgba(255, 255, 255, 1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: inherit;
    margin-left: 10px;
    color: #ccc;
    .van-icon {
      margin: 0 5px 0 10px;
    }
  }
  &-right {
    width: 63px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    .van-icon {
      margin: 0 5px;
      color: #fff;
    }
  }
}
</style>
