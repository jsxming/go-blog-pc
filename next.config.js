// next.config.js
const withLess = require('@zeit/next-less')

const path = require('path')
module.exports = {
  ...withLess({
    lessLoaderOptions: {
      javascriptEnabled: true
    }
    // cssModules: true
  }),
}