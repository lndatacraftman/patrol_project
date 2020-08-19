<!-- 评分历程 子组件 -->
<!-- author by：zhaosiyuan -->

<template>
  <div id="gradecourse">
    <div class="grademain">
      <!-- 右边布局中的标题布局 -->
      <div class="content_title">
        <span>评分历程</span>
      </div>
      <!-- 右边布局的横线 -->
      <Divider class="divider" />
      <!-- 右边布局的统计图像布局 -->
      <div class="statistics">
          <!-- 上面的饼图的整体框架 -->
          <div class="pie_tables">
            <!-- 饼图1框架 -->
              <div class="pie_table">
                  <div class="pie_main">
                      <div class="pie_left" ref="pie1"></div>
                      <div class="pie_center">
                        <div class="pie_centerup">
                        <span>A-</span>
                      </div>
                      <div class="pie_centerdown">
                        <span>评分级别</span>
                      </div>
                      </div>
                      <div class="pie_right">
                        <div class="pie_rightup">
                          <div class="rightup1">
                            <span>75</span>
                          </div>
                          <div class="rightdown">
                            <span>达标项</span>
                          </div>
                        </div>
                        <div class="pie_rightdown">
                          <div class="rightup1">
                            <span>0</span>
                          </div>
                          <div class="rightdown">
                            <span>未达标项</span>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
              <!-- 右侧评价中框架 -->
              <div class="evaluate_ing">
                <div class="evaluate_main">
                  <span>评估中..</span>
                </div>
              </div>
          </div>
          <!-- 下面说明的整体框架 -->
          <div class="pie_title">
            <div class="title_down">
              <div class="arrows_image">
                <img src="../../assets/images/三角块.png" />
              </div>
              <div class="arrows_title">
                <div class="title_image">
                  <span>初始评分</span>
                </div>
              </div>
            </div>
            <div class="title_center">
              <img src="../../assets/images/过程箭头.png" />
            </div>
            <div class="title_down">
              <div class="arrows_image">
                <img src="../../assets/images/三角块.png" />
              </div>
              <div class="arrows_title">
                <div class="title_image">
                  <span>评价结果</span>
                </div>
              </div>
            </div>
          </div>
      </div>
      <!-- 右边布局的标题框架 -->
      <div class="content_title">
        <span>指标详情</span>
      </div>
      <!-- 右边布局的横线 -->
      <Divider />
      <!-- 右边布局的两个选择器的框架 -->
      <div class="select_input">
        <!-- 左边选择器框架 -->
        <div class="select_left">
          <!-- 选择器前面的文字框架 -->
          <div class="input_span">
            <span>一级指标</span>
          </div>
          <!-- 选择器框架 -->
          <div class="select">
            <Select v-model="model1">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
        </div>
        <!-- 右边选择器框架 -->
        <div class="select_right">
          <!-- 选择器前面的文字框架 -->
          <div class="input_span">
            <span>二级指标</span>
          </div>
          <!-- 选择器框架 -->
          <div class="select">
            <Select v-model="model1">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
        </div>
        <!-- 右边选择器 end -->
      </div>
      <!-- 右边布局中的选择器下面的指标框架 -->
      <div class="select_text">
        <!-- 指标的左边框架 -->
        <div class="left_text">
          <Tree :data="data1" class="left_tree"></Tree>
        </div>
        <div class="center_background"></div>
        <!-- 指标的右边框架 -->
        <div class="right_text">
                    <!-- 三级指标的整体框架 -->
          <div class="folding">
            <!-- 第一条三级指标的整体框架 -->
            <div class="target1">
              <!-- 三级指标的数字标号 -->
              <div class="num3">III</div>
              <!-- 中间三级指标的框架 -->
              <div class="target1_text">1、开展党组织和党员干部党性教育不扎实，开展“不忘初心、牢记使命”主题教育不认真、走过场，对群众提出的意见建议重视不够、整改不力，效果不明显。</div>
              <!-- 因子和对应的数值的框架 -->
              <div class="target1_divisor">
                <!-- 因子图片框架 -->
                <div class="change_image">
                  <img src="../../assets/images/因子.png" />
                </div>
                <!-- 因子对应的数值的框架 -->
                <div class="num">1.1</div>
              </div>
              <!-- 被折叠的内容 -->
            </div>
            <!-- 折叠的部分 -->
            <!-- <div class="show_div" v-show="showContent" ref="chart2"></div> -->
            <!-- 第二条三级指标的整体框架 -->
            <div class="target1">
              <!-- 三级指标的数字标号 -->
              <div class="num3">III</div>
              <!-- 中间三级指标的框架 -->
              <div class="target1_text">2、对党的十九大关于意识形态工作的决策部署重视不够，意识形态工作观念淡薄、责任缺失、管控不力，党员领导干部理想信念淡化，不信马列信鬼神、参加宗教迷信等活动。</div>
              <!-- 因子和对应的数值的框架 -->
              <div class="target1_divisor">
                <!-- 因子图片框架 -->
                <div class="change_image">
                  <img src="../../assets/images/因子.png" @click="Click()" />
                </div>
                <!-- 因子对应的数值的框架 -->
                <div class="num">1.1</div>
              </div>
              <!-- 被折叠的内容 -->
            </div>
            <!-- 折叠的部分 -->
            <div class="show_div" v-show="showContent" ref="chart6"></div>
            <!-- 第三条三级指标的整体框架 -->
            <div class="target1">
              <!-- 三级指标的数字标号 -->
              <div class="num3">III</div>
              <!-- 中间三级指标的框架 -->
              <div class="target1_text">3、把“四个意识”当口号，对大是大非问题没有立场、没有态度、无动于衷、置身事外，对违反政治纪律政治规矩等错误思想和言行不报告、不抵制、不斗争，放松警惕，搞无原则一团和气。</div>
              <!-- 因子和对应的数值的框架 -->
              <div class="target1_divisor">
                <!-- 因子图片框架 -->
                <div class="change_image">
                  <img src="../../assets/images/因子.png" />
                </div>
                <!-- 因子对应的数值的框架 -->
                <div class="num">1.1</div>
              </div>
              <!-- 被折叠的内容 -->
            </div>
            <!-- 折叠的部分 -->
            <!-- <div class="show_div" v-show="showContent" ref="chart2"></div> -->
            <!-- 第四条三级指标的整体框架 -->
            <div class="target1">
              <!-- 三级指标的数字标号 -->
              <div class="num3">III</div>
              <!-- 中间三级指标的框架 -->
              <div class="target1_text">4、越权决策、擅作主张、我行我素；存在搞非组织活动、与组织讨价还价、违背组织决定、欺骗和对抗组织等问题。</div>
              <!-- 因子和对应的数值的框架 -->
              <div class="target1_divisor">
                <!-- 因子图片框架 -->
                <div class="change_image">
                  <img src="../../assets/images/因子.png" />
                </div>
                <!-- 因子对应的数值的框架 -->
                <div class="num">1.1</div>
              </div>
              <!-- 被折叠的内容 -->
            </div>
            <!-- 折叠的部分 -->
            <!-- <div class="show_div" v-show="showContent" ref="chart2"></div> -->
          </div>
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
      showContent: false,
      cityList: [
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
      // isCollapsed: false,
      data1: [
        // 树1
        {
          title: '党的意识、政治建设',
          expand: false,
          children: [
            {
              title: '学习贯彻习近平书记重要讲话和指示批示精神情况',
              expand: false,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: '执行和落实制度情况',
              expand: false,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        },
        // 树2
        {
          title: '担当作为、履行职责使命',
          expand: false,
          children: [
            {
              title: 'parent 1-1',
              expand: false,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: false,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        },
        // 树3
        {
          title: '履行全面从严治党“两个责任”',
          expand: false,
          children: [
            {
              title: 'parent 1-1',
              expand: false,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: false,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        },
        // 树4
        {
          title: '落实深化改革要求',
          expand: false,
          children: [
            {
              title: 'parent 1-1',
              expand: false,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: false,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        },
        // 树5
        {
          title: '班子建设和队伍建设',
          expand: false,
          children: [
            {
              title: 'parent 1-1',
              expand: false,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: false,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        },
        // 树6
        {
          title: '机关党建和基层党组织建设',
          expand: false,
          children: [
            {
              title: 'parent 1-1',
              expand: false,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: false,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted () {
    const data = {
      nodes: [{
        name: '操作系统集团',
        category: 0
      }, {
        name: '浏览器有限公司',
        category: 0
      }, {
        name: 'HTML科技',
        category: 0
      }, {
        name: 'JavaScript科技',
        category: 0
      }, {
        name: 'CSS科技',
        category: 0
      }, {
        name: 'Chrome',
        category: 1
      }, {
        name: 'IE',
        category: 1
      }, {
        name: 'Firefox',
        category: 1
      }, {
        name: 'Safari',
        category: 1
      }],

      links: [{
        source: '浏览器有限公司',
        target1: '操作系统集团',
        name: '参股'
      }, {
        source: 'HTML科技',
        target1: '浏览器有限公司',
        name: '参股'
      }, {
        source: 'CSS科技',
        target1: '浏览器有限公司',
        name: '参股'
      }, {
        source: 'JavaScript科技',
        target1: '浏览器有限公司',
        name: '参股'
      }, {
        source: 'Chrome',
        target1: '浏览器有限公司',
        name: '董事'
      }, {
        source: 'IE',
        target1: '浏览器有限公司',
        name: '董事'
      }, {
        source: 'Firefox',
        target1: '浏览器有限公司',
        name: '董事'
      }, {
        source: 'Safari',
        target1: '浏览器有限公司',
        name: '董事'
      }, {
        source: 'Chrome',
        target1: 'JavaScript科技',
        name: '法人'
      }]
    }

    const color1 = '#006acc'
    const color2 = '#ff7d18'
    const color3 = '#10a050'

    data.nodes.forEach(node => {
      if (node.category === 0) {
        node.symbolSize = 100
        node.itemStyle = {
          color: color1
        }
      } else if (node.category === 1) {
        node.itemStyle = {
          color: color2
        }
      }
    })

    data.links.forEach(link => {
      link.label = {
        align: 'center',
        fontSize: 12
      }

      if (link.name === '参股') {
        link.lineStyle = {
          color: color2
        }
      } else if (link.name === '董事') {
        link.lineStyle = {
          color: color1
        }
      } else if (link.name === '法人') {
        link.lineStyle = {
          color: color3
        }
      }
    })

    const categories = [{
      name: '公司',
      itemStyle: {
        color: color1
      }
    },
    {
      name: '董事',
      itemStyle: {
        color: color2
      }
    }]
    const option6 = {
      title: {
        text: '指标因子'
      },
      // legend: [{
      //   // selectedMode: 'single',
      //   data: categories.map(x => x.name)
      //   // icon: 'circle'
      // }],
      series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 58,
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
              fontSize: 20
            },
            formatter (x) {
              return x.data.name
            }
          }
        },
        label: {
          show: true
        },
        force: {
          repulsion: 2000,
          edgeLength: 120
        },
        data: data.nodes,
        links: data.links
      }]
    }
    this.initChart(this.$refs.chart6, option6)
    const option3 = {
      title: {
        text: '80%',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#0580f2',
          fontSize: '20'
        }
      },
      color: ['rgba(176, 212, 251, 1)'],

      series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['50%', '66%'],
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        hoverAnimation: false,
        data: [{
          value: 80,
          name: '01',
          itemStyle: {
            normal: {
              color: { // 完成的圆环的颜色
                colorStops: [{
                  offset: 0,
                  color: '#00cefc' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#367bec' // 100% 处的颜色
                }]
              },
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          }
        }, {
          name: '02',
          value: 20
        }]
      }]
    }
    this.initChart(this.$refs.pie1, option3)
  },
  methods: {
    initChart (container, option) {
      const myChart = echarts.init(container)
      myChart.setOption(option)
    },
    Click: function () {
      // const temp = this.message
      // temp[index].showContent = !temp[index].showContent
      this.showContent = !this.showContent
    }
  }
}
</script>

<style scoped>
#gradecourse {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.expand-row{
        margin-bottom: 16px;
    }
#gradecourse > .grademain {
  width: 90%;
  height: 100%;
  /* background: yellowgreen; */
}
/* * 右边布局的标题框架 */
.content_title {
  width: 100%;
  height: 5%;
  /* background: pink; */
}
/* 右边布局的统计图像的框架 */
.statistics {
  width: 100%;
  height: 25%;
  /* background: darkcyan; */
}
/* 饼图的整体框架 */
.statistics > .pie_tables {
    width: 100%;
    height: 60.5%;
    display: flex;
    float: left;
    /* background: cornflowerblue; */
}
.statistics > .pie_tables > .pie_table {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* background: cornsilk; */
}
/* 饼状图 */
.statistics > .pie_tables > .pie_table > .pie_main {
    width: 26.2rem;
    height: 8.4rem;
    display: flex;
    float: left;
    background-image: url('../../assets/images/评价框.png');
    /* background: yellowgreen; */
}
/* 饼状图左边的布局 */
.statistics > .pie_tables > .pie_table > .pie_main > .pie_left {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: #409eff; */
}
/* 饼状图中间布局 */
.statistics > .pie_tables > .pie_table > .pie_main > .pie_center {
  width: 33%;
  height: 100%;
}
/* 评分级别的框架 */
.statistics > .pie_tables > .pie_table > .pie_main > .pie_center > .pie_centerup {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 评分A样式 */
.statistics > .pie_tables > .pie_table > .pie_main > .pie_center > .pie_centerup > span {
  font-family: "Helvetica Neue";
  font-size: 40px;
  color:#409eff;
  /* background: coral; */
}
/* 评分级别的框架 */
.statistics > .pie_tables > .pie_table > .pie_main > .pie_center >.pie_centerdown {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: cornflowerblue; */
}
/* 达标项和未达标项的整体框架 */
.statistics > .pie_tables > .pie_table > .pie_main > .pie_right {
  width: 37%;
  height: 100%;
  /* background: cornflowerblue; */
}
/* 达标项的框架 */
.statistics > .pie_tables > .pie_table > .pie_main > .pie_right > .pie_rightup {
  width: 100%;
  height: 50%;
  /* background: cyan; */
}
/* 评价中的框架 */
.statistics > .pie_tables > .evaluate_ing {
  width: 50%;
  height: 100%;
  /* background: cornflowerblue; */
}
/* 评价中 */
.statistics > .pie_tables > .evaluate_ing > .evaluate_main {
  width: 26.2rem;
  height: 8.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/images/评价中.png');
}
/* .statistics > .pie_tables > .evaluate_ing > .evaluate_main > span {
} */
/* 达标项数字的框架 */
.rightup1 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: darkgray; */
}
/* 达标项文字的框架 */
 .rightdown {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: pink; */
}
/* 未达标项的框架 */
.statistics > .pie_tables > .pie_table > .pie_main > .pie_right > .pie_rightdown {
  width: 100%;
  height: 50%;
  /* background: cyan; */
}
/* 右边布局的两个选择器的整体框架 */
.select_input {
  width: 100%;
  height: 5%;
  display: flex;
  float: left;
  /* background: darkkhaki; */
}
/* 左边选择器的框架 */
.select_input > .select_left {
  width: 27%;
  height: 100%;
  display: flex;
  float: left;
  /* background: cornflowerblue; */
}
/* 选择器的文字框架 */
.input_span {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  /* background: darkorchid; */
}
/* 选择框的框架 */
.select {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  /* background: cornflowerblue; */
}
/* 右边选择器的框架 */
.select_input > .select_right {
  width: 27%;
  height: 100%;
  display: flex;
  float: left;
  margin-left: 5%;
  /* background: cornflowerblue; */
}
/* 右边布局的指标文字部分框架 */
.select_text {
  width: 100%;
  height: 50%;
  display: flex;
  float: left;
  margin-top: 1rem;
  /* background: cornflowerblue; */
}
/* 左边指标的框架 */
.select_text > .left_text {
  width: 39.5%;
  height: 100%;
  overflow: overlay;
  /* background: darkkhaki; */
}
.select_text > .center_background {
  width: 0.5%;
  height: 100%;
  background-image: url('../../assets/images/阴影条.png');
}
/* 右边指标的框架 */
.select_text > .right_text {
  width: 60%;
  height: 100%;
  /* background: rgb(109, 206, 203); */
}
/* 下面说明的框架 */
.statistics > .pie_title {
  width: 77.5%;
  height: 39.5%;
  margin-left: 4.3rem;
  display: flex;
  float: left;
  /* background: darkseagreen; */
}
.pie_title > .title_down {
  width: 50%;
  height: 100%;
  /* background: gold; */
}
.pie_title > .title_down > .arrows_image {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: gray; */
}
.pie_title > .title_down > .arrows_image > img {
  width: 1.2rem;
  height: 1.2rem;
}
.pie_title > .title_down > .arrows_title {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pie_title > .title_down > .arrows_title > .title_image {
  width: 6rem;
  height: 1.5rem;
  border-radius: 15px;
  -moz-border-radius: 15px;
  background: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.statistics > .pie_title > .title_center {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* background: goldenrod; */
}
.statistics > .pie_title > .title_center > img {
  width: 2rem;
  height: 1rem;
  margin-bottom: 0.3rem;
}
.select_text > .left_text ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background-color: #f5f5f5;
}
.select_text > .left_text::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #f5f5f5;
}
.select_text > .left_text::-webkit-scrollbar-thumb {
    border-radius: 4px;
    height: 20px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f2f2f2;
}
/* 三级指标的整体框架 */
.folding {
  width: 100%;
  height: 100%;
  overflow: overlay;
  border: 1px solid #ccc;
  /* background: aquamarine; */
}
/* 滚动条 */
.folding::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background-color: #f5f5f5;
}
.folding::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #f5f5f5;
}
.folding::-webkit-scrollbar-thumb {
    border-radius: 4px;
    height: 20px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f2f2f2;
}
/* 第一条三级指标的整体框架 */
.folding > .target1 {
  width: 100%;
  height: 80px;
  /* background: cadetblue; */
  display: flex;
  float: left;
}
/* 三级指标的数字标号 */
.folding > .target1 > .num3 {
  width: 10%;
  height: 100%;
  background: #cecece;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 中间三级指标的框架 */
.folding > .target1 > .target1_text {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(243, 243, 243);
}
/* 因子和对应的数值的框架 */
.folding > .target1 > .target1_divisor {
  width: 15%;
  height: 100%;
  display: flex;
  float: left;
  background: white;
}
/* 因子图片的框架 */
.folding > .target1 > .target1_divisor > .change_image {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: pink; */
}
/* 因子对应的数值的框架 */
.folding > .target1 > .target1_divisor > .num {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: plum; */
}
/* 被折叠的内容 */
.show_div {
  width: 530px;
  height: 300px;
  /* background: chocolate; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 200px; */
}
</style>
