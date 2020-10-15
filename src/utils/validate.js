/*
 * @Author: Vhen
 * @Date: 2020-10-13 11:22:41
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-13 11:24:14
 * @Description:
 */
const validate = {};
/**
 * @param {string} path
 * @returns {Boolean}
 */
validate.isExternal = path => {
  return /^(https?:|mailto:|tel:)/.test(path);
};

export default validate;
