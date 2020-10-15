/*
 * @Author: Vhen
 * @Date: 2020-10-09 16:19:01
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-09 16:19:12
 * @Description: 
 */
function gitIp () {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' &&
        !alias.internal) {
        return alias.address
      }
    }
  }
}
module.exports= {
  getIp:gitIp
}