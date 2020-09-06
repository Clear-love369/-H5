// import { AddressEdit } from 'vant'

export default {

  // 计算总价格
  calcTotal (state, total) {
    state.cart.total = total
  },
  // 添加购物车
  addCart (state, item) {
    state.cart.lists.unshift(item)
  },

  // 增加商品
  add_num (state, index) {
    state.cart.lists[index].num++
    console.log(state.cart.lists[index])
    console.log(state.cart.lists[index].num)
  },

  // 减少商品
  reduce_num (state, index) {
    state.cart.lists[index].num--
    if (state.cart.lists[index].num <= 1) {
      state.cart.lists[index].num = 1
    }
  },
  // 单选改变全选
  setAllChecked (state, allChecked) {
    console.log(allChecked)
    state.isAllChecked = allChecked
    console.log(state.isAllChecked)
  },

  // 全选
  set_Check (state, checked) {
    state.cart.lists.forEach(el => {
      el.isChecked = checked
    })
  },
  // 删除订单
  delItem (state, index) {
    state.cart.lists.splice(index, 1)
  },
  // 新成新的订单
  createOrder (state, items) {
    state.currentOrder.items = items
    state.currentOrder.total = state.cart.total
  },

  // 生成新的联系人
  setOrderContact (state, contact) {
    state.currentOrder.contact = contact
  },
  // 添加联系人列表
  addContact (state, address) {
    // console.log(address)
    /*
    判断 contact是不是默认地址
    如果不是直接增加
    否则将所有的联系人 都变成非默认地址
    */
    if (!address.isDefault) {
      state.contacts.push(address)
    } else {
      // 添加的是默认联系人
      if (state.contacts.length === 0) {
        state.contacts.push(address)
      } else {
        // 都变成非默认地址
        state.contacts.forEach(add => {
          add.isDefault = false
        })
        state.contacts.push(address)
        console.log(address)
      }
    }
  },
  editContact (state, { contact, index }) {
    // 判断地址 将地址 变成默认地址 如果不是直接修改 否则： 判断有没有默认地址，又改成 非默认地址否则改为默认地址
    if (!contact.isDefault) {
      state.contacts[index] = contact
    } else {
      state.contacts.forEach(add => {
        add.isDefault = false
      })
      state.contacts[index] = contact
    }
  }
}
