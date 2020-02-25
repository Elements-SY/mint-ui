'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {//开发环境变量
  NODE_ENV: '"development"'
})
