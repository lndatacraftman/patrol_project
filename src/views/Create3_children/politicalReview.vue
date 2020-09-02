<template>
  <div id="politicalreview">
    <div class="main">
      <!-- 上面导航条的布局 -->
      <div class="main_up">
        <!-- 前面的筛选框的布局 -->
        <div class="select_twice">
          <div class="select_span">届次</div>
          <div class="select_box">
            <Select v-model="model1" size="small">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
        </div>
        <!-- 前面的筛选框的布局 -->
        <div class="select_twice">
          <div class="select_span">轮次</div>
          <div class="select_box">
            <Select v-model="model1" size="small">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
        </div>
        <!-- 后面的筛选框的布局 -->
        <div class="select_third">
          <div class="select_span">类别</div>
          <div class="select_box">
            <Select v-model="model1" size="small">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
        </div>
      </div>
      <!-- 政治巡查框架 -->
      <div class="main_center">
        <img src="../../assets/images/create3/右.png" />
        <span>政治巡查评价</span>
        <img src="../../assets/images/create3/左.png" />
      </div>
      <!-- 进度条框架 -->
      <div class="main_progress">
        <span>A+</span>
        <img src="../../assets/images/create3/进度条.png" />
        <span>A--</span>
      </div>
      <!-- echarts关系图框架 -->
      <div class="main_down" ref="down"></div>
      <!-- 地图背景框架 -->
      <div class="main_map">
        <img src="../../assets/images/create3/光效地图.png" />
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {}
  },
  methods: {
    initChart (container, option) {
      const myChart = echarts.init(container)
      myChart.setOption(option)
    }
  },
  mounted () {
    var plantCap = [{
      name: '政治建设',
      value: '党的意识' + '\n' + ''
    }, {
      name: '党“两个责任”',
      value: '履行全面从严治' + '\n' + ''
    }, {
      name: '改革要求',
      value: '落实深化' + '\n' + ''
    }, {
      name: '队伍建设',
      value: '班子建设' + '\n' + ''
    }, {
      name: '层党组织建设',
      value: '机关党建和基' + '\n' + ''
    }, {
      name: '履行职责使命',
      value: '担当作为、' + '\n' + ''
    }]
    var datalist = [{
      offset: [56, 48],
      symbolSize: 80, // 党的意识圈圈的大小
      color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(67, 186, 255, 0)'
      }, {
        offset: 1,
        color: 'rgb(67, 186, 255)'
      }])

    }, {
      offset: [30, 70],
      symbolSize: 100, // 履行全面圈圈的大小
      color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(67, 186, 255, 0)'
      }, {
        offset: 1,
        color: 'rgb(67, 186, 255)'
      }])
    }, {
      offset: [5, 43],
      symbolSize: 60, // 落实深化圈圈的大小
      color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(27, 96, 255, 0)'
      }, {
        offset: 1,
        color: 'rgb(27, 96, 255)'
      }])

    }, {
      offset: [93, 30],
      symbolSize: 65, // 班子建设圈圈的大小
      color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(48, 191, 191, 0)'
      }, {
        offset: 1,
        color: 'rgb(48, 191, 191)'
      }])
    }, {
      offset: [26, 25],
      symbolSize: 85, // 机关党圈圈的大小
      color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(0, 166, 166, 0)'
      }, {
        offset: 1,
        color: 'rgb(0, 166, 166)'
      }])
    }, {
      offset: [75, 75],
      symbolSize: 80, // 担当行为圈圈的大小
      color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        offset: 0,
        color: 'rgba(84, 136, 255, 0)'
      }, {
        offset: 1,
        color: 'rgb(84, 136, 255)'
      }])

    }]

    var datas = []
    for (var i = 0; i < plantCap.length; i++) {
      var item = plantCap[i]
      var itemToStyle = datalist[i]
      datas.push({
        name: item.value + '\n' + item.name,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
          normal: {
            textStyle: {
              fontSize: 10, // 圈圈里面字的大小
              color: '#2bfaff', // 圈圈里面字的颜色
              fontFamily: '阿里汉仪智能黑体 Regular'
            }
          }
        },
        itemStyle: {
          normal: {
            color: itemToStyle.color,
            opacity: itemToStyle.opacity
          }
        }
      })
    }
    const option = {
      // backgroundColor: '#06173a',
      // background: src('../../assets/images/create3/分析评价系统-17.png'),
    //   backgroundColor:
    //  new echarts.graphic.RadialGradient(0.2, 0.2, 0.2, [{
    //    offset: 0, color: '#cc0099' // 0% 处的颜色
    //  }, {
    //    offset: 1, color: '#99ff99' // 100% 处的颜色
    //  }], false),
      grid: {
        show: false,
        top: 10,
        bottom: 10
      },

      xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        nameLocation: 'middle',
        nameGap: 5
      }],

      yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30
      }],
      series: [{
        type: 'effectScatter', // scatter
        symbol: 'circle',
        symbolSize: 120,
        label: {
          normal: {
            show: true,
            formatter: '{b}',
            color: '#FFF',
            lineHeight: 15,
            textStyle: {
              fontSize: '30'
            }
          }
        },
        itemStyle: {
          normal: {
            borderWidth: '1',
            borderType: 'solid',
            borderColor: '#00ffff',
            shadowColor: 'rgba(0, 0, 0, .6)',
            shadowBlur: 10

          }
        },
        data: datas
      }]

    }
    this.initChart(this.$refs.down, option)
  }
}
</script>

<style scoped>
#politicalreview {
  width: 100%;
  height: 100%;
  /* background: rgb(191, 255, 127); */
}
/* 整体布局 */
#politicalreview > .main {
  width: 100%;
  height: 100%;
}
/* 上面导航条的框架 */
#politicalreview > .main > .main_up {
  width: 100%;
  height: 10%;
  display: flex;
  float: left;
  /* background: darkslateblue; */
}
#politicalreview > .main > .main_up > .select_twice {
  width: 30%;
  height: 100%;
  display: flex;
  float: left;
  /* background: darkturquoise; */
}
#politicalreview > .main > .main_up > .select_third {
  width: 40%;
  height: 100%;
  display: flex;
  float: left;
  /* background: honeydew; */
}
#politicalreview > .main > .main_up > .select_twice > .select_span {
  width: 30%;
  height: 100%;
  color: #2bfaff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: hotpink; */
}
#politicalreview > .main > .main_up > .select_twice > .select_box {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#politicalreview > .main > .main_up > .select_third > .select_span {
  width: 20%;
  height: 100%;
  color: #2bfaff;
  display: flex;
  align-items: center;
  justify-content: center;
}
#politicalreview > .main > .main_up > .select_third > .select_box {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#politicalreview > .main > .main_center {
  width: 100%;
  height: 5%;
  /* background: chocolate; */
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
}
#politicalreview > .main > .main_center >span {
  color: #2bfaff;
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.6666rem;
}
#politicalreview > .main > .main_progress {
  width: 100%;
  height: 5%;
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  /* background: #2bfaff; */
}
#politicalreview > .main > .main_progress > img {
  width: 85%;
  margin-left: 2rem;
}
#politicalreview > .main > .main_progress > span {
  color: #2bfaff;
  font-size: 1.666rem;
}
#politicalreview > .main > .main_down {
  width: 100%;
  height: 70%;
  /* background: #2bfaff; */
  display: flex;
  float: left;
  position: relative;
}
#politicalreview > .main > .main_map {
  width: 100%;
  height: 40%;
  display: flex;
  float: left;
  position: relative;
  bottom: 37rem;
  right: 5rem;
}
#politicalreview > .main > .main_map >img {
  width: 60rem;
  height: 45rem;
}
</style>
