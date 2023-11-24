// 登录接口需要携带参数的类型
export interface loginForm {
    mobile: string;// 手机号
    password: string;// 密码
}

interface dataType {
    token: string;// token
}

// 登录接口返回的数据类型
export interface loginResult {
    code: number;// 状态码
    data: dataType;// 数据
}


// 服务器返回的用户信息类型
export interface userInfo {
    id: number;// 用户id
    name: string;// 用户名
    mobile: string;// 手机号
    token: string;// token
    avatar: string;// 头像
    introduction: string;// 介绍
    roles: string[];// 角色
}