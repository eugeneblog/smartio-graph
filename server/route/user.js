const handleUserRoute = (req, res) => {
    const method = req.method

    // 登陆
    if (method === 'POST' && req.path === '/api/smartio/user/login') {
        const { username, password } = req.body
        return {
            message: 'ok'
        }
    }
}

module.exports = handleUserRoute