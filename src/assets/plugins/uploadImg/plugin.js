/*
 * @Author: Vhen
 * @Date: 2020-08-26 09:51:14
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 13:28:20
 * @Description:
 */
import Vue from 'vue'
import TinymceUpload from 'components/TinymceUploadImg'
;(function () {
  'use strict'

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager')
  var register = function (editor) {
    editor.addCommand('beHeader', function () {})
  }
  var Commands = {
    register: register,
  }

  var register$1 = function (editor) {
    // 内有行级元素 需要加上font-size:0
    editor.ui.registry.addIcon(
      'upload',
      '<div class="iconBox" style="font-size:0" ><svg width="24" height="24"><path d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 100-4 2 2 0 000 4z" fill-rule="nonzero"></path></svg></div>'
    )
    editor.ui.registry.addButton('uploadImg', {
      icon: 'upload',
      tooltip: 'uploadImg',
      onAction: function () {
        uploadEvent(editor)
      },
    })
    editor.ui.registry.addMenuItem('uploadImg', {
      icon: 'upload',
      text: 'uploadImg',
      onAction: function () {
        uploadEvent(editor)
      },
    })
  }
  var Buttons = {
    register: register$1,
  }
  // 图片按钮事件
  let uploadEvent = function (editor) {
    let loader = new Vue({
      render: (h, con) => {
        return h(TinymceUpload, {
          props: {
            panelShow: true,
          },
          on: {
            hidePanel(val) {
              //关闭上传工具弹框
              document.body.removeChild(content.$el)
              content = null
              loader.$destroy()
            },
            successUpload(imgList) {
              //获得上传完成回调
              imgList.forEach((item, key) => {
                if (item != undefined) {
                  editor.focus()
                  let idName = `${new Date().getTime()}-${key}` // 给每个图片都加上一个id 时间戳加索引保证图片id唯一 加上id是为了方便后面操作，例如给插入的图片加上编辑按钮
                  editor.selection.setContent(
                    editor.dom.createHTML('img', {
                      src: item,
                      id: idName,
                    })
                  )
                }
              })
            },
          },
        })
      },
    })

    let content = loader.$mount()
    document.body.appendChild(content.$el)
  }
  function Plugin() {
    global.add('uploadImg', function (editor) {
      Commands.register(editor)
      Buttons.register(editor)
    })
  }
  Plugin()
})()
