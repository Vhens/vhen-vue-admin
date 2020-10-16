/*
 * @Author: Vhen
 * @Date: 2020-10-13 09:27:40
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-16 10:28:55
 * @Description:
 */
let sidebarStatus = sessionStorage.getItem("sidebarStatus");

const types = {
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
  CLOSE_SIDEBAR: "CLOSE_SIDEBAR",
  TOGGLE_DEVICE: "TOGGLE_DEVICE"
};
const state = {
  sidebar: {
    opened: sidebarStatus ? !!+sidebarStatus : true,
    withoutAnimation: false
  },
  device: "desktop", // 桌面
  language: 'zh'
};

const mutations = {
  [types.TOGGLE_SIDEBAR](state) {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      sessionStorage.setItem("sidebarStatus", 1);
    } else {
      sessionStorage.setItem("sidebarStatus", 0);
    }
  },
  [types.CLOSE_SIDEBAR](state, withoutAnimation) {
    sessionStorage.setItem("sidebarStatus", 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  [types.TOGGLE_DEVICE](state, device) {
    state.device = device;
  }
};

const actions = {
  toggleSideBar({ commit }) {
    commit(types.TOGGLE_SIDEBAR);
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit(types.CLOSE_SIDEBAR, withoutAnimation);
  },
  toggleDevice({ commit }, device) {
    commit("TOGGLE_DEVICE", device);
  }
};

const getters = {
  sidebar: state => state.sidebar,
  language: state=> state.language
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
