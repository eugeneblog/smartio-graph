import request from '../utils/request'

// 获取图形缩略图
export function getShapsThumbnail(data) {
    return request({
        url: 'api/shape/thumbnail',
        method: 'POST',
        data: data || {}
    })
}