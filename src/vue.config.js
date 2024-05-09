let proxyObj = {};
 
proxyObj['/'] = {
  //websocket
  ws: false,
  //目标地址
  target: 'http://82.156.245.74/:5000',
  //发送请求头中host会设置成target
  changeOrigin: true,
  //不重写请求地址
  pathRewrite: {
    '^/': '/'
  }
};
 
// websocket的代理
 
proxyObj['/ws'] = {
  ws: true,
  target: 'http://82.156.245.74/:5000'
};
 
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: proxyObj
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};