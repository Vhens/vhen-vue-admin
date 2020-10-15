<!--
 * @Author: Vhen
 * @Date: 2020-10-13 11:04:28
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 09:44:06
 * @Description:
-->
<template>
  <section class="sidebar" :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="false"
        active-text-color="#409EFF"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route of routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </section>
</template>

<script>
const { mapGetters } = Vuex;

import sidebarItem from './sidebar-item'
import logo from './logo'
import variablesScss  from 'assets/scss/variables.scss'

export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("app", ["sidebar"]),
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      // console.log('variablesScss ',variablesScss );
      return variablesScss
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    showLogo() {
      return this.$store.state.setting.sidebarLogo
    },
  },
  components: { sidebarItem, logo },
  methods: {},
  mounted() {},
  watch: {},
};
</script>
<style lang='scss' scoped>
</style>
