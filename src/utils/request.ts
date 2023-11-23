// 进行axios的二次封装：统一处理错误，统一处理loading等
import axios from 'axios';
import {ElMessage} from "element-plus";
// 第一步：创建一个axios实例（其他的配置：基础路径、超时时间等）
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径携带API
    timeout: 5000, // 超时时间5s
});

// 第二步：request实例添加请求与相应拦截器
request.interceptors.request.use((config) => {
    // config配置对象，headers请求头，一些公共参数可以在这里设置
    return config;
});
// 第三步：响应拦截器
request.interceptors.response.use((response) => {
    // response响应对象，一些错误信息可以在这里统一处理
    // 成功回调
    // 简化数据
    return response.data;
}, (error) => {
    // 失败回调:处理错误信息
    let message ='';
    switch (error.response.status) {
        case 400:
            message = '请求参数错误';
            break;
        case 401:
            message = '未授权的访问';
            break;
        case 403:
            message = '禁止访问';
            break;
        case 404:
            message = '请求资源不存在';
            break;
        case 500:
            message = '服务器内部错误';
            break;
        case 503:
            message = '服务器正在维护';
            break;
        default:
            message = '未知错误';
            break;
    }
    // 错误提示
    ElMessage({
        type: 'error',
        message,
    })
    return Promise.reject(error);
});

// 第四步：导出request实例对外暴露
export default request;