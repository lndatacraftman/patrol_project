<!-- 政治聚焦子组件 -->

<template>
<div id="politicalfocus">
    <!-- 整体页面的框架 -->
    <div class="politicalfocus_countent">
        <!-- 导航条的框架 -->
        <div class="appbar">
            <div class="appbar_title">
                <span>政治聚焦</span>
            </div>
        </div>
        <!-- 筛选框的框架 -->
        <div class="select_box">
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
        <!-- echarts图的框架 -->
        <div class="relation_box" id="relationmain"></div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

export default {
  data () {
    return {
      nodes: [{
        name: '党的意识、' + '\n' + '' + '\n' + '政治建设',
        category: 0
      }, {
        name: '指标',
        category: 0
      }, {
        name: '机关党建和基' + '\n' + '' + '\n' + '层党组织建设',
        category: 0
      }, {
        name: '履行全面从严' + '\n' + '' + '\n' + '治党“两个责任”',
        category: 0
      }, {
        name: '担当作为、' + '\n' + '' + '\n' + '履行职责使命',
        category: 0
      }, {
        name: '落实深化' + '\n' + '' + '\n' + '改革要求',
        category: 0
      }, {
        name: '班子建设' + '\n' + '' + '\n' + '队伍建设',
        category: 0
      },
      {
        name: '学习贯彻习近平总' + '\n' + '书记重要讲话和指' + '\n' + '示批示精神情况',
        category: 1
      },
      {
        name: '执行和落实制度情况',
        category: 1
      },
      {
        name: '履行核心职能情况',
        category: 1
      },
      {
        name: '党组（党委）落实' + '\n' + '全面从严治党' + '\n' + '主体责任情况',
        category: 1
      },
      {
        name: '派驻纪检监察组' + '\n' + '（内设机关纪委）' + '\n' + '履行监督责任情况',
        category: 1
      },
      {
        name: '整改落实情况，' + '\n' + '是否存在整改不到位，' + '\n' + '虚假整改等突出问题',
        category: 1
      },
      {
        name: '机关作风建设' + '\n' + '特别是整改' + '\n' + '形式主义、' + '\n' + '官僚主义情况',
        category: 1
      },
      {
        name: '权力监督制约和' + '\n' + '防范廉政风险情况',
        category: 1
      },
      {
        name: '防范化解重大' + '\n' + '风险情况',
        category: 1
      },
      {
        name: '选人用人和' + '\n' + '队伍建设情况',
        category: 1
      },
      {
        name: '干部担当作为情况',
        category: 1
      },
      {
        name: '基层党组织建设情况',
        category: 1
      }],

      links: [{
        source: '指标',
        target: '党的意识、' + '\n' + '' + '\n' + '政治建设',
        name: '一级指标'
      }, {
        source: '机关党建和基' + '\n' + '' + '\n' + '层党组织建设',
        target: '指标',
        name: '一级指标'
      }, {
        source: '指标',
        target: '担当作为、' + '\n' + '' + '\n' + '履行职责使命',
        name: '一级指标'
      }, {
        source: '指标',
        target: '履行全面从严' + '\n' + '' + '\n' + '治党“两个责任”',
        name: '一级指标'
      }, {
        source: '指标',
        target: '落实深化' + '\n' + '' + '\n' + '改革要求',
        name: '一级指标'
      }, {
        source: '班子建设' + '\n' + '' + '\n' + '队伍建设',
        target: '指标',
        name: '一级指标'
      }, {
        source: '党的意识、' + '\n' + '' + '\n' + '政治建设',
        target: '学习贯彻习近平总' + '\n' + '书记重要讲话和指' + '\n' + '示批示精神情况',
        name: '二级指标'
      },
      {
        source: '党的意识、' + '\n' + '' + '\n' + '政治建设',
        target: '执行和落实制度情况',
        name: '二级指标'
      }, {
        source: '担当作为、' + '\n' + '' + '\n' + '履行职责使命',
        target: '履行核心职能情况',
        name: '二级指标'
      },
      {
        source: '履行全面从严' + '\n' + '' + '\n' + '治党“两个责任”',
        target: '党组（党委）落实' + '\n' + '全面从严治党' + '\n' + '主体责任情况',
        name: '二级指标'
      },
      {
        source: '履行全面从严' + '\n' + '' + '\n' + '治党“两个责任”',
        target: '派驻纪检监察组' + '\n' + '（内设机关纪委）' + '\n' + '履行监督责任情况',
        name: '二级指标'
      },
      {
        source: '履行全面从严' + '\n' + '' + '\n' + '治党“两个责任”',
        target: '整改落实情况，' + '\n' + '是否存在整改不到位，' + '\n' + '虚假整改等突出问题',
        name: '二级指标'
      }, {
        source: '履行全面从严' + '\n' + '' + '\n' + '治党“两个责任”',
        target: '机关作风建设' + '\n' + '特别是整改' + '\n' + '形式主义、' + '\n' + '官僚主义情况',
        name: '二级指标'
      },
      {
        source: '履行全面从严' + '\n' + '' + '\n' + '治党“两个责任”',
        target: '权力监督制约和' + '\n' + '防范廉政风险情况',
        name: '二级指标'
      },
      {
        source: '落实深化' + '\n' + '' + '\n' + '改革要求',
        target: '防范化解重大' + '\n' + '风险情况',
        name: '二级指标'
      }, {
        source: '落实深化' + '\n' + '' + '\n' + '改革要求',
        target: '落实改革情况',
        name: '二级指标'
      },
      {
        source: '班子建设和队伍建设',
        target: '领导班子建设情况',
        name: '二级指标'
      },
      {
        source: '班子建设' + '\n' + '' + '\n' + '队伍建设',
        target: '选人用人和' + '\n' + '队伍建设情况',
        name: '二级指标'
      }, {
        source: '班子建设' + '\n' + '' + '\n' + '队伍建设',
        target: '干部担当作为情况',
        name: '二级指标'
      },
      {
        source: '机关党建和基' + '\n' + '' + '\n' + '层党组织建设',
        target: '机关党建情况',
        name: '二级指标'
      },
      {
        source: '机关党建和基' + '\n' + '' + '\n' + '层党组织建设',
        target: '基层党组织建设情况',
        name: '二级指标'
      }],
      color1: '#006acc',
      color2: '#ff7d18'
    }
  },
  methods: {
    myEcharts () {
      // 初始化
      var myChart = Vue.prototype.$echarts.init(
        document.getElementById('relationmain')
      )
      this.nodes.forEach(node => {
        if (node.category === 0) {
          node.symbolSize = 70
          node.itemStyle = {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0.5,
                color: '#051c3d' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#006acc' // 100% 处的颜色(蓝)
              }],
              global: false
            }
          }
        } else if (node.category === 1) {
          node.symbolSize = 70
          node.itemStyle = {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0.5,
                color: '#051c3d' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'orange' // 100% 处的颜色(黄)
              }],
              global: false
            }
          }
        }
      })
      this.links.forEach(link => {
        link.label = {
          align: 'center',
          fontSize: 10
        }
        if (link.name === '二级指标') {
          link.lineStyle = {
            color: this.color2
          }
        } else if (link.name === '一级指标') {
          link.lineStyle = {
            color: this.color1
          }
        }
      })

      const categories = [{}, {}]
      myChart.setOption({
        backgroundColor: '#051c3d',
        series: [{
          type: 'graph',
          layout: 'force',
          symbolSize: 25,
          draggable: true,
          roam: true,
          focusNodeAdjacency: true,
          categories: categories,
          edgeSymbol: ['', 'arrow'],
          // edgeSymbolSize: [80, 10],
          edgeLabel: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 7
              },
              formatter (x) {
                return x.data.name
              }
            }
          },
          label: {
            normal: {
              show: true,
              color: 'white',
              textStyle: {
                fontSize: 9
              }
            }
          },
          force: {
            repulsion: 600,
            edgeLength: 50
          },
          data: this.nodes,
          links: this.links
        }]
      })
    }
  },
  mounted () {
    this.myEcharts()
  }
}
</script>

<style scoped>
#politicalfocus {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: url('../../assets/images/create5/深阴影背景底.jpg');
    /* background: aquamarine; */
}
/* 整体页面的框架 */
#politicalfocus > .politicalfocus_countent {
    width: 90%;
    height: 100%;
    /* background: blueviolet; */
}
/* 上面导航条的框架 */
#politicalfocus > .politicalfocus_countent > .appbar {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    /* background: cadetblue; */
}
/* 导航条里的标题的框架 */
#politicalfocus > .politicalfocus_countent > .appbar > .appbar_title {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    background-image: url('../../assets/images/create5/导航条.png');
}
#politicalfocus > .politicalfocus_countent > .appbar > .appbar_title > span {
    color: #2bfaff;
    margin-left: 1.5rem;
}
/* 筛选框的框架 */
#politicalfocus > .politicalfocus_countent > .select_box {
    width: 100%;
    height: 10%;
    display: flex;
    float: left;
    /* background: cornflowerblue; */
}
/* 筛选框的整体框架 */
#politicalfocus > .politicalfocus_countent > .select_box > .selectbox {
    width: 40%;
    height: 100%;
    display: flex;
    float: left;
}
/* 筛选框的标题框架 */
#politicalfocus > .politicalfocus_countent > .select_box > .selectbox > .select_title {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 筛选框的标题文字样式 */
#politicalfocus > .politicalfocus_countent > .select_box > .selectbox > .select_title > span {
  color: #2bfaff;
  font-family: '思源黑体';
  /* font-size: 18px; */
}
/* 筛选框 */
#politicalfocus > .politicalfocus_countent > .select_box > .selectbox > .select_input {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: cornflowerblue; */
}
/* 下面echarts关系图的框架 */
#politicalfocus > .politicalfocus_countent > .relation_box {
    width: 100%;
    height: 80%;
    display: flex;
    float: left;
    /* display: flex;
    position: relative; */
    background: bisque;
}
</style>
