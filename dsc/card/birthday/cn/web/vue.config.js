const webpack = require("webpack");

module.exports = {
    // configureWebpack 是Vue CLI3.0 中用於配置 webpack 插件參數的地方，你在這裡設置，會新建或者覆蓋 webpack 默認配置。
    // webpack ProvidePlugin 的含義是創建一個全局的變量，使這個變量在 webpack 各個模塊內都可以使用。這裡的配置含義是創建 '$'、'jQuery'、'window.jQuery' 三個變量指向 jquery 依賴。
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            })
        ]
    },
    publicPath: '/tw/dsc/card/birthday/cn/web/',
    productionSourceMap: false
}