<!--
 * @Author: Vhen
 * @Date: 2020-10-13 11:16:50
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-14 13:24:23
 * @Description:
-->

<script>
export default {
  functional: true, // 声明为函数式组件
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  render(createElement, context) {
    const { icon, title } = context.props;
    const vnodes = [];
    if (icon) {
      if (icon.includes("el-icon")) {
        vnodes.push(
          createElement("i", {
            attrs: {
              "class": `${icon} sub-el-icon`,
            },
          })
        );
      } else {
        vnodes.push(
          createElement("svg-icon", {
            attrs: {
              "icon-class": icon,
            },
          })
        );
      }
    }
    if (title) {
      vnodes.push(
        createElement(
          "span",
          {
            slot: "title",
          },
          title
        )
      );
    }
    return vnodes;
  },
};
</script>
<style lang='scss' scoped>
.sub-el-icon {
  display: inline-block;
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
