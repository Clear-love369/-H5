/*
    定义loading插件
    插件 给Vue.prototype定义两个方法
    $showLoading()
    $hideLoading()
*/
import LoadingComponent from './Loading.vue'

const loading = {}

loading.install = (Vue) => {
  const LoadingClass = Vue.extend(LoadingComponent)
  const tpl = new LoadingClass()
  document.body.appendChild(tpl.$mount().$el)
  Vue.prototype.$showLoading = () => {
    tpl.show = true
  }
  Vue.prototype.$hideLoading = () => {
    tpl.show = false
  }
}

export default loading
