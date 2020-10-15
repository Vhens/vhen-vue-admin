/*
 * @Author: Vhen
 * @Date: 2020-10-12 12:16:13
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-13 14:34:36
 * @Description: 优化代码
 */


const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: {
          pure_funcs: ['console.log'],
        },
      },
    }),
  ],
  //  多页面优化
  // splitChunks: {
  //   cacheGroups: {
  //     commons: {
  //       // 页面之间的公用代码
  //       chunks: 'initial',
  //       minChunks: 2,
  //       maxInitialRequests: 5, // The default limit is too small to showcase the effect
  //       minSize: 0, // This is example is too small to create commons chunks
  //     },
  //     vendor: {
  //       // 基础类库
  //       chunks: 'initial',
  //       test: /node_modules/,
  //       name: 'vendor',
  //       priority: 10,
  //       enforce: true,
  //     },
  //   },
  // },
}
