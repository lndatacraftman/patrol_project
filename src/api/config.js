import axios from "axios";
// 定义后端地址
const SERVER_BASE = "http://192.168.101.4:8080";

// 创建一个http连接
let link = axios.create();

export { SERVER_BASE, link };
