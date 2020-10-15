<!--
 * @Author: Vhen
 * @Date: 2020-10-10 13:58:28
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-13 15:59:15
 * @Description:
-->
<template>
  <div class="home">
    home
{{message}}
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {},
  data() {
    return {
      message: '撒地方建设的福建师范'
    };
  },
  computed: {},
  components: {},
  methods: {},
  mounted(){
  },
  watch: {}
}
</script>
<style lang='scss' scoped>
.home{
  font-size: 18px;
  color: red;
}
</style>
