/*
 * @Author: Vhen
 * @Date: 2020-10-09 14:55:35
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-10 09:38:48
 * @Description: 基础服务
 */

const utils = require('./webpack.utils')

module.exports = {
  host: utils.getIp(),
  hot:true, //开启热更新
  inline: true, // 文件修改后实时刷新
  port: 8078,
  historyApiFallback: true, //不跳转
  proxy: {
    '*': {
      // target: 'http://www.wsxht.com',
      //  target: 'http://192.168.1.143:9009', //XWG
      //  target: 'http://192.168.1.232:6060', //WHL
      // target: 'http://192.168.1.183:6060', //LFF
      changeOrigin: true,
      secure: false,
    },
  },
}