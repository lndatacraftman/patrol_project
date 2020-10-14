<!-- 市直子组件 -->

<template>
  <div id="citystraight">
    <div class="content">
      <!-- 上面导航条框架 -->
      <div class="menu_content" v-show="!menu_hide">
        <!-- 导航条 -->
        <div class="menu">
          <div class="menu_title">
            <span style="color: #2bfaff">市直</span>
          </div>
        </div>
      </div>
      <!-- 上面被隐藏的导航条框架 -->
      <div class="menu_content" v-show="menu_hide">
        <!-- 导航条 -->
        <div class="menu">
          <div class="menu_body">
            <div class="menu_title2">
              <span>市直</span>
            </div>
            <div class="menu_title2">
              <span style="font-size: 1.1rem">>></span>
            </div>
            <div class="menu_title4">
              <span>{{ selectedData.name }}</span>
            </div>
            <div class="menu_title2">
              <span style="font-size: 1.1rem">>></span>
            </div>
            <div class="menu_title3">
              <span
                style="
                  color: #2bfaff;
                  font-family: 思源黑体normal;
                  font-size: 1.416666rem;
                "
                >{{ selectedData2 }}</span
              >
            </div>
            <!-- 返回按钮 -->
            <Button type="text" @click="return_click()" ghost>
              <img
                src="../../assets/images/返回浅.png"
                style="width: 1.5rem; height: 1.1rem"
              />
              返回</Button
            >
          </div>
        </div>
      </div>
      <!-- 中间筛选框的框架 -->
      <div class="times_select">
        <!-- 筛选框1整体框架 -->
        <div class="selectbox">
          <!-- 筛选框前面的标题 -->
          <div class="select_title">
            <span>届次</span>
          </div>
          <!-- 筛选框 -->
          <div class="select_input">
            <Select v-model="model" size="small" @on-change="selectSession">
              <Option
                v-for="item in periodList"
                :value="item.value1"
                :key="item.value1"
                selected
                >{{ item.label1 }}
              </Option>
            </Select>
          </div>
        </div>
        <!-- 筛选框2整体框架 -->
        <div class="selectbox">
          <!-- 筛选框前面的标题 -->
          <div class="select_title">
            <span>轮次</span>
          </div>
          <!-- 筛选框 -->
          <div class="select_input">
            <Select v-model="model1" size="small" @on-change="selectTurn">
              <Option
                v-for="item in turnsList"
                :value="item.value2"
                :key="item.value2"
                >{{ item.label2 }}
              </Option>
            </Select>
          </div>
        </div>
      </div>
      <!-- 下面图块框架 -->
      <div class="info_table" id="main"></div>
      <!-- 区县按钮框架 -->
      <div class="county_button" v-show="!menu_hide">
        <div class="county_background" @click="county_show_hidden()">
          <img src="../../assets/images/区县.png" />
          <div class="county_span"><span>区县</span></div>
        </div>
      </div>
      <!-- 被隐藏的子组件评分历程子组件 -->
      <!-- <gradeCourse v-show="grade_hidden"></gradeCourse> -->
    </div>
  </div>
</template>
<script>
import EventBus from "@/assets/js/EventBus";
import Vue from "vue";
import echarts from "echarts";
import axios from "axios";
import { log } from "util";
// import gradeCourse from "@/views/Create4_children/gradeCourse"; // 引入综评曲线子组件
Vue.prototype.$echarts = echarts;

export default {
  name: "Echarts",
  props: {},
  data() {
    return {
      grade_hidden: false,
      menu_hide: false,
      itemStyles: [
        {
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              1,
              [
                {
                  offset: 0,
                  color: "#23203B",
                },
                {
                  offset: 1,
                  color: "#43396D",
                },
              ],
              false
            ),
          },
          label: {
            color: "#9065FD",
          }, // 紫色
        },
        {
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              1,
              [
                {
                  offset: 0,
                  color: "#463428", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#584133", // 100% 处的颜色
                },
              ],
              false
            ),
          },
          label: {
            color: "#D19A71",
          }, // 土色
        },
        {
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              1,
              [
                {
                  offset: 0,
                  color: "#051B32", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#05508A", // 100% 处的颜色
                },
              ],
              false
            ),
          },
          label: {
            color: "#0092FF",
          }, //天蓝
        },
        {
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              1,
              [
                {
                  offset: 0,
                  color: "#2C3E42", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#4E6170", // 100% 处的颜色
                },
              ],
              false
            ),
          },
          label: {
            color: "#7DA7BD",
          }, // 灰蓝色
        },
        {
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              1,
              [
                {
                  offset: 0,
                  color: "#502630", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#72353D", // 100% 处的颜色
                },
              ],
              false
            ),
          },
          label: {
            color: "#D06168",
          }, // 红色
        },
        {
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              1,
              [
                {
                  offset: 0,
                  color: "#4A450E", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#625A12", // 100% 处的颜色
                },
              ],
              false
            ),
          },
          label: {
            color: "#ADA55C",
          }, //黄
        },
        {
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              1,
              [
                {
                  offset: 0,
                  color: "#051B32",
                },
                {
                  offset: 1,
                  color: "#184777",
                },
              ],
              false
            ),
          },
          label: {
            color: "#2A7ACC",
          }, //深蓝
        },
        {
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              1,
              [
                {
                  offset: 0,
                  color: "#294421", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#3F6B30", // 100% 处的颜色
                },
              ],
              false
            ),
          },
          label: {
            color: "#77B05F",
          }, //绿色
        },
      ],
      // 届次筛选框里面的值
      periodList: [],
      // 轮次筛选框里面的值
      turnsList: [],
      model: "第十三届",
      model1: "第六轮",
      testData: [],
      selectedData: {},
      selectedData2: "",
    };
  },
  methods: {
    // 返回按钮的点击事件
    return_click() {
      const _this = this;
      // 父子组件之间的传值
      _this.$emit("handlecancel", false);
      this.menu_hide = !this.menu_hide;
      axios({
        url: "http://192.168.101.91:8080/dwUnitLevelInfoCsix/listTypesCount",
      }).then((res) => {
        _this.initCharts(res);
        console.log(res.data);
      });
      // alert(params.name);
    },
    selectSession(val) {
      console.log(val);
    },
    selectTurn(val) {
      console.log(val);
    },
    // 区县的点击事件
    county_show_hidden() {
      EventBus.$emit("showFlag1", true);
    },
    getLevelOption() {
      return [
        {
          itemStyle: {
            normal: {
              borderWidth: 0,
              // gapWidth: 5 // 间距
            },
          },
        },
        {
          itemStyle: {
            normal: {
              // gapWidth: 1
            },
          },
        },
        {
          colorSaturation: [0.35, 0.5],
          itemStyle: {
            normal: {
              // gapWidth: 1,
              borderColorSaturation: 0.6,
            },
          },
        },
      ];
    },
    colorMappingChange(value) {
      var levelOption = this.getLevelOption(value);
      var myChart = Vue.prototype.$echarts.init(
        document.getElementById("main")
      );
      myChart.setOption({
        series: [
          {
            levels: levelOption,
          },
        ],
      });
    },
    // 封装好的方法，解析后台传的值进行渲染echarts
    initCharts(res3) {
      this.testData = [];
      let index = 0;
      for (const key in res3.data) {
        if (index >= this.itemStyles.length) {
          index = 0;
        }
        this.testData.push({
          name: key,
          value: res3.data[key],
          itemStyle: this.itemStyles[index].itemStyle,
          label: this.itemStyles[index].label,
        });
        index++;
      }

      this.myEcharts();
    },
    myEcharts() {
      const _this = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = Vue.prototype.$echarts.init(
        document.getElementById("main")
      );
      myChart.off("click"); //禁止一直发送请求，页面爆闪
      var formatUtil = Vue.prototype.$echarts.format;
      // echarts图的点击事件
      myChart.on("click", function (params) {
        axios({
          url:
            "http://192.168.101.91:8080/dwUnitLevelInfoCsix/listUnit?type=" +
            params.data.name,
        }).then((res) => {
          console.log(res.data);
          if (params.data.unitId) {
            _this.$emit("onSelectedUnitId", params.data.unitId);
            _this.$emit("onSelectedUnitName", params.data.name);
            _this.$emit("handlecancel", true);
            _this.selectedData2 = params.data.name;
          } else {
            let tep = res.data
              .sort((a, b) => {
                return a["count"] - b["count"];
              })
              .reverse();
            _this.$emit("onSelectedUnitId", tep[0].unitId);
            _this.$emit("onSelectedUnitName", tep[0].level3Name);
            _this.$emit("handlecancel", true);
            _this.selectedData2 = tep[0].level3Name;
            _this.selectedData = params.data;
          }
          // _this.menu_hide = !_this.menu_hide;
          _this.menu_hide = true;
          let isPass = false;

          for (const r in res.data) {
            isPass = true;
            break;
          }
          if (isPass) {
            // 根据后台传的值进行遍历解析
            _this.testData = [];
            let index = 0;

            for (let i = 0; i < res.data.length; i++) {
              if (index >= _this.itemStyles.length - 1) {
                index = 0;
              } else {
                index++;
              }
              _this.testData.push({
                name: res.data[i].level3Name,
                value: res.data[i].count,
                unitId: res.data[i].unitId,
                itemStyle: _this.itemStyles[index].itemStyle,
                label: _this.itemStyles[index].label,
              });
            }
            _this.myEcharts(); // 重画echarts
          } else {
          }
        });
      });
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption({
        tooltip: {
          // show: false,
          formatter: function (info) {
            var value = info.value;
            var treePathInfo = info.treePathInfo;
            var treePath = [];

            for (var i = 1; i < treePathInfo.length; i++) {
              treePath.push(treePathInfo[i].name);
            }

            return [
              '<div class="tooltip-title">' +
                formatUtil.encodeHTML(treePath.join("")) +
                "</div>",
              // "个数: " + formatUtil.addCommas(value) + "个",
            ].join("");
          },
        },
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0,
          borderWidth: 10,
        },
        series: [
          {
            type: "treemap",
            visibleMin: 300,
            roam: false,
            nodeClick: "link",
            left: 0,
            top: 20,
            right: 0,
            bottom: 0,
            label: {
              show: true,
              formatter: "{b}",
              fontSize: 20,
              ellipsis: true, // 字太多后面变省略号
            },
            itemStyle: {
              normal: {
                borderColor: "",
                borderWidth: 0.5,
              },
              emphasis: {
                label: {
                  show: true,
                },
                borderWidth: 1,
                borderColor: "#2bfaff",
              },
            },
            levels: this.getLevelOption(),
            data: this.testData,
            breadcrumb: {
              show: false,
            }, // 隐藏矩形树图下面的小黑条面包屑
          },
        ],
      });
    },
  },
  created() {
    axios
      .all([
        axios({
          url: "http://192.168.101.91:8080/dwRotationSession/listAscByRotation",
        }),
        axios({
          url: "http://192.168.101.91:8080/dwRotationSession/listAscByRotation",
        }),
        axios({
          url: "http://192.168.101.91:8080/dwUnitLevelInfoCsix/listTypesCount",
        }),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          // data 属性名称是固定的，用于获取后台响应的实际数据
          // 第1次请求来的数据 --界次
          const jc = {
            value1: res1.data[0].inspectionSessionName,
            label1: res1.data[0].inspectionSessionName,
          };
          this.periodList.push(jc);
          // 第2次请求来的数据 --轮次
          for (let i = 0; i < res2.data.length; i++) {
            const lc = {
              value2: res2.data[i].inspectionRotationName,
              label2: res2.data[i].inspectionRotationName,
            };
            this.turnsList.push(lc);
          }
          // 第3次请求来的数据 --echarts的标题和数值
          this.initCharts(res3);
          // console.log(res4.data);
        })
      );
  },
  mounted() {
    // this.myEcharts();
  },
  components: {
    // gradeCourse // 引入综评曲线子组件
  },
};
</script>
<style>
#citystraight {
  height: 100%;
  width: 100%;
  background: #051c3d;
  /* background-image: url("../../assets/images/阴影底.png"); */
  display: flex;
  justify-content: center;
}

/* 整体框架 */
.content {
  height: 100%;
  width: 90%;
  /* background: plum; */
}

/* 导航条的框架 */
.content > .menu_content {
  height: 10%;
  width: 100%;
  /* background: black; */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 导航条 */
.content > .menu_content > .menu {
  height: 40%;
  width: 100%;
  display: flex;
  float: left;
  background-image: url("../../assets/images/导航条.png");
}
.content > .menu_content > .menu > .menu_body {
  height: 100%;
  width: 90%;
  display: flex;
  float: left;
  margin-left: 1rem;
  /* background: cadetblue; */
}
/* 导航条的文字框架 */
.content > .menu_content > .menu > .menu_body > .menu_title2 {
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: burlywood; */
}
.content > .menu_content > .menu > .menu_body > .menu_title4 {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: burlywood; */
}
.content > .menu_content > .menu > .menu_body > .menu_title4 > span {
  color: white;
  font-size: 1.416666rem;
  font-family: "思源黑体normal";
}
.menu_body > .menu_title3 {
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background: aquamarine; */
}
.content > .menu_content > .menu > .menu_title {
  width: 5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: burlywood; */
}
/* 导航条里的文字样式 */
#citystraight
  > .content
  > .menu_content
  > .menu
  > .menu_body
  > .menu_title2
  > span {
  color: white;
  /* width: 3rem; */
  /* background: blueviolet; */
  font-size: 1.416666rem;
  font-family: "思源黑体normal";
}

/* 导航条里的文字样式 */
#citystraight > .content > .menu_content > .menu > .menu_title > span {
  color: white;
  width: 5rem;
  /* background: blueviolet; */
  font-size: 1.416666rem;
  font-family: "思源黑体normal";
}
/* 按钮的样式 */
.content > .menu_content > .menu > .menu_body > button {
  /* margin-left: 10rem; */
  font-size: 1.2rem;
  position: relative;
  left: 5rem;
}
/* 中间筛选框的框架 */
.content > .times_select {
  width: 100%;
  height: 8%;
  display: flex;
  float: left;
  /* background: violet; */
}

/* 筛选框的整体框架 */
.content > .times_select > .selectbox {
  width: 40%;
  height: 100%;
  display: flex;
  float: left;
  /* background: blueviolet; */
}

/* 筛选框的标题框架 */
.content > .times_select > .selectbox > .select_title {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: burlywood; */
}

/* 筛选框的标题文字样式 */
#citystraight > .content > .times_select > .selectbox > .select_title > span {
  color: #2bfaff;
  font-family: "思源黑体normal";
  /* font-size: 18px; */
}

/* 筛选框 */
.content > .times_select > .selectbox > .select_input {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: cornflowerblue; */
}

/* 矩形树图的整体框架 */
#citystraight > .content > .info_table {
  /* width: 100%;
    height: 78%; */
  width: 100%;
  height: 62%;
  /* background: white; */
}

/* 区县按钮 */
.content > .county_button {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-end;
  /* background: white; */
}

.content > .county_button > .county_background {
  width: 15rem;
  height: auto;
}

.content > .county_button > .county_background > img {
  width: 15rem;
  height: 3rem;
  margin-top: 2rem;
}

.content > .county_button > .county_background > .county_span {
  display: flex;
  position: relative;
  bottom: 3rem;
  justify-content: center;
}

.content > .county_button > .county_background > .county_span > span {
  color: #2bfaff;
  font-family: "思源黑体normal";
}
</style>
