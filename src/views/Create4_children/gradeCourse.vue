<!-- 市台联评分历程 子组件 -->
<!-- author by：zhaosiyuan -->

<template>
  <div id="gradecourse">
    <div class="title">
      <img src="../../assets/images/new_picture/919-08.png" />
      <span>{{ selectedUnitName }}</span>
    </div>
    <div class="tab_body">
      <Tabs active-key="key1" class="tabs" style="height: 100%">
        <Tab-pane label="生态评价" key="key1" style="height: 100%">
          <div class="grademain" style="height: 100%">
            <!-- 横线 -->
            <!-- <hr /> -->
            <!-- 统计图像布局 -->
            <div class="statistics">
              <!-- 上面的饼图的整体框架 -->
              <div class="pie_tables">
                <!-- 左侧框架 -->
                <div class="pie_table">
                  <div class="pie_main">
                    <span
                      class="colorheihei1"
                      :class="followcolor(rate.level)"
                      >{{ rate.level }}</span
                    >
                  </div>
                </div>
                <!-- 右侧评价中框架 -->
                <div class="pie_table" style="position: relative; left: 2rem">
                  <div class="pie_main">
                    <span
                      class="colorheihei1"
                      :class="followcolor(rateResult.level)"
                      >{{ rateResult.level }}</span
                    >
                  </div>
                </div>
              </div>
              <!-- 下面说明的整体框架 -->
              <div class="pie_title">
                <div class="title_down">
                  <div class="arrows_title">
                    <div
                      class="title_image"
                      style="position: relative; right: 2rem; top: 1rem"
                    >
                      <span style="color: #828282">初始生态评价</span>
                    </div>
                  </div>
                </div>
                <div
                  class="title_center"
                  style="position: relative; left: 2rem"
                >
                  <img src="../../assets/images/过程箭头.png" />
                </div>
                <div class="title_down">
                  <div class="arrows_title">
                    <div
                      class="title_image"
                      style="position: relative; left: 1.5rem; top: 1rem"
                    >
                      <span style="color: #828282">生态评价结果</span>
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
                      <Tooltip
                        class="rate_span"
                        :class="followcolor2(item.level)"
                        :content="item.queCount"
                        >{{ item.level }}</Tooltip
                      >
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
                      <div class="show_main">
                        <div class="show_num">II</div>
                        <div class="show_span">
                          {{ item1.content }}
                        </div>
                      </div>
                      <div class="show_rate">
                        <Tooltip
                          class="span_color"
                          :class="followcolor3(item1.level)"
                          :content="item1.queCount"
                          >{{ item1.level }}</Tooltip
                        >
                      </div>
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
                  <!-- 第二条三级指标的整体框架 -->
                  <div class="target1">
                    <!-- 三级指标的数字标号 -->
                    <div class="num3">III</div>
                    <!-- 中间三级指标的框架 -->
                    <div class="target1_text">
                      <span>{{ item.content }}</span>
                    </div>
                    <!-- 因子和对应的数值的框架 -->
                    <div class="target1_divisor">
                      <!-- 因子图片框架 -->
                      <div class="change_image">
                        <img
                          :src="getIcon(item)"
                          @click="
                            item.level == 'A++' ? null : Click(item, index)
                          "
                        />
                      </div>
                      <!-- 因子对应的数值的框架 -->
                      <div class="num">
                        <Tooltip
                          class="num_color"
                          :class="followcolor4(item.level)"
                          :content="item.queCount"
                          >{{ item.level }}</Tooltip
                        >
                      </div>
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
            </div></div
        ></Tab-pane>
        <Tab-pane label="党组成员" key="key2">标签二的内容</Tab-pane>
        <Tab-pane label="权责清单" key="key3">标签三的内容</Tab-pane>
        <Tab-pane label="三重一大" key="key4">标签四的内容</Tab-pane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import echarts from "echarts";
import axios from "axios";
import { log } from "util";
import iconY from "../../assets/images/因子.png";
import iconB from "../../assets/images/new_picture/919-06.png";

export default {
  watch: {
    selectedUnitId(val, oldVal) {
      console.log("val:11111111111111111111111111");
      this.init(val);
    },
  },
  props: {
    selectedUnitId: String,
    selectedUnitName: String,
  },
  data() {
    return {
      // oneIndexSelectVal: 0,
      // twoIndexSelectVal: 0,
      factors: [],
      threeIndesShows: [],
      threeIndexList: [], //sanjizhibiao
      towIndexActiveShow: null,
      towIndesShows: [],
      indexList: [],
      onetextList: [], // 一级指标的数据
      twotextList: [], // 二级指标的数据
      model1: "党的意识、政治建设",
      model2: "",
      rate: [], //评分级别
      rateResult: [],
      twoid: 0,
    };
  },
  mounted() {},
  methods: {
    getIcon(item) {
      return item.level == "A++" ? iconB : iconY;
    },
    followcolor: function (rate) {
      if (
        rate == "A++" ||
        rate == "A+" ||
        rate == "A" ||
        rate == "A-" ||
        rate == "A--"
      ) {
        return "colorheihei1";
      }
      if (
        rate == "B++" ||
        rate == "B+" ||
        rate == "B" ||
        rate == "B-" ||
        rate == "B--"
      ) {
        return "colorheihei2";
      }
      if (rate == "C++" || rate == "C+" || rate == "C" || rate == "C-") {
        return "colorheihei3";
      }
      if (rate == "D+" || rate == "D" || rate == "D-") {
        return "colorheihei4";
      }
    },
    followcolor2: function (rate) {
      if (
        rate == "A++" ||
        rate == "A+" ||
        rate == "A" ||
        rate == "A-" ||
        rate == "A--"
      ) {
        return "rate_span1";
      }
      if (
        rate == "B++" ||
        rate == "B+" ||
        rate == "B" ||
        rate == "B-" ||
        rate == "B--"
      ) {
        return "rate_span2";
      }
      if (rate == "C++" || rate == "C+" || rate == "C" || rate == "C-") {
        return "rate_span3";
      }
      if (rate == "D+" || rate == "D" || rate == "D-") {
        return "rate_span4";
      }
    },
    followcolor3: function (rate) {
      if (
        rate == "A++" ||
        rate == "A+" ||
        rate == "A" ||
        rate == "A-" ||
        rate == "A--"
      ) {
        return "span_color1";
      }
      if (
        rate == "B++" ||
        rate == "B+" ||
        rate == "B" ||
        rate == "B-" ||
        rate == "B--"
      ) {
        return "span_color2";
      }
      if (rate == "C++" || rate == "C+" || rate == "C" || rate == "C-") {
        return "span_color3";
      }
      if (rate == "D+" || rate == "D" || rate == "D-") {
        return "span_color4";
      }
    },
    followcolor4: function (rate) {
      if (
        rate == "A++" ||
        rate == "A+" ||
        rate == "A" ||
        rate == "A-" ||
        rate == "A--"
      ) {
        return "num_color1";
      }
      if (
        rate == "B++" ||
        rate == "B+" ||
        rate == "B" ||
        rate == "B-" ||
        rate == "B--"
      ) {
        return "num_color2";
      }
      if (rate == "C++" || rate == "C+" || rate == "C" || rate == "C-") {
        return "num_color3";
      }
      if (rate == "D+" || rate == "D" || rate == "D-") {
        return "num_color4";
      }
    },
    Click3: function (uid, uid2) {
      this.threeIndesShows = [];
      let _this = this;
      axios({
        method: "get",
        url: `http://localhost:8080/threeIndexScoreCsix/listThreeIndex?unitId=${uid}&uid=${uid2}`,
      }).then((res) => {
        _this.threeIndexList = res.data;
        _this.threeIndexList.forEach((o) => {
          _this.threeIndesShows.push(false);
        });
        console.log(_this.threeIndexList);
      });
    },
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
              "http://localhost:8080/threeIndexScoreCsix/getUnitInitScore?unitId=" +
              val,
          }),
          axios({
            method: "get",
            url:
              "http://localhost:8080/threeIndexScoreCsix/getUnitResultScore?unitId=" +
              val,
          }),
        ])
        .then(
          axios.spread((res1, res2, res3, res4) => {
            let _this = this;
            _this.towIndesShows = [];
            this.twoid = res1.data[0].twoindexList[0].id;
            this.indexList = res1.data;
            res1.data.forEach((o) => {
              _this.towIndesShows.push(false);
            });
            console.log(res1.data);

            this.Click3(val, res1.data[0].twoindexList[0].uid);
            //获取初始评分
            this.rate = res2.data;
            this.rateResult = res3.data;
            //console.log(res4.data);
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
      console.log(item.level);
      axios({
        method: "get",
        url: `http://localhost:8080/threeIndexScoreCsix/getFactor?unitId=${this.selectedUnitId}&uid=${item.uid}`,
      }).then((res) => {
        console.log(res.data);
        const data = {
          nodes: [
            {
              name: "因子",
              category: 0,
              // name: o.factorName,
              // category: o.type,
            },
          ],
          links: [],
        };
        res.data.forEach((o) => {
          console.log(o.type);
          data.links.push({
            source: o.factorName,
            target: "因子",
            category: o.type,
            name: o.type == 0 ? "问题" : "线索",
          });
          data.nodes.push({
            name: o.factorName,
            category: o.type,
          });
        });
        console.log(data);
        const color1 = "#006acc"; //蓝色
        const color2 = "#ff7d18"; //橙色
        const color3 = "#10a050"; // 绿色

        data.nodes.forEach((node) => {
          console.log(node);
          if (node.category == 1) {
            node.symbolSize = 40;
            node.itemStyle = {
              color: color2,
            };
          } else if (node.category == 0) {
            node.symbolSize = 50;
            node.itemStyle = {
              color: color1,
            };
          } else if (node.category == 3) {
            //node.symbolSize = 30;
            node.itemStyle = {
              color: color3,
            };
          }
        });
        data.links.forEach((link) => {
          link.label = {
            align: "center",
            fontSize: 10,
          }; //关系线
          if (link.category == 0) {
            link.lineStyle = {
              color: color1,
            };
          } else if (link.category == 1) {
            link.lineStyle = {
              color: color2,
            };
          } else if (link.category == 2) {
            link.lineStyle = {
              color: color3,
            };
          }
        });
        const option6 = {
          title: {
            text: "指标因子",
            textStyle: { fontSize: "15" },
            left: 20,
          },
          series: [
            {
              type: "graph",
              layout: "force",
              symbolSize: 55,
              draggable: true,
              roam: true,
              focusNodeAdjacency: true,
              edgeSymbol: ["", "arrow"],
              edgeLabel: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 12,
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
                edgeLength: 100,
              },
              data: data.nodes,
              links: data.links,
            },
          ],
        };
        this.initChart(this.$refs[`threeIndex_${item.uid}`][0], option6);
      });
      let length = this.threeIndesShows.length;
      let tepShow = this.threeIndesShows[index];
      this.threeIndesShows = [];
      for (let i = 0; i < length; i++) {
        if (i != index) {
          this.threeIndesShows.push(false);
        } else {
          this.threeIndesShows.push(tepShow);
        }
      }
      this.threeIndesShows[index] = !this.threeIndesShows[index];
    },
    Click1: function (index) {
      console.log(index);
      let length = this.towIndesShows.length;
      let tepShow = this.towIndesShows[index];
      this.towIndesShows = [];
      for (let i = 0; i < length; i++) {
        if (i != index) {
          this.towIndesShows.push(false);
        } else {
          this.towIndesShows.push(tepShow);
        }
      }
      this.towIndesShows[index] = !this.towIndesShows[index];
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
        console.log(res.data);
      });
    },
  },
  created() {
    console.log(this.selectedUnitId);
    this.init(this.selectedUnitId);
  },
};
</script>
<style lang="scss">
.ivu-tabs-content {
  height: 100%;
}
</style>
<style scoped>
#gradecourse {
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center; */
}
#gradecourse > .title {
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  background: #f2f2f2;
}
.title > img {
  margin-left: 5rem;
  /* width: 0.6rem;
  height: 1.2rem; */
}
.title > span {
  font-size: 1.416666rem;
  margin-left: 0.5rem;
  color: black;
  font-family: "思源黑体medium";
}
#gradecourse > .tab_body {
  width: 90%;
  height: 100%;
  margin-left: 5rem;
}
#gradecourse > .tab_body > .tabs {
  width: 100%;
  height: 95%;
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
  height: 3%;
  font-size: 1.416666rem;
  font-family: "思源黑体normal";
  font-weight: bolder;
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
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* background: cornsilk; */
}
/* 饼状图 */
.statistics > .pie_tables > .pie_table > .pie_main {
  width: 13rem;
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/images/new_picture/评级圆框底 .png") no-repeat;
  background-size: 100% 100%;
  /* background: yellowgreen; */
}
.statistics > .pie_tables > .pie_table > .pie_main > span {
  font-family: Helvetica Neue;
  font-size: 3rem;
  color: #409eff;
}
.statistics > .pie_tables > .pie_table > .pie_main > .colorheihei1 {
  color: #37b546;
}
.statistics > .pie_tables > .pie_table > .pie_main > .colorheihei2 {
  color: #268ce8;
}
.statistics > .pie_tables > .pie_table > .pie_main > .colorheihei3 {
  color: orange;
}
.statistics > .pie_tables > .pie_table > .pie_main > .colorheihei4 {
  color: #f04f15;
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
/* 两个选择器的整体框架 */
.select_input {
  width: 100%;
  height: 5%;
  display: flex;
  float: left;
  margin-top: 1rem;
  /* background: darkkhaki; */
}
/* 左边选择器的框架 */
.select_input > .select_left {
  width: 27%;
  height: 100%;
  display: flex;
  float: left;
  align-items: center;
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
  align-items: center;
  margin-left: 5%;

  /* background: cornflowerblue; */
}
/* 指标文字部分框架 */
.select_text {
  width: 100%;
  height: 50%;
  display: flex;
  float: left;
  margin-top: 1.5rem;
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
  width: %;
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
  font-size: 1.2rem;
  background: #2a8de8;
  /* background-color: darkcyan; */
}
/* 第一条一级指标的数字标号 */
.select_text > .left_text > .index_box1 > .index > .index_num {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: cornflowerblue; */
  font-family: "Roma";
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
  justify-content: center;
  align-items: center;
  background: #efefef;
}
.select_text > .left_text > .index_box1 > .index > .index_rate > .rate_span1 {
  color: #37b546;
}
.select_text > .left_text > .index_box1 > .index > .index_rate > .rate_span2 {
  color: #268ce8;
}
.select_text > .left_text > .index_box1 > .index > .index_rate > .rate_span3 {
  color: #f04f15;
}
.select_text > .left_text > .index_box1 > .index > .index_rate > .rate_span4 {
  color: red;
}
/* 被折叠的内容的框架 */
.select_text > .left_text > .index_box1 > .show_index {
  width: 100%;
  height: 3rem;
  font-size: 1.08rem;
  margin-bottom: 0.3rem;
  /* background: cornflowerblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f5f8;
}
/* 鼠标划到被折叠的内容的样式 */
.show_index :hover {
  background-color: #ffd385;
  cursor: pointer;
}
/* 每条二级指标的框架 */
.select_text > .left_text > .index_box1 > .show_index > .show_text {
  width: 100%;
  display: flex;
  float: left;
  height: 100%;
}
.show_text > .show_main {
  display: flex;
  float: left;
  width: 23.5rem;
  height: 100%;
}
/* 每条二级指标的数字样式 */
.show_num {
  color: #409eff;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roma";
  /* background: powderblue; */
}
/* 每条二级指标的文字样式 */
.show_main > .show_span {
  width: 21.5rem;
  height: 100%;
  /* background: cornflowerblue; */
  margin-left: 1rem;
  display: flex;
  align-items: center;
  font-family: "Roma";
}
.show_text > .show_rate {
  margin-left: 2rem;
  width: 3rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefef;
}
.show_text > .show_rate :hover {
  background: #efefef;
}
.show_text > .show_rate > .span_color1 {
  color: #37b546;
}
.show_text > .show_rate > .span_color2 {
  color: #268ce8;
}
.show_text > .show_rate > .span_color3 {
  color: #f04f15;
}
.show_text > .show_rate > .span_color4 {
  color: red;
}
/* 右边指标的框架 */
.select_text > .right_text {
  width: 60%;
  height: 100%;
  border: 1px solid #ccc;
  overflow: overlay;
  /* background: rgb(109, 206, 203); */
}
.select_text > .right_text::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background-color: #f5f5f5;
}
.select_text > .right_text::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #f5f5f5;
}
.select_text > .right_text::-webkit-scrollbar-thumb {
  border-radius: 4px;
  height: 20px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f2f2f2;
}
/* 下面说明的框架 */
.statistics > .pie_title {
  width: 77.5%;
  height: 20%;
  margin-left: 4.3rem;
  margin-top: 3rem;
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
  /* margin-top: -2rem; */
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
  width: 9.5rem;
  height: 2rem;
  border-radius: 8px;
  /* -moz-border-radius: 15px; */
  /* background: #e6e6e6; */
  background: #ffd385;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
  margin-top: 0.9rem;
  font-weight: bolder;
}
.pie_title > .title_down > .arrows_title > .title_image1 {
  width: 6rem;
  height: 2rem;
  border-radius: 8px;
  /* -moz-border-radius: 15px; */
  /* background: #e6e6e6;
   */
  background: #ffd385;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.9rem;
  font-weight: bolder;
}
.statistics > .pie_title > .title_center {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-left: 1rem;
  /* background: goldenrod; */
}
.statistics > .pie_title > .title_center > img {
  width: 4.5rem;
  height: 2rem;
  position: relative;
  bottom: 10rem;
}
/* 三级指标的整体框架 */
.folding {
  width: 100%;
  /* height: 100%; */
  /* overflow: overlay; */
  /* background: aquamarine; */
}
/* 滚动条 */
/* .folding::-webkit-scrollbar-track {
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
} */
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
  background: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Roma";
  color: #409eff;
}
/* 中间三级指标的框架 */
.folding > .target1 > .target1_text {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #f9f9f9;
  font-size: 0.85rem;
}
.target1_text > span {
  margin-left: 2rem;
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
.folding > .target1 > .target1_divisor > .num > .num_color1 {
  font-size: 1.41666rem;
  color: #37b546;
}
.folding > .target1 > .target1_divisor > .num > .num_color2 {
  font-size: 1.41666rem;
  color: #268ce8;
}
.folding > .target1 > .target1_divisor > .num > .num_color3 {
  font-size: 1.41666rem;
  color: #f04f15;
}
.folding > .target1 > .target1_divisor > .num > .num_color4 {
  font-size: 1.41666rem;
  color: red;
}
/* 被折叠的内容 */
.show_div {
  width: 530px;
  height: 250px;
  /* background: chocolate; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 200px; */
}
.folding > .target1 :hover {
  background: white;
  cursor: pointer;
}
</style>
