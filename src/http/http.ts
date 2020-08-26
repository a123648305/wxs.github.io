import axios from "axios";
const $axios = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "content-type": "application/json"
  }
});
// 添加请求拦截器
$axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
$axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const request = (method: any, url: string, data: any, params: any) => {
  return new Promise((resolve, reject) => {
    $axios
      .request({ method, url, data, params })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export default request;
