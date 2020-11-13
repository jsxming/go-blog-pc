// next.config.js
const withCSS = require('@zeit/next-css')

const withLess = require('@zeit/next-less')

const path = require('path')
module.exports = {
  ...withLess({
    ...withCSS(),
    lessLoaderOptions: {
      javascriptEnabled: true
    }
    // cssModules: true
  }),
}