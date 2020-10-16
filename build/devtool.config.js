/*
 * @Author: Vhen
 * @Date: 2020-10-12 09:17:49
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 17:39:00
 * @Description:
 */
const CUR_ENV = require('./env.config')[process.env.NODE_ENV]
const isProd = CUR_ENV.env === 'production'

module.exports = isProd ? false : '#cheap-module-eval-source-map'
