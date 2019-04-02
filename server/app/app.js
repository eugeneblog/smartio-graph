const querystring = require('querystring')
const handleUserRouter = require('../route/user')
// app.js 写服务端入口函数
const serverHandle = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    // 获取前端发送的请求地址
    const url = req.url
    req.path = url.split('?')[0]
    // 解析query
    req.query = querystring.parse(url.aplit('?')[1])

    const userData = handleUserRouter(req, res)
    if (userData) {
        res.end(
            JSON.stringify(userData)
        )
        return
    }
}

module.exports = serverHandle