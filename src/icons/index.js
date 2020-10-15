/*
 * @Author: Vhen
 * @Date: 2020-10-13 14:41:33
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-13 14:57:27
 * @Description:
 */

import SvgIcon from 'components/svg-icon'

Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
