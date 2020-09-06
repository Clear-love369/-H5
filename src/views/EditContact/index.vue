<template>
  <div>
      <common-head title="修改联系人" />
      <div class="main-detail">
           <van-address-edit
            :area-list="areaInfo"
            show-postal
            show-set-default
            :address-info="addressInfo"
            :area-columns-placeholder="['省', '市', '区']"
            @save="onSave"
        />
      </div>
  </div>
</template>

<script>
import CommonHead from '@/components/CommonHead'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      addressInfo: {}
    }
  },
  created () {
    this.initAddressInfo()
  },
  methods: {
    initAddressInfo () {
      this.addressInfo = this.contacts[parseInt(this.$route.params.index)]
      console.log(this.$route)
    },
    onSave (address) {
      this.editContact({ contact: address, index: parseInt(this.$route.params.index) })

      this.$toast('修改成功')
      this.$router.go(-1)
    },
    ...mapMutations(['editContact'])
  },
  components: {
    CommonHead
  },
  computed: {
    ...mapState(['areaInfo', 'contacts'])
  }
}
</script>

<style lang="scss" scoped>

</style>
