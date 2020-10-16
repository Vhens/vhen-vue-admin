<!--
 * @Author: Vhen
 * @Date: 2020-10-16 10:48:55
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-16 11:25:29
 * @Description:
-->
<template>
  <section class="upload-image">
    <el-button
      :style="{ background: color, borderColor: color }"
      icon="el-icon-picture-outline"
      size="mini"
      type="primary"
      @click="dialogVisible = true"
    >
      上传图片
    </el-button>
    <el-dialog :visible.sync="dialogVisible">
      <el-upload
        drag
        multiple
        :file-list="fileList"
        :show-file-list="true"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        action="https://jsonplaceholder.typicode.com/posts/"
        class="editor-slide-upload"
        list-type="picture-card"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false"> 取消 </el-button>
        <el-button type="primary" @click="handleSubmit"> 确认 </el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#1890ff",
    },
  },
  data() {
    return {
      dialogVisible: false,
      listObj: {},
      fileList: [],
    };
  },
  computed: {},
  components: {},
  methods: {
    checkAllSuccess() {
      return Object.keys(this.listObj).every(
        (item) => this.listObj[item].hasSuccess
      );
    },
    handleSubmit() {
      const arr = Object.keys(this.listObj).map((v) => this.listObj[v]);
      if (!this.checkAllSuccess()) {
        this.$message(
          "Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!"
        );
        return;
      }
      this.$emit("successCBK", arr);
      this.listObj = {};
      this.fileList = [];
      this.dialogVisible = false;
    },
    handleSuccess(response, file) {
      const uid = file.uid;
      const objKeyArr = Object.keys(this.listObj);
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          this.listObj[objKeyArr[i]].url = response.files.file;
          this.listObj[objKeyArr[i]].hasSuccess = true;
          return;
        }
      }
    },
    handleRemove(file) {
      const uid = file.uid;
      const objKeyArr = Object.keys(this.listObj);
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]];
          return;
        }
      }
    },
    beforeUpload(file) {
      const _self = this;
      const _URL = window.URL || window.webkitURL;
      const fileName = file.uid;
      this.listObj[fileName] = {};
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = _URL.createObjectURL(file);
        img.onload = function () {
          _self.listObj[fileName] = {
            hasSuccess: false,
            uid: file.uid,
            width: this.width,
            height: this.height,
          };
        };
        resolve(true);
      });
    },
  },
  mounted() {},
  watch: {},
};
</script>
<style lang='scss' scoped>
.upload-image {
  padding-top: 2px;
  padding-right: 8px;
}
.editor-slide-upload {
  ::v-deep .el-upload-dragger, ::v-deep .el-upload--picture-card {
    width: 100%;
    height: 200px;
  }
  ::v-deep .el-upload__text {
    transform: translateY(-100px);
  }
}
.dialog-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
