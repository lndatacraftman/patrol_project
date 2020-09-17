import { SERVER_BASE, link } from "@/api/config";
export default {
  // 定义接口，向后端发送一个get请求，请求地址是127.0.0.1:8080/api/query_info
  // 并返回收到的结果
  getData() {
    return link.get(SERVER_BASE + "/odsQuestionCsix/list");
  },
};
