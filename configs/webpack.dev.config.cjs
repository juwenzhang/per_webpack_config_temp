const path = require('path');
const { VueLoaderPlugin } = require("vue-loader/dist/index")  // 引入解析 vue 的依赖工具
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")
const { merge } = require("webpack-merge")
const comm_config = require("./webpack.comm.config")

module.exports = merge(comm_config, {
    mode: 'development',
    entry: './src/index.js',  // webpack 打包的入口

    output: {
        path: path.resolve(__dirname, './my_dev_dist'),
        filename: 'demo_loader.bundle.js',
        clean: true,
    },

    // 使用对应的插件设置
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "juwenzhang_webpack_demo"
        }),
        new DefinePlugin({
            // 这里就是书写的是一些全局变量
            BASE_URL: "'./'",
            juwenzhang: "'juwenzhang'"
        }),
    ],

    // 由于现在的浏览器都需要使用 https 协议才可以访问
    devServer: {
        hot: true,  // 默认开启的，开启热模块替换
        port: 8000,  // 端口修改
        open: true,  // 配置启动服务时是否打开浏览器
        compress: true,  // 设置我们的文件是否压缩
    }
})