// axios所有请求基础配置信息
import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'development' ? 
'http://localhost:3000/' : 
'http://www.smartio.cc/';

const service = axios.create({
    baseURL: baseURL,
    timeout: 5000
})

export default service