/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:05:04
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-13 13:27:00
 * @Description:
 */
const BasePluginConfig = require('./base.plugin.config')
const EntryConfig = require('./entry.config')
const ModuleConfig = require('./module.config')
const ServerConfig = require('./server.config')
const OutputConfig = require('./output.config')
const ResolveConfig = require('./resolve.config')
const EnvConfig = require('./env.config')
const ExtemalsConfig = require('./externals.config')
const DevToolConfig = require('./devtool.config')
const OptimizationConfig=require('./optimization.config')

const CUR_ENV = EnvConfig[process.env.NODE_ENV] // 全局环境变量
module.exports = {
  mode: CUR_ENV.env === 'production' ? 'production' : 'development',
  entry: EntryConfig,
  output: OutputConfig,
  module: ModuleConfig,
  resolve: ResolveConfig,
  devServer: ServerConfig,
  devtool: DevToolConfig,
  plugins: BasePluginConfig,
  externals: ExtemalsConfig,
  optimization: OptimizationConfig,
  //警告 webpack 的性能提示
  performance: {
    hints: 'warning',
    //入口起点的最大体积
    maxEntrypointSize: 50000000,
    //生成文件的最大体积
    maxAssetSize: 30000000,
    //只给出 js 文件的性能提示
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.js')
    },
  },
}
