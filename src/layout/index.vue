<!--
 * @Author: Vhen
 * @Date: 2020-10-12 17:34:58
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-14 12:26:31
 * @Description:
-->
<template>
  <section :class="classObj" class="app-container">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" />
    <section class="main-container">
      <section :class="{ 'fixed-header': fixedHeader }">
        <navbar />
      </section>
      <app-main />
    </section>
  </section>
</template>

<script>
import { appMain, navbar, sidebar } from "./components";
import ResizeMixin from "mixin/ResizeHandler";
export default {
  mixins: [ResizeMixin],
  props: {},
  data() {
    return {};
  },
  computed: {
    fixedHeader() {
      return this.$store.state.setting.fixedHeader;
    },
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
  components: { appMain, navbar, sidebar },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  },
  mounted() {},
  watch: {},
};
</script>
<style lang='scss' scoped>
 @import "assets/scss/mixin.scss";
 @import "assets/scss/variables.scss";
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
  @include clearfix;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }
  .hideSidebar .fixed-header {
    width: calc(100% - 54px);
  }
  .mobile .fixed-header {
    width: 100%;
  }
}
</style>
