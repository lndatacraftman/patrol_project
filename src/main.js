import Vue from "vue";
import App from "./App.vue";
// 导入路由配置文件
import router from "./router";
import store from "./store";
import "./plugins/iview.js";
import iView from "iview";
// import "normalize.css/normalize.css";
// import "nprogress/nprogress.css";
import echarts from "echarts";
import "echarts-gl";
import BaiduMap from "vue-baidu-map";
import "./assets/font/font.css";
import "../src/assets/js/china.js";
// 导入全局样式文件
import "./assets/styles/global.css";
// 导入网络请求配置文件
import "./network/request.js";

Vue.prototype.$echarts = echarts;

Vue.use(BaiduMap, {
  ak: "taPk7RdYYGIlKFvZNCPIPadb28Rz3Kwt",
});

Vue.config.productionTip = false;
Vue.use(iView);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
