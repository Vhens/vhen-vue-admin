<!--
 * @Author: Vhen
 * @Date: 2020-08-26 09:19:26
 * @LastEditTime: 2020-10-15 13:47:16
 * @LastEditors: Vhen
 * @Description: In User Settings Edit
 * @FilePath: \lvqi-admin\src\components\TinymceUploadImg\index.vue
-->
<template>
  <div class="modal-upload" v-if="panelShow">
    <el-dialog title="图片上传" :visible.sync="dialogShow" width="30%" center>
      <div class="upload-box">
        <el-upload class="upload-demo" drag :show-file-list="false" accept=".jpg, .jpeg, .png" action="666" :on-preview="handlePreview" :on-remove="handleRemove" :http-request="uploadImg">
          <img v-if="imageUrl" :src="imageUrl" class="img" />
          <i v-else class="el-icon-upload"></i>

          <div class="el-upload__text">
            拖曳文件或者
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">支持上传图片格式：.jpg, .jpeg, .png</div>
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogShow = false">取消</el-button>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import store from 'store'
export default {
  props: {
    panelShow: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {
      dialogShow: false,
      imageUrl: '',
    }
  },
  computed: {},
  components: {},
  methods: {
    handlePreview() {},
    handleRemove() {},
    async beforeUpload(content) {
      console.log(store)
      let params = await store.dispatch('getAllOss').then((res) => {
        return res.data
      })
      params.file = content.file
      let data = await store.dispatch('setParams', params)
      let url = params.host
      return store.dispatch('upload', { url, data }).then((res) => {
        return res
      })
    },
    uploadImg(content) {
      this.pageLoading = true
      this.beforeUpload(content).then((res) => {
        this.imageUrl = store.state.constant.aliPath + res.data.filename
        console.log(this.imageUrl)
        this.pageLoading = false
      })
    },
    onSubmit() {
      this.$emit('successUpload', [this.imageUrl])
      this.$emit('hidePanel', false)
      this.dialogShow = false
    },
  },
  mounted() {},
  watch: {
    panelShow: {
      handler(newValue, oldValue) {
        if (newValue && !oldValue) {
          this.dialogShow = true
          // setTimeout(() => {
          //   // 模拟上传成功
          //   this.$emit("successUpload", [
          //     "http://placehold.it/100x150/eeee00/000000",
          //     "http://placehold.it/200x350",
          //   ]);
          //   this.$emit("hidePanel", false);
          // }, 1500);
        }
      },
      immediate: true,
    },
  },
}
</script>
<style lang="less">
.modal-upload {
  .upload-box {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  .upload-demo .el-upload {
    width: 100% !important;
    height: 100%;
  }
  .upload-demo .el-upload-dragger {
    width: 100%;
    height: 100%;
  }
}
</style>
