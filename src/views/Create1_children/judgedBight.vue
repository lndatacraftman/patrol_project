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
        <Divider />
        <!-- 图表 -->
        <div class="content_table">
          <div ref="chart1" class="up_table"></div>
        </div>
      </div>
      <!-- 下半布局-指标详情的框架 -->
      <div class="content_down">
        <!-- 标题 -->
        <div class="content_title">
          <span>指标详情</span>
        </div>
        <!-- 分割线 -->
        <Divider />
        <!-- 图表 -->
        <div class="content_table">
          <div ref="chart2" class="down_table"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  methods: {
    initChart (container, option) {
      const myChart = echarts.init(container)
      myChart.setOption(option)
    }
  },
  mounted () {
    const bgColor = '#fff'
    const color = [
      '#0090FF',
      '#36CE9E',
      '#FFC005',
      '#FF515A',
      '#8B5CFF',
      '#00CA69'
    ]
    const echartData = [{
      name: '1',
      value1: 100,
      value2: 233
    },
    {
      name: '2',
      value1: 138,
      value2: 233
    },
    {
      name: '3',
      value1: 350,
      value2: 200
    },
    {
      name: '4',
      value1: 173,
      value2: 180
    },
    {
      name: '5',
      value1: 180,
      value2: 199
    },
    {
      name: '6',
      value1: 150,
      value2: 233
    },
    {
      name: '7',
      value1: 180,
      value2: 210
    },
    {
      name: '8',
      value1: 230,
      value2: 180
    }
    ]
    const xAxisData = echartData.map(v => v.name)
    // ["1", "2", "3", "4", "5", "6", "7", "8"]
    const yAxisData1 = echartData.map(v => v.value1)
    // [100, 138, 350, 173, 180, 150, 180, 230]
    const yAxisData2 = echartData.map(v => v.value2)
    const hexToRgba = (hex, opacity) => {
      let rgbaColor = ''
      const reg = /^#[\da-f]{6}$/i
      if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt(
      '0x' + hex.slice(3, 5)
    )},${parseInt('0x' + hex.slice(5, 7))},${opacity})`
      }
      return rgbaColor
    }
    const option = {
      backgroundColor: bgColor,
      color: color,
      legend: {
        right: 10,
        top: 10
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          let html = ''
          params.forEach(v => {
            console.log(v)
            html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                ${v.seriesName}.${v.name}
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
                万元`
          })

          return html
        },
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: '#ffffff',
            shadowColor: 'rgba(225,225,225,1)',
            shadowBlur: 5
          }
        }
      },
      grid: {
        top: 100,
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          formatter: '{value}月',
          textStyle: {
            color: '#333'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#D9D9D9'
          }
        },
        data: xAxisData
      }],
      yAxis: [{
        type: 'value',
        name: '单位：万千瓦时',
        axisLabel: {
          textStyle: {
            color: '#666'
          }
        },
        nameTextStyle: {
          color: '#666',
          fontSize: 12,
          lineHeight: 40
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#E9E9E9'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }],
      series: [{
        name: '2018',
        type: 'line',
        smooth: true,
        // showSymbol: false,/
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          normal: {
            color: color[0],
            shadowBlur: 3,
            shadowColor: hexToRgba(color[0], 0.5),
            shadowOffsetY: 8
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                offset: 0,
                color: hexToRgba(color[0], 0.3)
              },
              {
                offset: 1,
                color: hexToRgba(color[0], 0.1)
              }
              ],
              false
            ),
            shadowColor: hexToRgba(color[0], 0.1),
            shadowBlur: 10
          }
        },
        data: yAxisData1
      }, {
        name: '2019',
        type: 'line',
        smooth: true,
        // showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          normal: {
            color: color[1],
            shadowBlur: 3,
            shadowColor: hexToRgba(color[1], 0.5),
            shadowOffsetY: 8
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                offset: 0,
                color: hexToRgba(color[1], 0.3)
              },
              {
                offset: 1,
                color: hexToRgba(color[1], 0.1)
              }
              ],
              false
            ),
            shadowColor: hexToRgba(color[1], 0.1),
            shadowBlur: 10
          }
        },
        data: yAxisData2
      }]
    }
    this.initChart(this.$refs.chart1, option)
    var obj = {
      0: '2.25%',
      1: '41.54%',
      2: '32.88%',
      3: '16.77%',
      4: '5.43%',
      5: '0.36%',
      6: '0.03%'
    }
    const option1 = {
      // grid: {
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     top: 20
    // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        },
        formatter: function (params) {
          return params[0].name + ': ' + params[0].value
        }
      },
      xAxis: {
        show: true,
        data: []
      },
      yAxis: {
        splitLine: {
          show: true
        },
        axisTick: {
          show: true
        },
        axisLine: {
          show: true
        },
        axisLabel: {
          show: true
        }
      },
      color: ['#e54035'],
      legend: {},
      series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
          show: true,
          position: 'top',
          distance: 4,
          color: '#fff',
          // fontWeight: 'bolder',
          fontSize: 12,
          formatter: function (params) {
            return obj[params.dataIndex]
          }
        },
        itemStyle: {
          normal: {
            color: function (params) {
              const colorList = [
                'rgba(55, 112, 255,0.7)', 'rgba(79, 116, 255,0.7)',
                'rgba(83, 116, 255,0.7)', 'rgba(85, 125, 255,0.7)',
                'rgba(101, 191, 255,0.7)', 'rgba(96, 227, 255,0.7)',
                'rgba(25, 255, 224,0.7)'
              ]
              return colorList[params.dataIndex]
            }
          },
          emphasis: {
            opacity: 1
          }
        },
        data: [2, 30, 25, 16, 10, 6, 1],
        z: 10
      }]
    }
    this.initChart(this.$refs.chart2, option1)
  }
}
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
  width: 800px;
  height: 300px;
}
/* 下面图表的大小 */
.content_table > .down_table {
  width: 800px;
  height: 300px;
}
</style>
