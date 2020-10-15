<!--
 * @Author: Vhen
 * @Date: 2020-10-13 10:39:52
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 11:00:05
 * @Description:
-->
<template>
  <section class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <breadcrumb class="breadcrumb-container" />
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
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
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
