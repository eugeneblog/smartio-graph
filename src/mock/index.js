import Mock from 'mockjs'
import loginAPI from './user'
import shapeAPI from './shapeList'

// 登陆相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)

// 图形相关
Mock.mock(/\/shape\/thumbnail/, 'post', shapeAPI.getShapesThumbnail)  // 获取缩略图列表