const isExist = (json, arr, key = 'id') => {
  const res = arr.find(el => json[key] === el[key])
  console.log(res)
  return !!res
}
const checkLogin = () => !!localStorage.getItem('accessToken')
export {
  isExist,
  checkLogin
}
