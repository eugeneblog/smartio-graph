const handleUserRoute = (req, res) => {
    const method = req.method
    // 登陆
    if (method === 'POST' && req.path === '/api/smartio/user/login') {
        return {
            message: 'ok'
        }
    }
}

module.exports = handleUserRoute