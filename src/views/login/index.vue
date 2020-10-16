<!--
 * @Author: Vhen
 * @Date: 2020-10-16 12:41:05
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-16 13:52:56
 * @Description:
-->
<template>
  <section class="login-container">
    <div class="stars">
      <div
        class="star"
        v-for="(item, index) in starsCount"
        :key="index"
        ref="star"
      ></div>
    </div>
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">{{$store.state.setting.title}}</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入用户密码"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
        >登录</el-button
      >
    </el-form>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      starsCount: 800, //数量
      distance: 600, //间距
      loginForm: {
        username: "admin",
        password: "111111",
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入用户密码", trigger: "blur" }],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
    };
  },
  computed: {},
  components: {},
  methods: {
    initStar() {
      let starArr = this.$refs.star;
      starArr.forEach((item) => {
        var speed = 0.2 + Math.random() * 1;
        var distance = this.distance + Math.random() * 300;
        item.style.transformOrigin = `0 0 ${distance}px`;
        item.style.transform = `translate3d(0,0,-${distance}px) rotateY(${
          Math.random() * 360
        }deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`;
      });
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // this.loading = true
          this.$router.push("/home");
        } else {
          console.error("error submit!!");
          return false;
        }
      });
    },
  },
  mounted() {
    this.initStar();
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  background: radial-gradient(ellipse at bottom, #2d2a4b 0%, #2d3a4b 100%);
  overflow: hidden;
  filter: drop-shadow(0 0 10px white);
  .stars {
    transform: perspective(500px);
    transform-style: preserve-3d;
    position: absolute;
    perspective-origin: 50% 100%;
    left: 50%;
    animation: rotate 90s infinite linear;
    bottom: -256px;
    .star {
      width: 2px;
      height: 2px;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      backface-visibility: hidden;
    }
    @keyframes rotate {
      0% {
        transform: perspective(400px) rotateZ(30deg) rotateX(-40deg) rotateY(0);
      }
      100% {
        transform: perspective(400px) rotateZ(30deg) rotateX(-40deg)
          rotateY(-360deg);
      }
    }
  }

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>


<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
