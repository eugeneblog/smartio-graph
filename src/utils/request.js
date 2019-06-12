// axios所有请求基础配置信息
import axios from 'axios'
import { message } from 'antd'
const baseURL = process.env.NODE_ENV === 'development' ? 
'http://localhost:3000/' : 
'http://www.smartio.cc/';

const service = axios.create({
    baseURL: baseURL,
    timeout: 5000
})

service.interceptors.request.use(
    response => response,
    error => {
        console.log('err' + error) // for debug
        message.error(error.message)
        return Promise.reject(error)
    }
)

export default service