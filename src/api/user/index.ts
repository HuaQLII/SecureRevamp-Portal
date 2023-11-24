// 统一管理用户相关的接口
import request from '@/utils/request'
import type {loginForm,loginResult,userInfo} from "/type.ts";

// 统一管理接口

enum UserApi {
    LOGIN_URL = '/user/login', // 登录接口
    GET_USER_INFO_URL = '/user/getInfo', // 获取用户信息接口
}
// 登录接口
// 定义了一个名为"reqLogin"的常量，接收一个名为"data"的参数其类型为"loginForm"，
// 使用"request.post"方法发送一个POST请求，请求的URL为"UserApi.LOGIN_URL"
// 请求的数据为"data"。函数的返回类型为"any"，但是会解析响应，并将其转换为"loginResult"类型
// 可以理解成 方法名 参数类型 Post请求方式 返回值类型 URL
export const reqLogin = (data: loginForm) => request.post<any,loginResult>(UserApi.LOGIN_URL, data);

// 获取用户信息接口
// 定义了一个名为"reqGetUserInfo"的常量。这个常量是一个函数，没有接受任何参数。函数使用"request.get"方法发送一个GET请求，
// 请求的URL为"UserApi.GET_USER_INFO_URL"。函数的返回类型为"any"，但是会解析响应，并将其转换为"userInfo"类型
// 可以理解成 方法名 无参数类型 Get请求方式 返回值类型 URL
export const reqGetUserInfo = () => request.get<any,userInfo>(UserApi.GET_USER_INFO_URL);