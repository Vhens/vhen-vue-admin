<!--
 * @Author: Vhen
 * @Date: 2020-10-13 09:56:52
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 12:24:31
 * @Description:
-->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
      <router-view :key="key" />
      <!-- </keep-alive> -->
    </transition>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    cachedViews() {},
    key() {
      return this.$route.path;
    },
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
};
</script>
<style lang='scss' scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
