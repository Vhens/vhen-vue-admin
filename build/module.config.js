/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:04:16
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 09:40:34
 * @Description: 处理项目中的不同类型的模块。
 */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css分离
module.exports = {
  rules: [
    {
      test: /\.vue$/,
      loader: "vue-loader"
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.resolve(__dirname, "../src"), // 限定范围
      loader: "babel-loader?cacheDirectory" // 缓存loader执行结果
    },
    {
      test: /\.(sa|sc|le|c)ss$/,
      use: [
        "vue-style-loader",
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: true
          }
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 2
          }
        },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              config: path.resolve(__dirname, "../postcss.config.js")
            }
          }
        },
        "sass-loader"
      ]
    },

    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: "url-loader",
      exclude: [path.resolve(__dirname, "../src/icons")],
      options: {
        limit: 10000,
        name: "[name].[ext]?[hash]"
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: "url-loader"
    },
    {
      test: /\.svg$/,
      loader: "svg-sprite-loader",
      exclude: /^node_modules$/,
      include: [path.resolve(__dirname, "../src/icons")],
      options: {
        symbolId: "icon-[name]"
        // extract: false
      }
    }
  ]
};
