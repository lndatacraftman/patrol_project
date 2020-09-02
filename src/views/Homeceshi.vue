<!-- App内的首页组件，在这里面写首页内容 -->
<!-- author by: zhaosiyuan -->

<template>
  <div id="creat4">
    <div ref="chart" class="content"></div>
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  name: 'Create4',
  methods: {
    initChart (container, option) {
      const myChart = echarts.init(container)
      myChart.setOption(option)
    }
  },
  mounted () {
    const dataLink = [{
      source: '指标',
      target: '党的意识、' + '\n' + '政治建设',
      value: 66

    },
    {
      source: '指标',
      target: '担当作为、' + '\n' + '履行职责使命',
      value: 100
    },
    {
      source: '指标',
      target: '履行全面从严治党' + '\n' + '“两个责任”',
      value: 88
    },
    {
      source: '指标',
      target: '落实深化改革要求',
      value: 100
    },
    {
      source: '指标',
      target: '班子建设和' + '\n' + '队伍建设',
      value: 88
    },
    {
      source: '指标',
      target: '机关党建和' + '\n' + '基层党组织建设',
      value: 88
    },
    {
      source: '党的意识、' + '\n' + '政治建设',
      target: '学习贯彻' + '\n' + '习近平书记' + '\n' + '重要讲话和指示' + '\n' + '批示精神情况',
      value: 12
    },
    {
      source: '党的意识、' + '\n' + '政治建设',
      target: '执行和落实' + '\n' + '制度情况',
      value: 18
    },
    {
      source: '担当作为、' + '\n' + '履行职责使命',
      target: '履行核心' + '\n' + '职能情况',
      value: 50
    },
    {
      source: '履行全面从严治党' + '\n' + '“两个责任”',
      target: '党组（党委）落实' + '\n' + '全面从严治党' + '\n' + '主体责任情况',
      value: 23
    },
    {
      source: '履行全面从严治党' + '\n' + '“两个责任”',
      target: '派驻纪检监察组' + '\n' + '（内设机关纪委）' + '\n' + '履行监督责任情况',
      value: 19
    },
    {
      source: '履行全面从严治党' + '\n' + '“两个责任”',
      target: '整改落实情况，' + '\n' + '是否存在整改' + '\n' + '不到位，虚假' + '\n' + '整改等突出问题',
      value: 6
    }, {
      source: '履行全面从严治党' + '\n' + '“两个责任”',
      target: '机关作风建' + '\n' + '设特别是整改' + '\n' + '形式主义、' + '\n' + '官僚主义情况',
      value: 8
    },
    {
      source: '履行全面从严治党' + '\n' + '“两个责任”',
      target: '权力监督制约和' + '\n' + '防范廉政风险情况',
      value: 19
    },
    {
      source: '落实深化改革要求',
      target: '防范化解' + '\n' + '重大风险情况',
      value: 6
    }, {
      source: '落实深化改革要求',
      target: '落实改革情况',
      value: 8
    },
    {
      source: '班子建设和' + '\n' + '队伍建设',
      target: '领导班子' + '\n' + '建设情况',
      value: 19
    },
    {
      source: '班子建设和' + '\n' + '队伍建设',
      target: '选人用人和' + '\n' + '队伍建设情况',
      value: 6
    }, {
      source: '班子建设和' + '\n' + '队伍建设',
      target: '干部担当作为情况',
      value: 8
    },
    {
      source: '机关党建和' + '\n' + '基层党组织建设',
      target: '机关党建情况',
      value: 19
    },
    {
      source: '机关党建和' + '\n' + '基层党组织建设',
      target: '基层党组织' + '\n' + '建设情况',
      value: 19
    }
    ]
    const dataSerise = [{
      name: '指标',
      symbolSize: 120,
      draggable: true,
      value: 0,
      category: 0,
      itemStyle: {
        normal: {
          borderColor: '#04f2a7',
          borderWidth: 4,
          shadowBlur: 10,
          shadowColor: '#04f2a7',
          color: '#001c43'
        }
      }
    }]
    for (var i = 0; i < dataLink.length; i++) {
      const dataChild = {
        name: '',
        symbolSize: 0,
        value: 0,
        category: 0,
        itemStyle: {
          normal: {
            borderColor: '#82dffe',
            borderWidth: 4,
            shadowBlur: 10,
            shadowColor: '#04f2a7',
            color: '#001c43'
          }
        }
      }
      dataChild.value = dataLink[i].value
      dataChild.name = dataLink[i].target
      if (dataLink[i].source === '指标') {
        dataSerise[0].value += dataLink[i].value
        dataChild.symbolSize = 100
        dataChild.category = 1
        dataChild.itemStyle.normal.borderColor = '#5BD1FF'
      } else if (dataLink[i].source === '党的意识、' + '\n' + '政治建设' || dataLink[i].source === '担当作为、' + '\n' + '履行职责使命' || dataLink[i].source === '履行全面从严治党' + '\n' + '“两个责任”' || dataLink[i].source === '落实深化改革要求' || dataLink[i].source === '班子建设和' + '\n' + '队伍建设' || dataLink[i].source === '机关党建和' + '\n' + '基层党组织建设') {
        dataChild.symbolSize = 80
        dataChild.category = 2
        dataChild.itemStyle.normal.borderColor = '#b457ff'
      }
      dataSerise.push(dataChild)
    }
    const option = {
      backgroundColor: '#black',
      tooltip: {
        trigger: 'item',
        formatter: (item) => {
          return item.name + ':' + item.data.value
        }
      },
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      color: ['#83e0ff', '#45f5ce', '#b158ff'],
      series: [{
        type: 'graph',
        layout: 'force',
        force: {
          repulsion: 1000,
          edgeLength: 50
        },
        roam: true,
        label: {
          normal: {
            show: true
          }
        },
        data: dataSerise,
        links: dataLink,
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 5,
            curveness: 0
          }
        },
        categories: [{
          name: '0'
        },
        {
          name: '1'
        },
        {
          name: '2'
        }
        ]
      }]
    }
    this.initChart(this.$refs.chart, option)
  }
}
</script>
<style scoped>
#creat4 {
  background: pink;
  width: 100%;
  height: 100%;
  /* width: 600px;
  height: 700px; */
}
.content {
  width: 1000px;
  height: 500px;
}
</style>
