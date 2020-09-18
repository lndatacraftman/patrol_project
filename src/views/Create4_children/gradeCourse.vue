<!-- 市台联评分历程 子组件 -->
<!-- author by：zhaosiyuan -->

<template>
  <div id="gradecourse">
    <div class="grademain">
      <!-- 标题布局 -->
      <div class="content_title">
        <span>评分历程</span>
      </div>
      <!-- 横线 -->
      <hr />
      <!-- 统计图像布局 -->
      <div class="statistics">
        <!-- 上面的饼图的整体框架 -->
        <div class="pie_tables">
          <!-- 饼图1框架 -->
          <div class="pie_table">
            <div class="pie_main">
              <div class="pie_left" ref="pie1"></div>
              <div class="pie_center">
                <div class="pie_centerup">
                  <span>{{ rate.level }}</span>
                </div>
                <div class="pie_centerdown">
                  <span>评分级别</span>
                </div>
              </div>
              <div class="pie_right">
                <div class="pie_rightup">
                  <div class="rightup1">
                    <span>{{ rate.qualifiedNumber }}</span>
                  </div>
                  <div class="rightdown">
                    <span>达标项</span>
                  </div>
                </div>
                <div class="pie_rightdown">
                  <div class="rightup1">
                    <span>{{ rate.substandardNumber }}</span>
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
              <span>{{ rate.score }}分</span>
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
      <!-- 标题框架 -->
      <div class="content_title">
        <span>指标详情</span>
      </div>
      <!-- 横线 -->
      <hr />
      <!-- 两个选择器的框架 -->
      <div class="select_input">
        <!-- 左边选择器框架 -->
        <div class="select_left">
          <!-- 选择器前面的文字框架 -->
          <div class="input_span">
            <span>一级指标</span>
          </div>
          <!-- 选择器框架 -->
          <div class="select">
            <i-select
              :model.sync="oneIndexSelectVal"
              @on-change="oneIndexChange"
            >
              <Option
                v-for="(item, index) in indexList"
                :value="item.uid"
                :key="index"
                >{{ item.content }}</Option
              >
            </i-select>
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
            <i-select v-model="twoIndexSelectVal">
              <Option
                v-for="(item, index) in twotextList"
                :value="item.uid"
                :key="index"
                >{{ item.content }}</Option
              >
            </i-select>
          </div>
        </div>
        <!-- 右边选择器 end -->
      </div>
      <!-- 选择器下面的指标框架 -->
      <div class="select_text">
        <!-- 指标的左边框架 -->
        <div class="left_text">
          <!-- 第一条指标的整体框架 -->
          <div
            class="index_box1"
            v-for="(item, index) in indexList"
            :key="index"
          >
            <!-- 第一条一级指标的整体框架 -->
            <div class="index" @click="Click1(index)">
              <!-- 数字标号 -->
              <div class="index_num">I</div>
              <!-- 一级指标的文字 -->
              <div class="index_text">{{ item.content }}</div>
              <!-- 一级指标的评级 -->
              <div class="index_rate">
                {{ item.level }}
              </div>
            </div>
            <!-- 被折叠的内容--二级指标 -->
            <div
              class="show_index"
              v-for="item1 in item.twoindexList"
              :key="item1.uid"
              v-show="towIndesShows[index]"
              @click="Click2(item1)"
            >
              <div class="show_text">
                <span class="show_num">II</span>
                <span class="show_span">{{ item1.content }}</span>
                <span class="show_rate">{{ item1.level }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="center_background"></div>
        <!-- 指标的右边框架 -->
        <div class="right_text">
          <!-- 三级指标的整体框架 -->
          <div
            class="folding"
            v-for="(item, index) in threeIndexList"
            :key="item.uid"
          >
            <!-- 折叠的部分 -->
            <!-- <div class="show_div" v-show="showContent" ref="chart2"></div> -->
            <!-- 第二条三级指标的整体框架 -->
            <div class="target1">
              <!-- 三级指标的数字标号 -->
              <div class="num3">III</div>
              <!-- 中间三级指标的框架 -->
              <div class="target1_text">
                {{ item.content }}
              </div>
              <!-- 因子和对应的数值的框架 -->
              <div class="target1_divisor">
                <!-- 因子图片框架 -->
                <div class="change_image">
                  <img
                    src="../../assets/images/因子.png"
                    @click="Click(item, index)"
                  />
                </div>
                <!-- 因子对应的数值的框架 -->
                <div class="num">{{ item.level }}</div>
              </div>
            </div>
            <!-- 折叠的部分 -->
            <div
              class="show_div"
              v-show="threeIndesShows[index]"
              :ref="`threeIndex_${item.uid}`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import echarts from "echarts";
import axios from "axios";

export default {
  watch: {
    selectedUnitId(val, oldVal) {
      this.init(val);
    },
  },
  props: {
    selectedUnitId: String,
  },
  data() {
    return {
      oneIndexSelectVal: 0,
      twoIndexSelectVal: 0,
      factors: [],
      threeIndesShows: [],
      threeIndexList: [],
      towIndexActiveShow: null,
      towIndesShows: [],
      indexList: [],
      onetextList: [], // 一级指标的数据
      twotextList: [], // 二级指标的数据
      showContent: false,
      showContent1: false,
      showContent2: false,
      showContent3: false,
      showContent4: false,
      showContent5: false,
      showContent6: false,
      cityList: [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ],
      model1: "党的意识、政治建设",
      model2: "",
      rate: [], //评分级别
      // isCollapsed: false,
    };
  },
  mounted() {},
  methods: {
    init(val) {
      axios
        .all([
          // 默认请求后台获取一级指标和二级指标
          axios({
            method: "get",
            url:
              "http://localhost:8080/threeIndexScoreCsix/listOneTwoIndex?unitId=" +
              val,
          }),
          //默认请求初始评分
          axios({
            method: "get",
            url:
              "http://localhost:8080/threeIndexScoreCsix/getUnitResultScore?unitId=" +
              val,
          }),
        ])
        .then(
          axios.spread((res1, res2) => {
            let _this = this;
            _this.towIndesShows = [];
            console.log(res1.data);
            this.indexList = res1.data;
            res1.data.forEach((o) => {
              _this.towIndesShows.push(false);
            });
            console.log(res2.data);
            //获取初始评分
            this.rate = res2.data;
            const option3 = {
              title: {
                text: this.rate.score + "%",
                x: "center",
                y: "center",
                textStyle: {
                  fontWeight: "normal",
                  color: "#0580f2",
                  fontSize: "20",
                },
              },
              color: ["rgba(176, 212, 251, 1)"],

              series: [
                {
                  name: "Line 1",
                  type: "pie",
                  clockWise: true,
                  radius: ["50%", "66%"],
                  itemStyle: {
                    normal: {
                      label: {
                        show: false,
                      },
                      labelLine: {
                        show: false,
                      },
                    },
                  },
                  hoverAnimation: false,
                  data: [
                    {
                      value: 80,
                      name: "01",
                      itemStyle: {
                        normal: {
                          color: {
                            // 完成的圆环的颜色
                            colorStops: [
                              {
                                offset: 0,
                                color: "#00cefc", // 0% 处的颜色
                              },
                              {
                                offset: 1,
                                color: "#367bec", // 100% 处的颜色
                              },
                            ],
                          },
                          label: {
                            show: false,
                          },
                          labelLine: {
                            show: false,
                          },
                        },
                      },
                    },
                    {
                      name: "02",
                      value: 20,
                    },
                  ],
                },
              ],
            };
            this.initChart(this.$refs.pie1, option3);
          })
        );
    },
    oneIndexChange(val) {
      this.twotextList = this.indexList.find((o) => o.uid == val).twoindexList;
      console.log(this.twotextList);
    },
    initChart(container, option) {
      const myChart = echarts.init(container);
      myChart.setOption(option);
    },
    Click: function (item, index) {
      console.log(item);
      axios({
        method: "get",
        url: `http://localhost:8080/threeIndexScoreCsix/getFactor?unitId=${this.selectedUnitId}&uid=${item.uid}`,
      }).then((res) => {
        console.log(res.data);
        const data = {
          nodes: [],
          links: [
            {
              source: "浏览器有限公司",
              target1: "操作系统集团",
              name: "参股",
            },
            {
              source: "HTML科技",
              target1: "浏览器有限公司",
              name: "参股",
            },
            {
              source: "CSS科技",
              target1: "浏览器有限公司",
              name: "参股",
            },
            {
              source: "JavaScript科技",
              target1: "浏览器有限公司",
              name: "参股",
            },
            {
              source: "Chrome",
              target1: "浏览器有限公司",
              name: "董事",
            },
            {
              source: "IE",
              target1: "浏览器有限公司",
              name: "董事",
            },
            {
              source: "Firefox",
              target1: "浏览器有限公司",
              name: "董事",
            },
            {
              source: "Safari",
              target1: "浏览器有限公司",
              name: "董事",
            },
            {
              source: "Chrome",
              target1: "JavaScript科技",
              name: "法人",
            },
          ],
        };
        res.data.forEach((o) => {
          data.nodes.push({
            name: o.factorName,
            category: 0,
          });
        });
        const color1 = "#006acc";
        const color2 = "#ff7d18";
        const color3 = "#10a050";

        data.nodes.forEach((node) => {
          if (node.category === 0) {
            node.symbolSize = 40;
            node.itemStyle = {
              color: color1,
            };
          } else if (node.category === 1) {
            node.itemStyle = {
              color: color2,
            };
          }
        });

        data.links.forEach((link) => {
          link.label = {
            align: "center",
            fontSize: 10,
          };

          if (link.name === "参股") {
            link.lineStyle = {
              color: color2,
            };
          } else if (link.name === "董事") {
            link.lineStyle = {
              color: color1,
            };
          } else if (link.name === "法人") {
            link.lineStyle = {
              color: color3,
            };
          }
        });

        const categories = [
          {
            // name: '公司',
            itemStyle: {
              color: color1,
            },
          },
          {
            // name: '董事',
            itemStyle: {
              color: color2,
            },
          },
        ];
        const option6 = {
          title: {
            text: "指标因子",
          },
          legend: [
            {
              // selectedMode: 'single',
              data: categories.map((x) => x.name),
              // icon: 'circle'
            },
          ],
          series: [
            {
              type: "graph",
              layout: "force",
              symbolSize: 40,
              draggable: true,
              roam: true,
              focusNodeAdjacency: true,
              categories: categories,
              edgeSymbol: ["", "arrow"],
              edgeLabel: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 20,
                  },
                  formatter(x) {
                    return x.data.name;
                  },
                },
              },
              label: {
                show: true,
              },
              force: {
                repulsion: 70,
                edgeLength: 80,
              },
              data: data.nodes,
              links: data.links,
            },
          ],
        };
        this.initChart(this.$refs[`threeIndex_${item.uid}`][0], option6);
      });

      let length = this.threeIndesShows.length;
      this.threeIndesShows = [];
      for (let i = 0; i < length; i++) {
        this.threeIndesShows.push(false);
      }
      this.threeIndesShows[index] = true;
    },
    Click1: function (index) {
      console.log(index);
      let length = this.towIndesShows.length;
      this.towIndesShows = [];
      for (let i = 0; i < length; i++) {
        this.towIndesShows.push(false);
      }
      this.towIndesShows[index] = true;
    },
    Click2(item) {
      this.threeIndesShows = [];
      let _this = this;
      axios({
        method: "get",
        url: `http://localhost:8080/threeIndexScoreCsix/listThreeIndex?unitId=${this.selectedUnitId}&uid=${item.uid}`,
      }).then((res) => {
        _this.threeIndexList = res.data;
        _this.threeIndexList.forEach((o) => {
          _this.threeIndesShows.push(false);
        });
        console.log(_this.threeIndexList);
      });
    },
  },
  created() {
    console.log(this.selectedUnitId);
    this.init(this.selectedUnitId);
  },
};
</script>

<style scoped>
#gradecourse {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.expand-row {
  margin-bottom: 16px;
}
#gradecourse > .grademain {
  width: 90%;
  height: 100%;
  /* background: yellowgreen; */
}
/* 标题框架 */
.content_title {
  width: 100%;
  height: 5%;
  /* background: pink; */
}
/* 统计图像的框架 */
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
  margin-top: 1rem;
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
  width: 22.5rem;
  height: 7.3rem;
  display: flex;
  float: left;
  background: url("../../assets/images/评价框.png") no-repeat;
  background-size: 100% 100%;
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
.statistics
  > .pie_tables
  > .pie_table
  > .pie_main
  > .pie_center
  > .pie_centerup {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 评分A样式 */
.statistics
  > .pie_tables
  > .pie_table
  > .pie_main
  > .pie_center
  > .pie_centerup
  > span {
  font-family: "Helvetica Neue";
  font-size: 40px;
  color: #409eff;
  /* background: coral; */
}
/* 评分级别的框架 */
.statistics
  > .pie_tables
  > .pie_table
  > .pie_main
  > .pie_center
  > .pie_centerdown {
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
  width: 22.5rem;
  height: 7.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/images/评价中.png") no-repeat;
  background-size: 100% 100%;
}
.statistics > .pie_tables > .evaluate_ing > .evaluate_main > span {
  font-size: 1.6rem;
}
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
.statistics
  > .pie_tables
  > .pie_table
  > .pie_main
  > .pie_right
  > .pie_rightdown {
  width: 100%;
  height: 50%;
  /* background: cyan; */
}
/* 两个选择器的整体框架 */
.select_input {
  width: 100%;
  height: 10%;
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
/* 指标文字部分框架 */
.select_text {
  width: 100%;
  height: 50%;
  display: flex;
  float: left;
  /* margin-top: 1rem; */
  /* background: cornflowerblue; */
}
/* 左边指标的框架 */
.select_text > .left_text {
  width: 39.5%;
  height: 100%;
  overflow: overlay;
  /* background: darkkhaki; */
}
/* 滚动条 */
.select_text > .left_text::-webkit-scrollbar-track {
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
/* 中间的阴影条 */
.select_text > .center_background {
  width: 0.5%;
  height: 100%;
  background-image: url("../../assets/images/阴影条.png");
}
/* 左边一级指标的第一条指标的整体框架 */
.select_text > .left_text > .index_box1 {
  width: 100%;
  height: auto;
}
/* 第一条一级指标的整体框架 */
.select_text > .left_text > .index_box1 > .index {
  width: 100%;
  height: 3rem;
  color: #f2f2f2;
  margin-bottom: 0.3rem;
  display: flex;
  float: left;
  cursor: pointer;
  background: #409eff;
  /* background-color: darkcyan; */
}
/* 第一条一级指标的数字标号 */
.select_text > .left_text > .index_box1 > .index > .index_num {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: cornflowerblue;
}
/* 第一条一级指标的文字框架 */
.select_text > .left_text > .index_box1 > .index > .index_text {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background: coral; */
}
.select_text > .left_text > .index_box1 > .index > .index_rate {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background: aqua; */
}
/* 被折叠的内容的框架 */
.select_text > .left_text > .index_box1 > .show_index {
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  /* background: cornflowerblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
}
/* 鼠标划到被折叠的内容的样式 */
.select_text > .left_text > .index_box1 > .show_index :hover {
  background-color: #ffd385;
  cursor: pointer;
}
/* 每条二级指标的框架 */
.select_text > .left_text > .index_box1 > .show_index > .show_text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}
/* 每条二级指标的数字样式 */
.select_text > .left_text > .index_box1 > .show_index > .show_text > .show_num {
  color: #409eff;
  margin-left: 2rem;
}
/* 每条二级指标的文字样式 */
.select_text
  > .left_text
  > .index_box1
  > .show_index
  > .show_text
  > .show_span {
  width: 20.5rem;
  margin-left: 1rem;
  font-size: 0.85rem;
}
/* 右边指标的框架 */
.select_text > .right_text {
  width: 60%;
  height: 100%;
  border: 1px solid #ccc;
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
  margin-left: 3rem;
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
  margin-left: 3rem;
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
/* 三级指标的整体框架 */
.folding {
  width: 100%;
  /* height: 100%; */
  overflow: overlay;
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
  margin-bottom: 0.3rem;
}
/* 三级指标的数字标号 */
.folding > .target1 > .num3 {
  width: 6%;
  height: 100%;
  background: #cecece;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
}
/* 中间三级指标的框架 */
.folding > .target1 > .target1_text {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(243, 243, 243);
  font-size: 0.85rem;
}
/* 因子和对应的数值的框架 */
.folding > .target1 > .target1_divisor {
  width: 19%;
  height: 100%;
  display: flex;
  float: left;
  background: white;
}
/* 因子图片的框架 */
.folding > .target1 > .target1_divisor > .change_image {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: pink; */
}
.folding > .target1 > .target1_divisor > .change_image > img {
  cursor: pointer;
}
/* 因子对应的数值的框架 */
.folding > .target1 > .target1_divisor > .num {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: plum; */
}
/* 被折叠的内容 */
.show_div {
  width: 530px;
  height: 200px;
  /* background: chocolate; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 200px; */
}
</style>
