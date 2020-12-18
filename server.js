// server.js
const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

//跨域配置
const devProxy = {
    '/blog': {
        // target: 'http://yapi.baidu.com/mock/6943/website', // 端口自己配置合适的
        // target: 'http://localhost:9620/blog', // 端口自己配置合适的
        target: 'https://www.jsxming.cn/blog', // 端口自己配置合适的
        pathRewrite: {
            '^/blog': '/'
        },
        changeOrigin: true
    },
}


const port = 3333
const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
})

const handle = app.getRequestHandler()
app.prepare().then(() => {
    const server = express()
    if (dev && devProxy) {
        Object.keys(devProxy).forEach(function (context) {
            server.use(createProxyMiddleware(context, devProxy[context]))
        })
    }

    server.all('*', (req, res) => {
        handle(req, res)
    })

    

    
    server.listen(port, err => {
        if (err) {
            throw err
        }
        // console.log(`> Ready on http://localhost:${port}`)
    })
}).catch(err => {
    console.log('An error occurred, unable to start the server')
})