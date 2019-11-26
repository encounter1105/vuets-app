module.exports = {
  chainWebpack: (config) => {
    // 配置别名
    config.extensions = ['.js', '.ts', '.vue'];
    config.resolve.alias
      .set('@', resolve('src'))
  }, 
  // 反向代理
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 配置跨域
      '/api': {
        target: 'https://vuets-api.herokuapp.com/api/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: app => {}
  }
}