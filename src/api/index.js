import request from '../utils/request'

// 获取模版的接口
export function getTemplate(query) {
    return request({
        url: 'api/draw/template',
        method: 'get',
        params: query
    })
}

// 登陆验证的接口
export function verifyUserLogin(data) {
    return request({
        url: 'api/smartio/user/login',
        method: 'post',
        data: data || {}
    })
}