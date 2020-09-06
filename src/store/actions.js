export default {
  calc_total ({ state, commit }) {
    let total = 0
    const { lists } = state.cart
    const checkedItems = lists.filter(item => item.isChecked)

    checkedItems.forEach(item => {
      total += item.num * item.minPrice
    })
    total = parseFloat(total.toFixed(2))
    commit('calcTotal', total)
  }

}
