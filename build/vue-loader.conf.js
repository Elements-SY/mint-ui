'use strict'
//主要用来处理css-loader和style-loader
//css-loader和style-loader的区别是干嘛用的呢？
//css-loader能够处理通过外联引入的CSS样式表。例如CSS2的link引入样式表，CSS3的@import引入样式表。总之只要是外联引入的都交给它处理。
//style-loader是将处理好的CSS插入到页面的style标签中。
//less-loader 是将less文件编译成css
//sass-loader 是将sass文件编译成css
const utils = require('./utils')
const config = require('../config')//引入配置文件夹里的主文件
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
