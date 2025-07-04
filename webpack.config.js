const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const terserPlugin = require('terser-webpack-plugin')
module.exports = {
    mode: 'development', //默认值 production
    devtool: 'inline-source-map', //方便查看打包后的源代码
    entry: './src/index.js', //指定打包执行流程入口文件从何开始
    output: {
        filename: 'dist.js', //指定输出的打包目录名称
        path: path.resolve(__dirname, 'dist') //resolve可以指定多级目录，指定最终打包到dist目录下
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src') //在项目多级引用时指定替换的相对路径目录
        }
    },
    optimization: {
        minimize: true, //指定是否需要压缩
        minimizer: [ //指定用什么工具来压缩源代码
            new terserPlugin()
        ]
    },
    devServer: { //这是一个webpack内置开发服务器，允许更新代码自动热更新打包程序（需要在packagejson中配置scripts）
        static: './dist' //指定更新的目录
    },
    plugins: [
        //它是一个构造函数，可以传递一些参数
        new htmlWebpackPlugin({
            title: '博客列表', 
        })
    ],
    module: {
        rules: [ //这里就是你需要去匹配什么样的loader
            {
                test: /\.css$/i, //通过正则去匹配所有以 css 结尾的文件 （css预处理器同理）
                use: ["style-loader", "css-loader"], //识别在转换时使用哪些相关的loader，这些loader只在webpack编译时参与
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i, //webpack有原生支持图片的处理器，无需另外添加loader
                type: 'asset/resource'
            },
            {
                test: /\.js$/, //通过babel loader编译兼容大部分浏览器可解析的js代码
                exclude: /node_modules/, //忽略node_mudules 目录 因为我们不需要转义node_modules下的代码
                use: { //指定你通过什么loader转义
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    }
}