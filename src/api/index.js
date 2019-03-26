import request from '../utils/request'

export function getTemplate(query) {
    return request({
        url: 'api/draw/template',
        method: 'get',
        params: query
    })
}