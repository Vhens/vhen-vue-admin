<!--
 * @Author: Vhen
 * @Date: 2020-10-13 11:20:57
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-14 12:42:46
 * @Description:
-->
<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    isExternal() {
      return this.$utils.validate.isExternal(this.to);
    },
    type() {
      if (this.isExternal) {
        return "a";
      }
      return "router-link";
    },
  },
  components: {},
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: "_blank",
          rel: "noopener",
        };
      }
      return {
        to: to,
      };
    },
  },
  mounted() {},
  watch: {},
};
</script>
<style lang='scss' scoped>
</style>
