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
        <hr style="hetght: 2px" />
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
        <hr style="hetght: 0.5px" />
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
          url: "http://192.168.101.91:8080/threeIndexScoreCsix/lineCharIndex",
        }),
        axios({
          method: "get",
          url: "http://192.168.101.91:8080/threeIndexScoreCsix/lineChar",
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
                res2.data[a].level,
              ],
            };
            _this.echartData.push(line);
            _this.myEcharts1();
          }
        })
      );
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
        "#3D8BF0",
        "#CCE2FF",
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

        color: color,
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
                    ${v.name}
                    <span style="color:${
                      color[v.componentIndex]
                    };font-weight:700;font-size: 18px">${v.value[2]}</span>
                    `;
            });
            return html;
          },
          extraCssText:
            "background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;",
          axisPointer: {
            type: "line",
            shadowStyle: {
              color: "#ffffff",
              shadowColor: "rgba(225,225,225,1)",
              shadowBlur: 5,
            },
          },
        },
        grid: {
          top: 10,
          left: 20,
          right: 95,
          bottom: 10,
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
              align: "left",
              margin: 50,
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
            name: "",
            type: "line",
            markLine: {
              lineStyle: {
                color: "grey",
              },
              data: [
                {
                  type: "average",
                  color: "red",
                },
              ],
              silent: false,
              label: {
                show: false,
              },
            },
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
                      color: hexToRgba(color[0], 1),
                    },
                    {
                      offset: 1,
                      color: hexToRgba(color[1], 0),
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
    // 下面的bar
    myEcharts2() {
      //初始化
      var myChart2 = Vue.prototype.$echarts.init(
        document.getElementById("chart2")
      );
      let showLegend = false;
      myChart2.setOption({
        grid: {
          top: 50,
          left: 56,
          bottom: 100,
          right: 60,
        },
        xAxis: {
          type: "category",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: "#4D4D4D",
            rotate: 16,
            align: "center",
            padding: [20, 0, 0, 15],
          },
          data: this.xaxisdata,
        },
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "none",
          },
        },
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
              align: "left",
              margin: 15,
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
            label: {
              show: true,
              position: "top",
              fontSize: 14,
              color: "#3D8BF0",
              fontWeight: "bold",
            },
            barMaxWidth: 60,
            itemStyle: {
              barBorderRadius: [6, 6, 0, 0],
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#3D8BF0", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#CCE2FF", // 100% 处的颜色
                  },
                ],
              },
            },
            data: this.echarts2Data,
            type: "bar",
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
  font-size: 18px;
  font-family: "思源黑体medium";
  /* position: relative; */
  /* background: darkseagreen; */
}

/* .content_title > span {
  } */
/* 图表的框架 */
.content_table {
  width: 100%;
  height: 60%;
  /* background: deepskyblue; */
}

/* 上面图表的大小 */
.content_table > .up_table {
  /*margin-top: 5rem;*/
  width: 900px;
  height: 300px;
}

/* 下面图表的大小 */
.content_table > .down_table {
  width: 900px;
  height: 350px;
  /*margin-top: 5rem;*/
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
  height: 30px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f2f2f2;
}
</style>
