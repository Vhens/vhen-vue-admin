/*
 * @Author: Vhen
 * @Date: 2020-10-13 09:23:16
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-13 09:25:33
 * @Description: 注册模块
 */


Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules
})

export default store
