/*
 * @Author: Vhen
 * @Date: 2020-10-13 09:27:40
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 10:45:21
 * @Description:
 */
const types = {
  CHANGE_SETTING: "CHANGE_SETTING"
};
const state = {
  title: "Vue Admin Template",

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true
};

const mutations = {
  [types.CHANGE_SETTING](state, { key, value }) {
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  }
};

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
