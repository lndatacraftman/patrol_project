/* 网络请求配置文件 */

import axios from "axios";
import ViewUI from "view-design";
import QS from "qs"; // 引入qs模块，用来序列化post类型的数据
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const serviceHandler = () => {
  console.log("serviceHandler...");
  let baseUrlForService = "http://192.168.101.4:8080"; // 服务器地址
  let Timeout = 50000; // 请求超时时间
  // console.log('baseurl is :', baseUrlForService)
  const service = axios.create({
    baseURL: baseUrlForService,
    timeout: Timeout,
  });
  requestIntercept(service);
  responseIntercept(service);
  return service;
};

// http request 拦截器
function requestIntercept(service) {
  service.interceptors.request.use(
    (config) => {
      console.log("request interceptor...");
      // console.log(config)
      if (localStorage.Authorization) {
        // token 存在则添加 token
        // config.headers.Authorization = 'Bearer ' + localStorage.Authorization
        config.headers.Authorization = localStorage.Authorization;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
}

// http response 拦截器
function responseIntercept(service) {
  service.interceptors.response.use(
    (response) => {
      console.log("response interceptor...");
      // console.log(response)
      if (response.status !== 200) {
        ViewUI.Message.error(response.statusText);
      }
      return response;
    },
    (error) => {
      // 超时进行提示
      if (error.message.includes("timeout") || error.message.includes("504")) {
        ViewUI.Message.error("请求超时，请稍后重试");
      }
      if (error.message.includes("500")) {
        ViewUI.message.error("服务暂时不可用，请稍后重试");
      }
      return Promise.reject(error);
    }
  );
}

// *** 给后端发送数据-get *** //
export function deliverPlugins(url, data) {
  console.log("deliverPlugins...");
  console.log("url:" + url);
  console.log("data:" + data);
  return serviceHandler().get(url, {
    params: data,
  });
}

// *** 给后端发送数据-post *** //
/*
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function deliverPlugins_post(url, params) {
  console.log("deliverPlugins_post...");
  console.log("url:" + url);
  console.log("params:" + params);
  let util = require("util");
  console.log(
    "serviceHandler().post(url, QS.stringify(params)): " +
      util.inspect(serviceHandler().post(url, QS.stringify(params)), {
        depth: null,
      })
  );
  return serviceHandler().post(url, QS.stringify(params));
}
