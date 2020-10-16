/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:43:25
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-16 17:05:22
 * @Description:
 */
import App from 'App.vue'
import VueI18n from 'vue-i18n'
import  router  from 'router'
import store from 'store'
import { component } from 'components'
import {utils} from 'utils'
import './icons'

import 'assets/scss/index.scss'
Vue.use(VueRouter)
Vue.use(component)
Vue.use(VueI18n)
Vue.prototype.$utils=utils

Vue.config.productionTip = false


const i18n = new VueI18n({ 

   locale: 'zh', // 定义默认语言为中文 

   messages: {   

      'zh': require('assets/languages/zh.json'),   

      'en': require('assets/languages/en.json') 

    }

  });


  //获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

new Vue({
    el:'#app',
    router,
    store,
    i18n,
    render: h => h(App)
})
