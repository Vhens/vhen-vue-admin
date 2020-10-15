<!--
 * @Author: Vhen
 * @Date: 2020-10-13 10:39:52
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 13:02:50
 * @Description:
-->
<template>
  <section class="navbar">
    <section class="item">
      <hamburger
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />
      <breadcrumb class="breadcrumb-container" />
    </section>
    <section class="item">
         <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </section>
  </section>
</template>

<script>
import hamburger from "components/hamburger";
import breadcrumb from "components/breadcrumb";
const { mapGetters } = Vuex;
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("app", ["sidebar"]),
  },
  components: { hamburger, breadcrumb },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
  },
  mounted() {},
  watch: {},
};
</script>
<style lang='scss' scoped>
.navbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .item{
    flex: 1;
    &:last-child{
      text-align: right;
      padding-right: 20px;
    }
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>
