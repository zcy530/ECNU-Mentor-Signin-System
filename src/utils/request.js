import axios from 'axios';
import { message } from "ant-design-vue";

const request = axios.create({
  baseURL: "http://8.130.86.79:8072", // 填写你的 API 地址
  timeout: 60000, // 超时时间（毫秒）
});

// 添加请求拦截器
request.interceptors.request.use(
  function(config) {

    return config;
  },
  function(error) {

    return Promise.reject(error);
  }
);

// // 添加响应拦截器
// request.interceptors.response.use(
//   function(response) {

//     // 请求解密
//     let r = response.data

//     console.log("请求参数返回===", r)

//     if (r.status === 'success') {
//       return r
//     } else {
//       message.error(r.msg)
//       return Promise.reject(r.msg);
//     }
//   },
//   function(error) {

//     return Promise.reject(error);
//   }
// );

// 封装 get 方法
export function get(url, params) {
  return request.get(url, {
    params,
  });
}

// 封装 post 方法
export function post(url, data) {
  return request.post(url, data);
}

// 封装 post 方法
export function put(url, data) {
  return request.put(url, data);
}
