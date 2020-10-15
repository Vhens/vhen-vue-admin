/*
 * @Author: Vhen
 * @Date: 2020-10-15 12:45:10
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 12:47:12
 * @Description:
 */
const { notEmpty } = require('../utils')

module.exports = {
  description: '生成公共组件',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入公共组件名称：',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: 'style',
          value: 'style',
          checked: true
        }
      ],
      validate(value) {
        if (
          value.indexOf('script') === -1 &&
          value.indexOf('template') === -1
        ) {
          return 'Components require at least a <script> or <template> tag.'
        }
        return true
      }
    }
  ],
  actions: data => {
    const name = '{{name}}'
    const actions = [
      {
        type: 'add',
        path: `src/components/${name}/index.vue`,
        templateFile: 'plop-templates/component/index.hbs',
        data: {
          name: name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style')
        }
      }
    ]

    return actions
  }
}
