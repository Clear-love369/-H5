<template>
<div class="common-head">
<van-nav-bar
    :title="title"
    left-arrow
    @click-left="onClickLeft"
  />
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.common-head{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
}
</style>
