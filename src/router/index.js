/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import Vue from "vue";
import VueRouter from "vue-router";
// 导入项目主体组件Main
import Main from "@/views/Main";

// 导入主页组件
// import Home from '../views/Home.vue'
import Create1 from "../views/Create1.vue";
import Create2 from "../views/Create2.vue";
import Create3 from "../views/Create3.vue";
import Create4 from "../views/Create4.vue";
import Create5 from "../views/Create5.vue";
import Create6 from "../views/Create6.vue";
import Create7 from "../views/Create7.vue";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    redirect: "/create1",
    children: [
      // “分析研判”路由配置
      // {
      //     path: '/home',
      //     component: Home
      // },
      // “评价体系中单位生态”路由配置
      {
        path: "/create1",
        component: Create1,
      },
      // “评价体系中政治聚焦”路由配置
      {
        path: "/create2",
        component: Create2,
      },
      // “数据管理”路由配置
      {
        path: "/create3",
        component: Create3,
      },
      // “系统管理”路由配置
      {
        path: "/create4",
        component: Create4,
      },
      // “巡察专项” 路由配置
      {
        path: "/create5",
        component: Create5,
      },
      // “巡察专项” 路由配置
      {
        path: "/create6",
        component: Create6,
      },
      // “巡察专项” 路由配置
      {
        path: "/create7",
        component: Create7,
      },
      // ,
      // 设置路由配置
      // {
      //     path: '/setting',
      //     component: Setting
      // }
    ],
  },
  // {
  //     path: '/about',
  //     name: 'About',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes,
});

// eslint-disable-next-line eol-last
export default router;
