const path = require('path')
module.exports = {
    mode: 'development', //默认值 production
    entry: './src/index.js', //指定打包执行流程入口文件从何开始
    output: {
        filename: 'dist.js', //指定输出的打包目录名称
        path: path.resolve(__dirname, 'dist') //resolve可以指定多级目录，指定最终打包到dist目录下
    }
}