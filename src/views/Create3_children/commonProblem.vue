<template>
  <div id="commonproblem">
    <!-- 内容的整体布局 -->
    <div class="countain">
      <!-- 第一个政治巡查趋势图布局 -->
      <div class="countain_tablebox">
        <!-- 图对应的标题的框架 -->
        <div class="countain_title">
          <img src="../../assets/images/create3/分析评价系统-16.png" />
          <span>单位类别综评曲线</span>
        </div>
        <!-- 图的框架 -->
        <div class="countain_table" ref="table4"></div>
      </div>
      <!-- 第二个问题线索占比布局 -->
      <div class="countain_tablebox">
        <!-- 图对应的标题的框架 -->
        <div class="countain_title">
          <img src="../../assets/images/create3/分析评价系统-16.png" />
          <span>指标占比</span>
        </div>
        <!-- 图的框架 -->
        <div class="countain_table" ref="table5"></div>
      </div>
      <!-- 第三个痛点问题布局 -->
      <div class="countain_tablebox">
        <!-- 图对应的标题的框架 -->
        <div class="countain_title">
          <img src="../../assets/images/create3/分析评价系统-18.png" />
          <span>共性问题</span>
        </div>
        <!-- 图的框架 -->
        <div class="countain_table" @click="fn">
          <!-- 上面的echarts图 -->
          <div class="echarts_table" ref="table3" v-show="!willshow"></div>
          <!-- 下转后的echarts图 -->
          <div
            class="echarts_table"
            style="width: 350px; height: 150px"
            ref="table6"
            v-show="willshow"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {
      willshow: false,
    };
  },
  methods: {
    initChart(container, option) {
      const myChart = echarts.init(container);
      myChart.setOption(option);
    },
    fn() {
      this.willshow = !this.willshow;
      console.log(this.willshow);
    },
  },
  mounted() {
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(0, 255, 233,0)",
                },
                {
                  offset: 0.5,
                  color: "rgba(255, 255, 255,1)",
                },
                {
                  offset: 1,
                  color: "rgba(0, 255, 233,0)",
                },
              ],
              global: false,
            },
          },
        },
      },
      grid: {
        top: "10%",
        left: "10%",
        right: "6%",
        bottom: "25%",
      },
      xAxis: [
        {
          type: "category",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid",
            },
          },
          splitArea: {
            // show: true,
            color: "#f00",
            lineStyle: {
              color: "#f00",
            },
          },
          axisLabel: {
            color: "#2bfaff",
            interval: 0,
            rotate: 30, // 角度顺时针计算的
            textStyle: {
              fontSize: "9",
            },
          },
          splitLine: {
            show: false,
          },
          boundaryGap: true,
          data: [
            "企业",
            "市政府机构",
            "事业单位",
            "开发区",
            "市委单位",
            "群团",
            "人大政协法院",
            "大学",
          ],
        },
      ],

      yAxis: [
        {
          type: "value",
          min: 0,
          max: 500,
          splitNumber: 5,
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.1)",
            },
          },
          // 纵坐标轴的样式
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid",
            },
          },
          axisLabel: {
            show: true,
            // margin: 0,
            textStyle: {
              color: "#2bfaff",
              fontSize: "9",
            },
          },
        },
      ],
      series: [
        {
          name: "注册总量",
          type: "line",
          smooth: true, // 是否平滑
          showAllSymbol: true,
          symbol: "circle",
          symbolSize: 5,
          lineStyle: {
            normal: {
              color: "#00b3f4",
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 5,
              shadowOffsetX: 5,
            },
          },
          itemStyle: {
            color: "#00b3f4",
            borderColor: "#fff",
            borderWidth: 2,
            shadowColor: "rgba(0, 0, 0, .3)",
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2,
          },
          tooltip: {
            show: false,
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
                    color: "rgba(0,179,244,0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0,179,244,0)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0,179,244, 0.9)",
              shadowBlur: 10,
            },
          },
          data: [302.84, 205.97, 332.79, 281.55, 398.35, 100, 240, 200],
        },
      ],
    };
    this.initChart(this.$refs.table4, option);
    const option1 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      color: [
        "orange",
        "yellow",
        "#2bfaff",
        "dodgerblue",
        "royalblue",
        "rgb(191, 255, 127)",
      ],
      legend: {
        orient: "vertical",
        itemWidth: 9,
        itemHeight: 9,
        left: 10,
        top: 15,
        textStyle: { color: " #2bfaff ", fontSize: "9" },
        data: [
          "党的意识、政治建设",
          "担当作为、履行职责使命",
          "履行全面从严治党“两个责任”",
          "落实深化改革要求",
          "班子建设和队伍建设",
          "机关党建和基层党组织建设",
        ],
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          selectedMode: "single",
          radius: [0, "30%"],
          label: {
            position: "inner",
          },
          labelLine: {
            show: false,
          },
        },
        {
          name: "访问来源",
          type: "pie",
          radius: ["40%", "70%"],
          label: {
            show: false,
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: "rgba（0,0,0,0）",
          },
          left: 230,
          data: [
            { value: 335, name: "党的意识、政治建设" },
            { value: 310, name: "担当作为、履行职责使命" },
            { value: 234, name: "履行全面从严治党“两个责任”" },
            { value: 135, name: "落实深化改革要求" },
            { value: 1048, name: "班子建设和队伍建设" },
            { value: 251, name: "机关党建和基层党组织建设" },
          ],
        },
      ],
    };
    this.initChart(this.$refs.table5, option1);
    var lineColor = "#406A92";
    var labelColor = "#fff";
    var fontSize = "10";
    var lineWidth = 3;
    const option3 = {
      backgroundColor: "#031845",
      grid: {
        left: "0%",
        right: "10%",
        top: "15%",
        bottom: "7%",
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: "axis",
        textStyle: {
          fontSize: fontSize,
        },
      },
      legend: {
        show: true,
        x: "center",
        y: "1%",
        itemWidth: 45,
        itemHeight: 18,
        textStyle: {
          color: "#fff",
          fontSize: fontSize,
        },
      },
      xAxis: [
        {
          type: "category",
          name: "",
          nameTextStyle: {
            fontSize: fontSize,
            color: labelColor,
            lineHeight: 90,
          },
          axisLabel: {
            color: labelColor,
            fontSize: fontSize,
            margin: 30,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: lineColor,
              width: lineWidth,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#195384",
            },
          },
          data: [
            "学习贯彻习近平总书记重要讲话和指示批示精神情况",
            "执行和落实制度情况",
            "履行核心职能情况",
            "干部担当作为情况",
            "领导班子建设情况",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "",
          nameTextStyle: {
            fontSize: fontSize,
            color: labelColor,
          },
          nameGap: 30,
          axisLabel: {
            show: false,
            formatter: "{value}",
            margin: 20,
            textStyle: {
              color: labelColor,
              fontSize: fontSize,
            },
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: lineColor,
              width: lineWidth,
            },
          },
          splitArea: {
            show: false,
            areaStyle: {
              color: ["rgba(128,160,176,.1)", "rgba(250,250,250,0)"],
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: lineColor,
            },
          },
        },
      ],
      series: [
        {
          name: "",
          type: "pictorialBar",
          symbolSize: [50, 25],
          symbolOffset: [0, -10],
          symbolPosition: "end",
          z: 12,
          tooltip: {
            show: false,
          },
          label: {
            normal: {
              show: true,
              position: "top",
              fontSize: fontSize,
              color: "#fff",
            },
          },
          color: "#26B2E8",
          data: [298, 300, 430, 200, 600],
        },
        {
          name: "",
          type: "pictorialBar",
          tooltip: {
            show: false,
          },
          symbolSize: [70, 30],
          symbolOffset: [0, 15],
          z: 10,
          itemStyle: {
            normal: {
              color: "transparent",
              borderColor: "#2EA9E5",
              borderType: "solid",
              borderWidth: 3,
            },
          },
          data: [298, 300, 430, 200, 600],
        },
        {
          name: "",
          type: "pictorialBar",
          tooltip: {
            show: false,
          },
          symbolSize: [90, 40],
          symbolOffset: [0, 20],
          z: 10,
          itemStyle: {
            normal: {
              color: "transparent",
              borderColor: "#26B2E8",
              borderType: "solid",
              borderWidth: 4,
            },
          },
          data: [298, 300, 430, 200, 600],
        },
        {
          name: "",
          type: "pictorialBar",
          symbolSize: [50, 25],
          tooltip: {
            show: false,
          },
          symbolOffset: [0, 10],
          z: 12,
          color: "#26B2E8",
          data: [298, 300, 430, 200, 600],
        },
        {
          type: "bar",
          barWidth: "50",
          barGap: "10%",
          barCateGoryGap: "10%",
          itemStyle: {
            normal: {
              color: "#26B2E8",
              opacity: 0.8,
            },
          },
          data: [298, 300, 430, 200, 600],
        },
      ],
    };
    this.initChart(this.$refs.table3, option3);
    const option4 = {
      tooltip: {
        trigger: "axis",
        padding: [2, 10],
        textStyle: {
          fontSize: 10,
        },
      },
      grid: {
        top: "12%",
        left: "2%",
        right: "4%",
        bottom: "2%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        // interval:0,
        axisLine: {
          lineStyle: {
            width: 1,
            color: "#9AA1A9",
          },
        },
        axisTick: {
          show: true,
          alignWithLabel: false,
          lineStyle: {
            width: 1,
          },
        },
        axisLabel: {
          textStyle: {
            fontSize: 9,
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.2)",
          },
        },
        data: [
          "19/07",
          "19/08",
          "19/09",
          "19/10",
          "19/11",
          "19/12",
          "20/01",
          "20/02",
          "20/03",
          "20/04",
          "20/05",
          "20/06",
        ],
      },
      yAxis: {
        type: "value",
        name: " ",
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.2)",
          },
        },
        axisLabel: {
          textStyle: {
            fontSize: 9,
          },
        },
        axisLine: {
          lineStyle: {
            width: 0,
            color: "#9AA1A9",
          },
        },
        axisTick: {
          lineStyle: {},
        },
      },
      series: [
        {
          type: "line",
          symbol: "circle",
          symbolSize: 6,
          smooth: true,
          animationDuration: 2000,
          itemStyle: {
            normal: {
              color: "#6395AE ",
              shadowColor: "rgba(0, 0, 0, .12)",
            },
          },
          lineStyle: {
            normal: {
              width: 2,
              shadowColor: "rgba(0,0,0,0.4)",
              shadowBlur: 10,
              shadowOffsetY: 10,
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
                    color: "rgba(98,127,142,0.9)",
                  },
                  {
                    offset: 1,
                    color: "rgba(98,127,142,0)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(98,127,142, 0.9)",
              shadowBlur: 20,
            },
          },
          data: [1, 11, 14, 9, 7, 12, 8, 3, 12, 9, 16, 12],
        },
      ],
    };
    this.initChart(this.$refs.table6, option4);
  },
};
</script>

<style scoped>
#commonproblem {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#commonproblem > .countain {
  width: 90%;
  height: 90%;
  /* background: chartreuse; */
}
/* 每个图的布局 */
#commonproblem > .countain > .countain_tablebox {
  width: 100%;
  height: 33.3333%;
  /* background: aquamarine; */
}
/* 每个图对应的标题的框架 */
#commonproblem > .countain > .countain_tablebox > .countain_title {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  /* background: rgb(113, 174, 113); */
  /* background: coral; */
}
/* 每个标题对应的图片格式 */
#commonproblem > .countain > .countain_tablebox > .countain_title > img {
  margin-left: 0.5rem;
  width: 1.5rem;
  height: 1rem;
}
/* 每个标题对应的标题文字格式 */
#commonproblem > .countain > .countain_tablebox > .countain_title > span {
  color: #2bfaff;
  margin-left: 1rem;
}
/* 每个图的布局 */
#commonproblem > .countain > .countain_tablebox > .countain_table {
  width: 100%;
  height: 80%;
  /* background: cornsilk; */
  border: 1px solid #2bfaff;
  box-shadow: inset 0px 0px 15px 0.01px #2bfaff;
}
#commonproblem
  > .countain
  > .countain_tablebox
  > .countain_table
  > .echarts_table {
  width: 100%;
  height: 100%;
}
</style>
