<template>
    <div class="main-detail">
        <common-head title="订单页"/>
        <div class="order-main">
            <!-- 联系人卡片 -->
            <van-contact-card
                :type="cardType"
                :name="currentOrder.contact.name"
                :tel="currentOrder.contact.tel"
                @click ='chooseContact'
                />
        </div>
        <div class="items">
            <van-card
              v-for="item in currentOrder.items"
              :key='item.id'
              :num="item.num"
              :price="item.minPrice"
              :desc="item.tags"
              :title="item.name"
              :thumb="item.pic"
            >
            </van-card>
        </div>
        <h1 class="total">合计：{{currentOrder.total}}RMB</h1>
        <van-button type="primary" block>提交订单</van-button>
    </div>
</template>

<script>
import CommonHead from '@/components/CommonHead'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      cardType: 'add'
    }
  },
  created () {
    this.initContact()
  },
  methods: {
    initContact () {
      // 判断订单的contact 如果已经有了联系人
      if (this.currentOrder.contact.name) {
        this.cardType = 'edit'
        return
      }
      if (this.contacts.length === 0) {
        this.cardType = 'add'
        return
      }
      // 查找 默认联系人 如果没有 去第一个
      this.cartType = 'edit'
      let currentContact = this.contacts.find(contact => contact.isDefault)
      if (!currentContact) {
        currentContact = this.contacts[0]
      }
      this.setOrderContact(currentContact)
    },
    chooseContact () {
      if (this.cardType === 'edit') {
        // 查看所有联系人
        this.$router.push('/addressLists')
      } else {
        // 添加联系人
        this.$router.push('/addContact')
      }
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
@import "../../assets/css/common.css" ;
.van-card__desc{
    color: red;
}
.total{
    text-align: center;
    font-size: 16px;
    margin: 10px 20px;
}
</style>
