const path = require('path')
module.exports = {
    mode: 'development', //默认值 production
    entry: './src/index.js', //指定打包执行流程入口文件从何开始
    output: {
        filename: 'dist.js', //指定输出的打包目录名称
        path: path.resolve(__dirname, 'dist') //resolve可以指定多级目录，指定最终打包到dist目录下
    },
    module: {
        rules: [ //这里就是你需要去匹配什么样的loader
            {
                test: /\.css$/i, //通过正则去匹配所有以 css 结尾的文件 （css预处理器同理）
                use: ["style-loader", "css-loader"], //使用css相关的loader，这些loader只在编译时参与
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i, //webpack有原生支持图片的处理器，无需另外添加loader
                type: 'asset/resource'
            }
        ]
    }
}