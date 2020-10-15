/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:43:25
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 09:44:57
 * @Description:
 */
import App from 'App.vue'
import  router  from 'router'
import store from 'store'

import {utils} from 'utils'
import './icons'


import 'assets/scss/index.scss'
Vue.use(VueRouter)
Vue.prototype.$utils=utils

Vue.config.productionTip = false

new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App)
})
