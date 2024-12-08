const path = require("path");
module.exports = {
    resolve: {
        // 拼接文件后缀
        extensions: ['.js', '.vue', ".jsx", ".ts", ".tsx", ".cjs", ".mjs", ".json"],
        // 配置别名
        alias: {
            utils: path.resolve(__dirname, '../src/utils'),
        }
    },
    module: {
        rules: [
            // 自定义配置规则一——处理我们的CSS
            {
                // 对于我们处理 CSS 的时候就需要使用得到我们的 CSS-loader
                test: /\.css$/,  // 匹配 CSS 文件
                // use: ['style-loader', 'css-loader'],  // 指定我们解析需要使用的 loader
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        // 指定我们的 postcss-loader 是实现编译的配置项
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer'),
                                ]
                            }
                        }
                    },
                    { loader: 'postcss-loader' },
                ]
            },

            // 定义规则二 —— 匹配我们的 less文件
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        // 指定我们的 postcss-loader 是实现编译的配置项
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer'),
                                ]
                            }
                        }
                    },
                    { loader: 'less-loader' },
                ]
            },

            // 定义规则三 —— 解析 sass
            {
                test: /\.sass$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        // 指定我们的 postcss-loader 是实现编译的配置项
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer'),
                                ]
                            }
                        }
                    },
                    { loader: 'sass-loader' },
                ]
            },

            // 开始实现我们的配置处理我们的 图片资源的方式
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                // type: "asset/resource"  // 指定我们的文件类型是资源类型
                // type: "asset/inline"
                type: "asset",
                // 指定打包解析后的文件名
                generator: {
                    // 占位符： name 原本资源名称 | ext 扩展名的资源名称 | hash 值唯一标识符的保留, :number 设置截取位数
                    filename: 'images/[name]_[hash:6].[ext]',
                },
                // 自定义解析类型文件规则
                parser: {
                    dataUrlCondition: {
                        maxSize: 60 * 1024,  // 60kb
                        // <60kb 的文件就使用我们的 asset/inline模式打包，否则就是以 asset/resource模式打包
                    }
                }
            },

            // 开始自定义规则来转化我们的 JS 代码了
            {
                test: /\.m?js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                "@babel/plugin-transform-arrow-functions",
                                "@babel/plugin-transform-block-scoping",
                            ],
                        }
                    },
                ]
            },

            // 配置 vue 文件的解析规则
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }

        ]
    },
}