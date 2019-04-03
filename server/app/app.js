const querystring = require('querystring')
const handleUserRouter = require('../route/user')
// promise 处理post数据
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        // 如果不是POST请求，直接resolve一个空对象
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.stringify(postData)
            )
        })
    })
    return promise
}
// app.js 写服务端入口函数
const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')
    const url = req.url
    // get请求携带参数时需要将路径和参数区分开 ，通过 ？拆分为两部分
    req.path = url.split('?')[0]
    // 参数部分通过 querystring 转换为对象格式
    req.query = querystring.parse(url.split('?')[1])

    // 解析POST数据
    getPostData(req).then(postData => {
        req.body = postData
        // 处理user路由
        const userResult = handleUserRouter(req, res)
        if (userResult) {
            res.end(
                JSON.stringify(userResult)
            )
        }
    })
    
    res.end()
}

module.exports = serverHandle