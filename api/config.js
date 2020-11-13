import axios from 'axios';
import Cookies from 'js-cookie';

let serverToken = "";
export function setServerToken(token) {
    serverToken = token
}

// 删除请求参数中无效的参数
function deleteInvalidParams(params) {
    for (const key in params) {
        const value = params[key];
        if (typeof value === 'string' && !value.trim().length) {
            delete params[key];
        } else if (Array.isArray(value) && !value.length) {
            delete params[key];
        }
    }
    return params;
}


const $http = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:9620/api" : 'https://www.jsxming.cn/api',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

// 添加请求拦截器
$http.interceptors.request.use(
    (config) => {
        const token = serverToken || Cookies.get('token');
        if (token) {
            config.headers['whale-auth'] = 'bearer ' + token
        }
        if (config.method === 'post') {
            config.data = deleteInvalidParams(config.data || {});
        } else {
            config.params = deleteInvalidParams(config.params || {});
        }
        return config;
    },
);

// 添加响应拦截器
$http.interceptors.response.use(
    (response) => {
        console.log(response.data);
        return response.data;
    },
    (error) => {
        return Promise.reject(error.response);
    }
);


export default $http;