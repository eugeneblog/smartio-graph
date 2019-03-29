const querystring = require('querystring')
// app.js 写服务端入口函数
const serverHandle = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    // 获取前端发送的请求地址
    const url = req.url
    req.path = url.split('?')[0]
    // 解析query
    req.query = querystring.parse(url.aplit('?')[1])

}

module.exports = serverHandle