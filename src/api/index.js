import request from '../utils/request'
const fetchBanner = (params = {}) => request.get('banner/list', { params })

// 请求分类接口
const fetchClassify = (params = {}) => request.get('shop/goods/category/all', { params })

// 活动
const fetchActivitys = (params = {}) => request.post('friendly-partner/list', { params })

// 商品列表接口
const fetchFaddish = (params = {}) => request.post('shop/goods/list', params)

// 通过id获取
const fetchItemById = (id) => request.get('shop/goods/detail?id=' + id)
export {
  fetchBanner,
  fetchFaddish,
  fetchActivitys,
  fetchClassify,
  fetchItemById
}
