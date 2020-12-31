import axios from 'axios'

// 对axios的返回值做处理
// 响应拦截器
axios.interceptors.response.use(ret=>{
    return ret.data||ret
})

export default axios