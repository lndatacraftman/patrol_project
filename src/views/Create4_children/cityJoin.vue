<!-- 市台联 子组件 -->
<!-- author by：zhaosiyuan -->

<template>
    <div id="cityjoin">
        <div class="content">
      <!-- 上面导航条框架 -->
      <div class="menu_content">
        <!-- 导航条 -->
        <div class="menu">
          <div class="menu_title">
            <span>市直</span>
          </div>
          <div class="menu_title">
            <span>>>群团</span>
          </div>
          <div class="menu_title1">
            <span>>>市台联</span>
          </div>
          <!-- 返回按钮 -->
          <Button type="text" @click="return_click()" ghost>返回</Button>
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
            <Select v-model="model1" size="small">
            <Option
              v-for="item in periodList"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
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
            <Select v-model="model1" size="small">
            <Option
              v-for="item in periodList"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
          </div>
        </div>
      </div>
      <!-- 下面图块框架 -->
      <div class="info_table" id="main1"></div>
    </div>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

export default {
  name: 'Echarts',
  data () {
    return {
      // 届次筛选框里面的值
      periodList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model1: '',
      testData: [
        {
          name: '市政府机构',
          value: 10,
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              1,
              [
                {
                  offset: 0,
                  color: '#23203B'
                },
                {
                  offset: 1,
                  color: '#43396D'
                }
              ],
              false
            )
          },
          label: {
            color: '#9065FD'
          }
        },

        {
          name: '',
          value: 10,
          children: [
            {
              name: '群团',
              value: 5,
              itemStyle: {
                color: new echarts.graphic.RadialGradient(
                  0.5,
                  0.5,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#463428' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#584133' // 100% 处的颜色
                    }
                  ],
                  false
                )
              },
              label: {
                color: '#D19A71'
              }
            },
            {
              name: '事业单位',
              value: 5,
              itemStyle: {
                color: new echarts.graphic.RadialGradient(
                  0.5,
                  0.5,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#502630' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#72353D' // 100% 处的颜色
                    }
                  ],
                  false
                )
              },
              label: {
                color: '#D06168'
              }
            },
            {
              name: '开发区',
              value: 5,
              itemStyle: {
                color: new echarts.graphic.RadialGradient(
                  0.5,
                  0.5,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#2C3E42' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#4E6170' // 100% 处的颜色
                    }
                  ],
                  false
                )
              },
              label: {
                color: '#7DA7BD'
              }
            },
            {
              name: '市委单位',
              value: 5,
              itemStyle: {
                color: new echarts.graphic.RadialGradient(
                  0.5,
                  0.5,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#4A450E' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#625A12' // 100% 处的颜色
                    }
                  ],
                  false
                )
              },
              label: {
                color: '#ADA55C'
              }
            },
            {
              name: '大学',
              value: 3,
              itemStyle: {
                color: new echarts.graphic.RadialGradient(
                  0.5,
                  0.5,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#294421' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#3F6B30' // 100% 处的颜色
                    }
                  ],
                  false
                )
              },
              label: {
                color: '#77B05F'
              }
            }
          ]
        },
        {
          name: '企业',
          value: 5,
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              1,
              [
                {
                  offset: 0,
                  color: '#051B32' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#05508A' // 100% 处的颜色
                }
              ],
              false
            )
          },
          label: {
            color: '#0092FF'
          }
        },
        {
          name: '人大政协法院',
          value: 20,
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              1,
              [
                {
                  offset: 0,
                  color: '#0C1622'
                },
                {
                  offset: 1,
                  color: '#06647D'
                }
              ],
              false
            )
          },
          label: {
            color: '#00E3FE'
          }
        }
      ]
    }
  },
  mounted () {
    this.myEcharts()
  },
  methods: {
    getLevelOption () {
      return [
        {
          itemStyle: {
            normal: {
              borderWidth: 0
              // gapWidth: 5 // 间距
            }
          }
        },
        {
          itemStyle: {
            normal: {
              // gapWidth: 1
            }
          }
        },
        {
          colorSaturation: [0.35, 0.5],
          itemStyle: {
            normal: {
              // gapWidth: 1,
              borderColorSaturation: 0.6
            }
          }
        }
      ]
    },
    colorMappingChange (value) {
      var levelOption = this.getLevelOption(value)
      var myChart = Vue.prototype.$echarts.init(
        document.getElementById('main1')
      )
      myChart.setOption({
        series: [
          {
            levels: levelOption
          }
        ]
      })
    },
    myEcharts () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = Vue.prototype.$echarts.init(
        document.getElementById('main1')
      )
      var formatUtil = Vue.prototype.$echarts.format
      // 指定图表的配置项和数据

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption({
        tooltip: {
          // show: false,
          formatter: function (info) {
            var value = info.value
            var treePathInfo = info.treePathInfo
            var treePath = []

            for (var i = 1; i < treePathInfo.length; i++) {
              treePath.push(treePathInfo[i].name)
            }

            return [
              '<div class="tooltip-title">' +
                formatUtil.encodeHTML(treePath.join('/')) +
                '</div>',
              '面积: ' + formatUtil.addCommas(value) + ' m²'
            ].join('')
          }
        },
        series: [
          {
            type: 'treemap',
            visibleMin: 300,
            roam: false,
            nodeClick: 'link',
            label: {
              show: true,
              formatter: '{b}',
              fontSize: 30,
              ellipsis: true // 字太多后面变省略号
            },
            itemStyle: {
              normal: {
                // borderColor: '#fff'
                borderColor: '',
                borderWidth: 0.5
              },
              emphasis: {
                label: {
                  show: true
                  // color: 'rgba(22, 90, 90)'
                },
                // color: 'black',
                borderWidth: 1,
                borderColor: '#2bfaff'
              }
            },
            levels: this.getLevelOption(),
            data: this.testData,
            breadcrumb: {
              show: false
            } // 隐藏矩形树图下面的小黑条面包屑
          }
        ]
      })
    },
    // 点击返回按钮
    return_click () {
      this.$emit('hiddenFlag', false)
    }
  }
}
</script>

<style scoped>
#cityjoin {
    width: 100%;
    height: 100%;
    /* background: green; */
    background-image: url("../../assets/images/阴影底.png");
    display: flex;
    justify-content: center;
}
/* 整体框架 */
#cityjoin > .content {
  height: 100%;
  width: 90%;
  /* background: plum; */
}
/* 导航条的框架 */
#cityjoin > .content > .menu_content {
  height: 10%;
  width: 100%;
  /* background: black; */
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 导航条 */
#cityjoin > .content > .menu_content > .menu {
  height: 40%;
  width: 100%;
  display: flex;
  float: left;
  background-image: url("../../assets/images/导航条.png");
}
#cityjoin > .content > .menu_content > .menu > button {
    margin-left: 45%;
}
/* 导航条的文字框架 */
#cityjoin > .content > .menu_content > .menu > .menu_title {
  width: 12%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: burlywood; */
}
/* 市台联的文字框架 */
#cityjoin > .content > .menu_content > .menu > .menu_title1 {
    width: 17%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: burlywood; */
}
/* 市台联的文字样式 */
#cityjoin > .content > .menu_content > .menu > .menu_title1 > span {
  color: #2bfaff;
}
/* 导航条里的文字样式 */
#cityjoin > .content > .menu_content > .menu > .menu_title > span {
  color: #ffffff;
}
/* 中间筛选框的框架 */
#cityjoin > .content > .times_select {
  width: 100%;
  height: 12%;
  display: flex;
  float: left;
  /* background: violet; */
}
/* 筛选框的整体框架 */
#cityjoin > .content > .times_select > .selectbox {
  width: 40%;
  height: 100%;
  display: flex;
  float: left;
  /* background: blueviolet; */
}
/* 筛选框的标题框架 */
#cityjoin > .content > .times_select > .selectbox > .select_title {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: burlywood; */
}
/* 筛选框的标题文字样式 */
#cityjoin > .content > .times_select > .selectbox > .select_title > span {
  color: #2bfaff;
}
/* 筛选框 */
#cityjoin > .content > .times_select > .selectbox > .select_input {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: cornflowerblue; */
}
/* 矩形树图的整体框架 */
#cityjoin > .content > .info_table {
  width: 500px;
  height: 600px;
  /* margin-top: 4rem; */
  /* background: coral; */
}
</style>
