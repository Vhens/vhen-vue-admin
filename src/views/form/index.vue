<!--
 * @Author: Vhen
 * @Date: 2020-10-14 12:35:37
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 16:59:02
 * @Description:
-->
<template>
  <div class="form">
    <v-sticky :z-index="10" class-name="sticky darft">
      <el-button style="margin-left: 10px" type="success"> 发布 </el-button>
      <el-button> 编辑 </el-button>
    </v-sticky>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {},
  watch: {},
};
</script>
<style lang='scss' scoped>
.form {
  padding: -20px;
}
</style>
