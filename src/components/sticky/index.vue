<!--
 * @Author: Vhen
 * @Date: 2020-10-15 11:49:21
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 12:15:11
 * @Description:
-->
<template>
  <section class="sticky" :style="{ height: height + 'px', zIndex: zIndex }">
    <div
      :class="className"
      :style="{
        top: isSticky ? stickyTop + 'px' : '',
        zIndex: zIndex,
        position: position,
        width: width,
        height: height + 'px',
      }"
    >
      <slot>
        <div>sticky</div>
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    stickyTop: {
      type: Number,
      default: 0,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    className: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      active: false,
      position: "",
      width: undefined,
      height: undefined,
      isSticky: false,
    };
  },
  computed: {},
  components: {},
  methods: {
    sticky() {
      if (this.active) {
        return;
      }
      this.position = "fixed";
      this.active = true;
      this.width = this.width + "px";
      this.isSticky = true;
    },
    handleReset() {
      if (!this.active) {
        return;
      }
      this.reset();
    },
    reset() {
      this.position = "";
      this.width = "auto";
      this.active = false;
      this.isSticky = false;
    },
    handleScroll() {
      const width = this.$el.getBoundingClientRect().width;
      this.width = width || "auto";
      const offsetTop = this.$el.getBoundingClientRect().top;
      if (offsetTop < this.stickyTop) {
        this.sticky();
        return;
      }
      this.handleReset();
    },
    handleResize() {
      if (this.isSticky) {
        this.width = this.$el.getBoundingClientRect().width + "px";
      }
    },
  },
  mounted() {
    this.height = this.$el.getBoundingClientRect().height;
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  watch: {},
  activated() {
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
<style lang='scss' scoped>
.sticky {
  height: 50px;
  line-height: 50px;
  position: relative;
  width: 100%;
  text-align: right;
  padding-right: 20px;
  transition: 600ms ease position;
  background: linear-gradient(
    90deg,
    rgba(32, 182, 249, 1) 0%,
    rgba(32, 182, 249, 1) 0%,
    rgba(33, 120, 241, 1) 100%,
    rgba(33, 120, 241, 1) 100%
  );

  .subtitle {
    font-size: 20px;
    color: #fff;
  }

  &.draft {
    background: #d0d0d0;
  }

  &.deleted {
    background: #d0d0d0;
  }
}
</style>
