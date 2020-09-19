<!-- 综评曲线子组件 -->

<template>
  <div id="judgedbight">
    <!-- 整体布局 -->
    <div class="content_main">
      <!-- 上半布局-综评曲线的框架 -->
      <div class="content_up">
        <!-- 标题 -->
        <div class="content_title">
          <span>综评曲线</span>
        </div>
        <!-- 分割线 -->
        <hr />
        <!-- 图表 -->
        <div class="content_table">
          <div id="chart1" class="up_table"></div>
        </div>
      </div>
      <!-- 下半布局-指标详情的框架 -->
      <div class="content_down">
        <!-- 标题 -->
        <div class="content_title">
          <span>指标详情</span>
        </div>
        <!-- 分割线 -->
        <hr />
        <!-- 图表 -->
        <div class="content_table">
          <div id="chart2" class="down_table"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import echarts from "echarts";
import axios from "axios";
Vue.prototype.$echarts = echarts;

export default {
  props: {
    selectedUnitId1: String,
  },
  data() {
    return {
      bgColor: "#fff",
      echarts2Data: [], //第二个echarts图的数值
      echartData: [], // 第一个echarts图的数值
      xaxisdata: [], // 第二个图的横坐标的标题
    };
  },
  created() {},
  mounted() {
    // this.myEcharts1();
    // this.myEcharts2();
    let _this = this;
    axios
      .all([
        //默认请求山图数据
        axios({
          method: "get",
          url: "http://192.168.101.4:8080/threeIndexScoreCsix/lineCharIndex",
        }),
        axios({
          method: "get",
          url: "http://192.168.101.4:8080/threeIndexScoreCsix/lineChar",
        }),
      ])
      .then(
        axios.spread((res1, res2) => {
          console.log(res1.data);
          for (let i = 0; i < res1.data.length; i++) {
            _this.echarts2Data.push([
              i,
              this.getLevel(res1.data[i].comprehensiveScore),
              res1.data[i].comprehensiveScore,
            ]);

            _this.xaxisdata.push(res1.data[i].content);
            _this.myEcharts2();
          }
          console.log(res2.data);
          for (let a = 0; a < res2.data.length; a++) {
            const line = {
              name: res2.data[a].content,
              value: [
                a,
                this.getLevel(res2.data[a].comprehensiveScore),
                res2.data[a].comprehensiveScore,
              ],
            };
            _this.echartData.push(line);
            _this.myEcharts1();
          }
        })
      );
    //     for (let i = 0; i < res1.data.length; i++) {
    //       _this.echarts2Data.push(res1.data[i].comprehensiveScore);
    //       _this.xaxisdata.push(res1.data[i].content);
    //       _this.myEcharts2();
    //     }
    //     console.log(res2.data);
    //     for (let a = 0; a < res2.data.length; a++) {
    //       const line = {
    //         name: res2.data[a].content,
    //         value: res2.data[a].comprehensiveScore,
    //       };
    //       _this.echartData.push(line);
    //       _this.myEcharts1();
    //     }
    //   })
    // );
    console.log(this.echarts2Data);
  },
  methods: {
    getLevel(value) {
      let texts = 0;
      if (value === 0) {
        texts = 0;
      } else if (value <= 54) {
        texts = 1;
      } else if (value <= 69) {
        texts = 2;
      } else if (value <= 73) {
        texts = 3;
      } else if (value <= 77) {
        texts = 4;
      } else if (value === 78) {
        texts = 5;
      } else if (value <= 82) {
        texts = 6;
      } else if (value <= 84) {
        texts = 7;
      } else if (value <= 88) {
        texts = 8;
      } else if (value <= 93) {
        texts = 9;
      } else if (value === 94) {
        texts = 10;
      } else if (value <= 99) {
        texts = 11;
      } else if (value === 100) {
        texts = 12;
      }
      return texts;
    },
    // 上面的折线图
    myEcharts1() {
      const _this = this;
      //初始化
      var myChart1 = Vue.prototype.$echarts.init(
        document.getElementById("chart1")
      );
      const color = [
        "#0090FF",
        "#36CE9E",
        "#FFC005",
        "#FF515A",
        "#8B5CFF",
        "#00CA69",
      ];
      const xAxisData = this.echartData.map((v) => v.name);
      const yAxisData = this.echartData.map((v) => v.value);
      const hexToRgba = (hex, opacity) => {
        let rgbaColor = "";
        const reg = /^#[\da-f]{6}$/i;
        if (reg.test(hex)) {
          rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
            "0x" + hex.slice(3, 5)
          )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
        }
        return rgbaColor;
      };
      myChart1.setOption({
        backgroundColor: this.bgColor,
        grid: {
          left: "0%",
          top: "0%",
          bottom: "0%",
          right: "0%",
        },
        color: color,
        legend: {
          right: 0,
          top: 0,
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            let html = "";
            params.forEach((v) => {
              console.log(v);
              html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                    <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                      color[v.componentIndex]
                    };"></span>
                    ${v.seriesName}.${v.name}
                    <span style="color:${
                      color[v.componentIndex]
                    };font-weight:700;font-size: 18px">${v.value[2]}</span>
                    分`;
            });
            return html;
          },
          extraCssText:
            "background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;",
          axisPointer: {
            type: "shadow",
            shadowStyle: {
              color: "#ffffff",
              shadowColor: "rgba(225,225,225,1)",
              shadowBlur: 5,
            },
          },
        },
        grid: {
          top: 15,
          left: 0,
          right: 160,
          bottom: 0,
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#333",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#D9D9D9",
              },
            },
            data: xAxisData,
          },
        ],
        yAxis: [
          {
            data: [
              "A++",
              "A+",
              "A",
              "A-",
              "A--",
              "B++",
              "B+",
              "B",
              "B-",
              "B--",
              "C",
              "D",
            ].reverse(),
            type: "category",
            splitNumber: "12",
            axisLabel: {
              textStyle: {
                color: "#666",
              },
            },
            nameTextStyle: {
              color: "#666",
              fontSize: 12,
              lineHeight: 40,
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#E9E9E9",
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "2020",
            type: "line",
            smooth: true,
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
              normal: {
                color: color[1],
                shadowBlur: 3,
                shadowColor: hexToRgba(color[1], 0.5),
                shadowOffsetY: 8,
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: hexToRgba(color[1], 0.3),
                    },
                    {
                      offset: 1,
                      color: hexToRgba(color[1], 0.1),
                    },
                  ],
                  false
                ),
                shadowColor: hexToRgba(color[1], 0.1),
                shadowBlur: 10,
              },
            },
            data: yAxisData,
          },
        ],
      });
    },
    // 下面的山图
    myEcharts2() {
      //初始化
      var myChart2 = Vue.prototype.$echarts.init(
        document.getElementById("chart2")
      );
      var obj = {
        0: "2.25%",
        1: "41.54%",
        2: "32.88%",
        3: "16.77%",
        4: "5.43%",
        5: "0.36%",
        6: "0.03%",
      };
      myChart2.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          formatter: function (params) {
            return params[0].name + ": " + params[0].value[2];
          },
        },
        grid: {
          top: 20,
          right: 160,
          left: 0,
          bottom: 20,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          show: true,
          data: this.xaxisdata,
          axisTick: {
            show: false,
          }, // 刻度不显示，默认是显示的
          axisLine: {
            show: false, //横坐标的线不显示
            // lineStyle: {
            //   color: "rgba(255, 129, 109,.1)",
            //   width: 1, //这里是为了突出显示加上的
            // },
          },
          axisLabel: {
            rotate: 18, // x轴字设置倾斜
            textStyle: {
              // color: "#999",
              fontSize: 9,
            }, // 设置横坐标的字体样式
          },
        },
        yAxis: {
          type: "category",
          data: [
            "A++",
            "A+",
            "A",
            "A-",
            "A--",
            "B++",
            "B+",
            "B",
            "B-",
            "B--",
            "C",
            "D",
          ].reverse(),
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
          },
        },
        color: ["#e54035"],
        legend: {},
        series: [
          {
            type: "pictorialBar",
            barCategoryGap: "0%",
            symbol:
              "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            label: {
              show: true,
              position: "top",
              distance: 4,
              color: "#fff",
              // fontWeight: 'bolder',
              fontSize: 12,
              formatter: function (params) {
                return obj[params.dataIndex];
              },
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  const colorList = [
                    "rgba(55, 112, 255,0.7)",
                    "rgba(79, 116, 255,0.7)",
                    "rgba(83, 116, 255,0.7)",
                    "rgba(85, 125, 255,0.7)",
                    "rgba(101, 191, 255,0.7)",
                    "rgba(96, 227, 255,0.7)",
                    "rgba(25, 255, 224,0.7)",
                  ];
                  return colorList[params.dataIndex];
                },
              },
              emphasis: {
                opacity: 1,
              },
            },
            // 数值
            data: this.echarts2Data,
            z: 10,
          },
        ],
      });
    },
  },
};
</script>
<style>
#judgedbight {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* background: cornflowerblue; */
}
/* 整体布局 */
#judgedbight > .content_main {
  width: 90%;
  height: 100%;
  /* background: cyan; */
}
/* 上半布局的框架 */
#judgedbight > .content_main > .content_up {
  width: 100%;
  height: 45%;
  /* background: cornsilk; */
}
/* 下半布局的框架 */
#judgedbight > .content_main > .content_down {
  width: 100%;
  height: 55%;
  /* background: darkkhaki; */
}
/* 标题的框架 */
.content_title {
  width: 100%;
  height: 15%;
  display: flex;
  align-items: flex-end;
  /* position: relative; */
  /* background: darkseagreen; */
}
/* .content_title > span {
} */
/* 图表的框架 */
.content_table {
  width: 100%;
  height: 80%;
  /* background: deepskyblue; */
}
/* 上面图表的大小 */
.content_table > .up_table {
  margin-top: 5rem;
  width: 900px;
  height: 250px;
}
/* 下面图表的大小 */
.content_table > .down_table {
  width: 900px;
  height: 300px;
  margin-top: 5rem;
  overflow: overlay;
}
.content_table > .down_table::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background-color: #f5f5f5;
}
.content_table > .down_table::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #f5f5f5;
}
.content_table > .down_table::-webkit-scrollbar-thumb {
  border-radius: 4px;
  height: 20px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f2f2f2;
}
</style>
