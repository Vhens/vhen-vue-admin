/*
 * @Author: Vhen
 * @Date: 2020-10-10 10:53:08
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-10 10:53:23
 * @Description: 环境变量
 */
module.exports = {
  development: {
    env: 'development',
    buildTime: +new Date(),
  },
  production: {
    env: 'production',
    buildTime: +new Date(),
  },
  test: {
    env: 'test',
    buildTime: +new Date(),
  }
}
