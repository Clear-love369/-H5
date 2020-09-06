import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import vueLazyLoad from 'vue-lazyload'
import loading from '@/Plugins/Loading'
import {
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  NavBar,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Card,
  Checkbox,
  CheckboxGroup,
  SwipeCell,
  Toast,
  SubmitBar,
  Popup,
  Sku,
  Form,
  Field,
  Dialog,
  ContactCard,
  ContactList,
  ContactEdit,
  AddressEdit,
  AddressList,
  Search
} from 'vant'
Vue.use(loading)
// 图片懒加载
Vue.use(vueLazyLoad, {
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596883010105&di=66934f887925c28fc86664302e18bd7c&imgtype=0&src=http%3A%2F%2Fimg.ui.cn%2Fdata%2Ffile%2F4%2F9%2F2%2F2108294.gif'
})
// import axios from 'axios'
Vue.use(Button).use(Tabbar).use(TabbarItem).use(Icon).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(NavBar).use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon).use(Card).use(Checkbox).use(CheckboxGroup).use(SwipeCell).use(Toast).use(SubmitBar).use(Popup).use(Sku).use(Form).use(Field).use(Dialog).use(ContactCard).use(ContactList).use(ContactEdit).use(AddressEdit).use(AddressList).use(Search)
// Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
