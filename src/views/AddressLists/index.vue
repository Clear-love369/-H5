<template>
    <div>
        <common-head title="所有联系人"/>
        <div class="main-detail">
            <van-address-list
            v-model="chosenAddressId"
            :list="contacts"
            :disabled-list="disabledList"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
            @select="choseAddress"
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
      chosenAddressId: '-1'
    }
  },
  created () {
  },
  methods: {
    choseAddress (address) {
      this.setOrderContact(address)
      this.$router.go(-1)
    },
    initChosenAddressId () {
    // 初始化 默认选中联系人是（订单中的联系人id）
      this.chosenAddressId = this.currentOrder.contact.id
    },
    onAdd () {
      this.$router.push('/addcontact')
    },
    onEdit (item, index) {
      console.log(item, index)
      this.$router.push(`/editcontact/${index}`)
    },
    ...mapMutations(['setOrderContact'])
  },
  components: {
    CommonHead
  },
  computed: {
    ...mapState(['currentOrder', 'contacts'])
  }
}
</script>
<style lang="scss" scoped>

</style>
