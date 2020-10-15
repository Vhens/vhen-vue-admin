/*
 * @Author: Vhen
 * @Date: 2020-10-15 12:45:20
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 12:45:39
 * @Description:
 */
exports.notEmpty = name => {
  return v => {
    if (!v || v.trim === '') {
      return `${name} is required`
    } else {
      return true
    }
  }
}
