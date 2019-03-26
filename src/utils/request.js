// axios所有请求基础配置信息
import axios from 'axios'

const service = axios.create({
    timeout: 5000
})

export default service