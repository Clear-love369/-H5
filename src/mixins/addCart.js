import { mapMutations, mapState } from 'vuex'
import { isExist } from '../utils'
export default {
  methods: {
    add_cart (item) {
      console.log(item)
      if (!item.num) {
        item.num = 1
      }
      item.isChecked = true

      const exist = isExist(item, this.cart.lists)
      if (!exist) {
        this.addCart(item)
      } else {
        this.$toast('购物车中已存在该商品，请勿重复添加')
      }
    },
    ...mapMutations(['addCart'])
  },
  computed: {
    ...mapState(['cart'])
  }
}
