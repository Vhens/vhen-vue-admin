/*
 * @Author: Vhen
 * @Date: 2020-10-09 14:54:55
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-16 09:58:02
 * @Description: 基础插件
 */

const path = require('path')
const webpack = require('webpack') //webpack打包工具
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') //构建html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清理构建目录下的文件
const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader 编译vue文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //css分离
const OptimizeCss = require('optimize-css-assets-webpack-plugin') //压缩css
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const EnvConfig = require('./env.config')
const CUR_ENV = EnvConfig[process.env.NODE_ENV] // 全局环境变量
module.exports = [
  new FriendlyErrorsWebpackPlugin(),
  new CleanWebpackPlugin(),
  new webpack.DefinePlugin({
    CUR_ENV: JSON.stringify(CUR_ENV),
  }),
  // 构建html
  new HtmlWebpackPlugin({
    favicon: path.resolve(__dirname, '../public/favicon.ico'),
    filename: 'index.html',
    template: path.resolve(__dirname, '../public/index.html'),
    title: 'Vue',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
    },
  }),
  // new CopyPlugin({
  //   // patterns: [
  //   //   { from: path.resolve(__dirname. '../static'), to: '/' },
  //   // ],
  // }),
  new OptimizeCss({
    cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
    cssProcessorOptions: {
      discardComments: { removeAll: true },
    },
    canPrint: true, //是否将插件信息打印到控制台
  }),
  new webpack.HotModuleReplacementPlugin(), //热模块替换开启
  //vue-loader插件开启
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({
    // 类似 webpackOptions.output里面的配置 可以忽略
    filename: 'css/[name].css',
    chunkFilename: 'css/[id].css',
  }),
  new HtmlWebpackTagsPlugin({
    links: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
    scripts: [
      {
        path: 'https://cdn.jsdelivr.net/npm/vue',
        external: {
          packageName: 'vue',
          variableName: 'Vue',
        },
      },
      {
        path: 'https://unpkg.com/vue-router/dist/vue-router.js',
        external: {
          packageName: 'vue-router',
          variableName: 'VueRouter',
        },
      },
      {
        path: 'https://unpkg.com/element-ui/lib/index.js',
        external: {
          packageName: 'element-ui',
          variableName: 'ELEMENT',
        },
      },
      {
        path: 'https://unpkg.com/vuex@3.5.1/dist/vuex.js',
        external: {
          packageName: 'vuex',
          variableName: 'Vuex ',
        },
      },
      {
        path: 'https://cdn.jsdelivr.net/npm/tinymce@5.5.1/tinymce.min.js',
        external: {
          packageName: 'tinymce',
          variableName: 'tinymce',
        },
      },
      // {
      //   path: 'https://cdn.jsdelivr.net/npm/vue-i18n@8.22.0/dist/vue-i18n.common.min.js',
      //   external: {
      //     packageName: 'vue-i18n',
      //     variableName: 'VueI18n',
      //   },
      // }
    ],
    publicPath: false,
  }),
]

