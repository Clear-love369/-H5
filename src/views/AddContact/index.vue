<template>
<div class="main-detail">
  <common-head title="添加联系人" />
  <div class="main">
      <van-address-edit
            :area-list="areaInfo"
            show-postal
            show-set-default
            :area-columns-placeholder="['省', '市', '区']"
            @save="onSave"
        />
  </div>
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Toast } from 'vant'
import CommonHead from '@/components/CommonHead'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    onSave (address) {
      console.log(address)
      address.id = new Date().getTime()
      this.addContact(address)
      this.$toast('添加成功')
      this.$router.go(-1)
    },
    ...mapMutations(['addContact'])
  },
  components: {
    CommonHead
  },
  computed: {
    ...mapState(['areaInfo'])
  }
}
</script>

<style lang="scss" scoped>

</style>
