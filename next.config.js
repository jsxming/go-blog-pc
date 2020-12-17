const withLess = require('@zeit/next-less')

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    ...withLess({
      lessLoaderOptions: {
        javascriptEnabled: true
      }
    }),
    //image内置组件src域名配置
    images: {
      domains: ['easy.media.qingbeijy.cn'],
    },
  }
}