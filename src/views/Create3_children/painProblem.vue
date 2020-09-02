<template>
  <div id="painproblem">
    <!-- 内容的整体布局 -->
    <div class="countain">
      <!-- 第一个政治巡查趋势图布局 -->
      <div class="countain_tablebox">
        <!-- 图对应的标题的框架 -->
        <div class="countain_title">
          <img src="../../assets/images/create3/分析评价系统-16.png" />
          <span>政治巡察趋势图</span>
        </div>
        <!-- 图的框架 -->
        <div class="countain_table" ref="table1"></div>
      </div>
      <!-- 第二个问题线索占比布局 -->
      <div class="countain_tablebox">
        <!-- 图对应的标题的框架 -->
        <div class="countain_title">
          <img src="../../assets/images/create3/分析评价系统-16.png" />
          <span>问题线索占比</span>
        </div>
        <!-- 图的框架 -->
        <div class="countain_table" ref="table2"></div>
      </div>
      <!-- 第三个痛点问题布局 -->
      <div class="countain_tablebox">
        <!-- 图对应的标题的框架 -->
        <div class="countain_title">
          <img src="../../assets/images/create3/分析评价系统-18.png" />
          <span>痛点问题</span>
        </div>
        <!-- 图的框架 -->
        <div class="countain_table" @click="fn">
          <div class="echarts_table" style="width:350px;height:150px" ref="table4" v-show="willshow"></div>
          <div class="echarts_table" ref="table3" v-show="!willshow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      willshow: false
    }
  },
  methods: {
    initChart (container, option) {
      const myChart = echarts.init(container)
      myChart.setOption(option)
    },
    fn () {
      this.willshow = !this.willshow
      console.log(this.willshow)
    }
  },
  mounted () {
    var fontColor = '#30eee9'
    var data_date = [
      '0',
      '第一轮',
      '第二轮',
      '第三轮',
      '第四轮',
      '第五轮',
      '第六轮'
    ] // 日期
    var data_orange = [, 100, 300, 415, 71, 204, 50] // 白细胞计数
    var data_yellow = [, 31, 85, 129, 308, 299, 176] // 红细胞计数
    var data_blod = [, 134, 123, 114, 302, 184, 340] // 血小板计数
    const option = {
      grid: {
        left: '7%',
        right: '5%',
        top: '15%',
        bottom: '5%',
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'item'
      },
      legend: {
        show: true,
        x: 'right',
        y: '5',
        icon: 'stack',
        itemWidth: 5,
        itemHeight: 5,
        textStyle: {
          color: '#2bfaff'
        },
        data: ['市直', '区县', '村、社区']
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            color: fontColor
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#397cbc'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#195384'
            }
          },
          data: data_date
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '',
          min: 0.0,
          max: 500.0,
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#2ad1d2'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#27b4c2'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#11366e'
            }
          }
        }
      ],
      series: [
        {
          name: '市直',
          type: 'line',
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            normal: {
              color: 'orange',
              lineStyle: {
                color: 'orange',
                width: 1
              }
            }
          },
          label: {
            normal: {
              show: false,
              position: 'top'
            }
          },
          markPoint: {
            itemStyle: {
              normal: {
                color: 'yellow'
              }
            }
          },
          data: data_orange
        },
        {
          name: '区县',
          type: 'line',

          symbol: 'circle',
          symbolSize: 8,
          label: {
            normal: {
              show: false,
              position: 'top'
            }
          },
          itemStyle: {
            normal: {
              color: 'yellow',
              lineStyle: {
                color: 'yellow',
                width: 1
              }
            }
          },
          data: data_yellow
        },
        {
          name: '村、社区',
          type: 'line',

          symbol: 'circle',
          symbolSize: 8,
          label: {
            normal: {
              show: false,
              position: 'top'
            }
          },
          itemStyle: {
            normal: {
              color: '#2bfaff',
              lineStyle: {
                color: '#2bfaff',
                width: 1
              }
            }
          },
          data: data_blod
        }
      ]
    }
    this.initChart(this.$refs.table1, option)
    const option1 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        top: '13%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['第一轮', '第二轮', '第三轮', '第四轮', '第五轮', '第六轮'],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#00c7ff',
              width: 1,
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#00c7ff'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value} %'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#00c7ff',
              width: 1,
              type: 'solid'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#063374'
            }
          }
        }
      ],
      series: [
        {
          name: '接入率',
          type: 'bar',
          data: [20, 50, 80, 58, 83, 68],
          barWidth: 10, // 柱子宽度
          barGap: 1, // 柱子之间间距
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#008cff'
                },
                {
                  offset: 1,
                  color: '#005193'
                }
              ]),
              opacity: 1
            }
          }
        },
        {
          name: '完好率',
          type: 'bar',
          data: [70, 48, 73, 68, 53, 47],
          barWidth: 10,
          barGap: 1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#c4e300'
                },
                {
                  offset: 1,
                  color: '#728400'
                }
              ]),
              opacity: 1
            }
          }
        }
      ]
    }
    this.initChart(this.$refs.table2, option1)
    var data1 = [
      { name: '突出矛盾', value: 100000 },
      { name: '涉农', value: 13000 },
      { name: '环境保护', value: 150000 }
    ].sort((a, b) => {
      return b.value - a.value
    })

    var data2 = [
      { name: '大局意识', value: 90000 },
      { name: '党组织教育', value: 20000 },
      { name: '置身事外', value: 40000 },
      { name: '党性教育', value: 600 },
      { name: '意识形态', value: -11000 }
    ].sort((a, b) => {
      return b.value - a.value
    })

    var data = data1.concat(data2)
    console.log(data)
    function getNum (num, d) {
      const maxX = data[0].value
      const minX = data[data.length - 1].value
      const maxY = 5
      const minY = 1
      const a = (maxX - minX) / (maxY - minY)
      const b = maxY - maxX / a
      // console.log(maxX, minX, maxY, minY, a, b)
      return +(num / a + b).toFixed(2)
    }

    function sum (start, end) {
      let num = 0
      const d = data.slice(start, end)
      for (let i = 0; i < d.length; i++) {
        num += d[i].value
      }

      return num
    }

    var getColor1 = function (x, y, r) {
      return {
        type: 'radial',
        x,
        y,
        r,
        colorStops: [
          { offset: 0, color: 'rgba(0, 42, 254, 0)' },
          { offset: 1, color: 'rgba(0, 180, 255, 0.3)' }
        ]
      }
    }
    var getColor2 = function (x, y, r) {
      return {
        type: 'radial',
        x,
        y,
        r,
        colorStops: [
          { offset: 1, color: 'rgba(0, 245, 254, 0.3)' },
          { offset: 0, color: 'rgba(0, 180, 255, 0)' }
        ]
      }
    }

    // var colorList = ["yellow", "blue", "red"]
    var colorList = [
      getColor1(0.18, 1.1, 0.8),
      getColor1(-0.1, 0.26, 0.8),
      getColor1(0, 0, 0.8),
      getColor2(0.8, 0, 0.8),
      getColor2(0.8, 0.35, 0.8),
      getColor2(0.8, 0.65, 0.8),
      getColor2(0.6, 0.75, 0.8),
      getColor2(0.6, 0.65, 0.8)
    ]

    var lineLength = [[10, 0], [-20, -0], [-100, 0], [-30, 0], [-60, 0], [-100, 0], [-120, 0], [-130, 0]]

    var text = ['突出矛盾', '涉农', '环境保护', '大局意识', '党组织教育', '置身事外', '党性教育', '意识形态']

    data = data.map((item, index) => {
      return {
        name: item.name,
        value: getNum(item.value),
        value1: item.value,
        itemStyle: {
          color: colorList[index]
        },
        labelLine: {
          length: lineLength[index][0],
          length2: lineLength[index][1]
        }
      }
    })
    const option2 = {
      // backgroundColor: '#000',
      // color: colorList,
      // color: ["yellow", "blue", "red"],
      color: ['yellow', 'blue', 'red', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
      series: [
        {
          type: 'pie',
          radius: ['28%', '31%'],
          startAngle: 100,
          data: [
            {
              name: '履行核心职能情况',
              value: sum(0, 3),
              value1: 186,
              itemStyle: {
                color: '#00d8ff'
              }
            },
            {
              name: '执行和落实制度情况',
              // value: 1150500,
              value: sum(3),
              value1: 258,
              itemStyle: {
                color: '#00fe5e'
              }

            }
          ],
          label: {
            formatter: function (params) {
              return '{n|' + params.name + '}\n{hr|}\n{d|' + params.data.value1 + '}{unit| 条}'
            },
            rich: {
              hr: {
                borderColor: 'grey',
                width: '90%',
                borderWidth: 1,
                height: 0
              }, // 下划线样式
              n: {
                fontSize: 8,
                color: '#2bfaff',
                padding: 7
              }, // 下划线上面的标题
              d: {
                fontSize: 7,
                color: '#ffb400',
                fontFamily: 'DINCond-Regular',
                fontWeight: 'bold',
                padding: 4
              },
              unit: {
                fontSize: 8,
                color: '#ffb400'
              }
            }
          },
          labelLine: {
            show: false
            // lineStyle: {
            //   color: '#fff'
            // }
          },
          z: 3
        },
        {
          type: 'pie',
          startAngle: 100,
          radius: ['31%', '75%'],
          roseType: 'radius',
          labelLine: {
            show: false
          },
          label: {
            color: '#2bfaff',
            formatter: function (params) {
              return '{n|' + params.name + '}\n{d|' + params.data.value1 + '}'
            },
            rich: {
              n: {
                fontSize: 8,
                color: '#2bfaff'
              }, // 涉农等标题样式
              d: {
                fontSize: 7,
                color: '#fff',
                // fontFamily: "DINCond-Regular",
                // fontWeight: "bold",
                padding: [8, 5]
              },
              unit: {
                fontSize: 8,
                color: '#ffb400'
              }
            }
          },
          itemStyle: {
            color: colorList
          },
          data: data
        },
        {
          type: 'pie',
          roseType: 'radius',
          // clockwise: false,
          radius: ['60%', '70%'],
          data: [
            data.map(item => {
              return {
                value: item.value,
                itemStyle: {
                  color: 'rgba(0,0,0,0)',
                  borderColor: 'black',
                  borderWidth: 2
                }
              }
            })[0],
            {
              value: 3250500 - data[0].value,
              itemStyle: {
                borderWidth: 20,
                borderColor: 'black',
                color: 'rgba(0,0,0,0)',
                opacity: 0
              }
            }
          ],
          labelLine: {
            show: false
          },
          label: {
            show: false
          }
        }
      ]
    }
    this.initChart(this.$refs.table3, option2)
    const option3 = {
      tooltip: {
        trigger: 'axis',
        padding: [2, 10],
        textStyle: {
          fontSize: 10
        }
      },
      grid: {
        top: '12%',
        left: '2%',
        right: '4%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        // interval:0,
        axisLine: {
          lineStyle: {
            width: 1,
            color: '#9AA1A9'
          }
        },
        axisTick: {
          show: true,
          alignWithLabel: false,
          lineStyle: {
            width: 1
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 9
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        data: ['19/07', '19/08', '19/09', '19/10', '19/11', '19/12', '20/01', '20/02', '20/03', '20/04', '20/05', '20/06']
      },
      yAxis: {
        type: 'value',
        name: ' ',
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 9
          }
        },
        axisLine: {
          lineStyle: {
            width: 0,
            color: '#9AA1A9'
          }
        },
        axisTick: {
          lineStyle: {
          }
        }
      },
      series: [{
        type: 'line',
        symbol: 'circle',
        symbolSize: 6,
        smooth: true,
        animationDuration: 2000,
        itemStyle: {
          normal: {
            color: '#6395AE ',
            shadowColor: 'rgba(0, 0, 0, .12)'
          }
        },
        lineStyle: {
          normal: {
            width: 2,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(98,127,142,0.9)'
            },
            {
              offset: 1,
              color: 'rgba(98,127,142,0)'
            }
            ], false),
            shadowColor: 'rgba(98,127,142, 0.9)',
            shadowBlur: 20
          }
        },
        data: [1, 11, 14, 9, 7, 12, 8, 3, 12, 9, 16, 12]
      }]
    }
    this.initChart(this.$refs.table4, option3)
  }
}
</script>

<style scoped>
#painproblem {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#painproblem > .countain {
  width: 90%;
  height: 90%;
  /* background: chartreuse; */
}
/* 每个图的布局 */
#painproblem > .countain > .countain_tablebox {
  width: 100%;
  height: 33.3333%;
  /* background: aquamarine; */
}
/* 每个图对应的标题的框架 */
#painproblem > .countain > .countain_tablebox > .countain_title {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  /* background: coral; */
}
/* 每个标题对应的图片格式 */
#painproblem > .countain > .countain_tablebox > .countain_title > img {
  margin-left: 0.5rem;
  width: 1.5rem;
  height: 1rem;
}
/* 每个标题对应的标题文字格式 */
#painproblem > .countain > .countain_tablebox > .countain_title > span {
  color: #2bfaff;
  margin-left: 1rem;
}
/* 每个图的布局 */
#painproblem > .countain > .countain_tablebox > .countain_table {
  width: 100%;
  height: 80%;
  /* display: flex;
  float: left; */
  /* align-items: flex-end; */
  /* background: cornsilk; */
  border: 1px solid #2bfaff;
  box-shadow: inset 0px 0px 15px 0.01px #2bfaff;
  /* background-image: radial-gradient(rgba(0,0,0,0),#2bfaff); */
}
#painproblem > .countain > .countain_tablebox > .countain_table > .echarts_table {
  width: 100%;
  height: 100%;
  /* background: aquamarine; */
}
</style>
