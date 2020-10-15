/*
 * @Author: Vhen
 * @Date: 2020-10-15 12:43:30
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 12:50:17
 * @Description:
 */
// 自定义要生成的组件模板
const pageGenerator = require('./plop-templates/view/prompt')
const componentGenerator = require('./plop-templates/component/prompt')
const storeGenerator = require('./plop-templates/store/prompt.js')

module.exports = function(plop) {
  plop.setGenerator('view', pageGenerator)
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('store', storeGenerator)
}
