module.exports = {  
    css:  { //vue.config.js
        loaderOptions:  {  
            css:  {},
             
            postcss:  {  
                plugins:  [require('postcss-px2rem')({
                    remUnit:  16 // selectorBlackList: ['ivu-']
                }) ]
            } ,
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                modifyVars: {
                    // 直接覆盖变量
                    'action-sheet-max-height': '100%',
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    // hack: `true; @import "your-less-file-path.less";`,
                },
            },
        }
    },
    publicPath: './',
    outputDir: "dist", //打包时生成的生产环境构建文件的目录
    assetsDir: 'public',
}