const path = require('path')
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: 9527,
    open: true,
    proxy: {
      '/zhangmeng': {
        target: 'https://api.it120.cc/zhangmeng',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/zhangmeng': ''
        }
      }
    }
  },
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve('src'))
      .set('@components', path.resolve('src', 'components'))
      .set('@api', path.resolve('src', 'api'))
  }
}
