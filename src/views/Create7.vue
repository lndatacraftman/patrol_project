<!-- domo -->
<!--echarts-->
<!-- author by: zhaosiyuan -->

<template>
  <div id="creat4">
    <div id="main" class="content"></div>
    <button type="button" @click="myEcharts()">点击</button>
  </div>
</template>
<script>
import Vue from "vue";
import echarts from "echarts";
import axios from "axios";
Vue.prototype.$echarts = echarts;

export default {
  name: "Create4",
  data() {
    return {
      x_data: [1, 2, 3, 4, 5],
      y_data: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    myEcharts() {
      const myChart = Vue.prototype.$echarts.init(
        document.getElementById("main")
      );
      myChart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: this.x_data
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.y_data
          }
        ]
      });
    }
    // draw() {
    //   let that = this;

    //   let myChart = echarts.init(document.getElementById("main"));
    //   myChart.setOption(this.option, true);
    // }
  },
  watch: {
    // 数据变化时自动重画，在控制台修改message,会自动重画
    message: function() {
      this.draw();
    }
  },
  created() {
    axios({
      url: "http://192.168.101.4:8080/odsQuestionCsix/list",
      method: "GET" // 默认GET方法
    }).then(ret => {
      // data 属性名称是固定的，用于获取后台响应的实际数据
      console.log(ret.data);
      for (let i = 0; i < 5; i++) {
        this.x_data.push(ret.data[i].questionId);
        this.y_data.push(ret.data[i].id);
      }
    });
  },
  mounted() {
    // 初始化
    this.myEcharts();
  }
};
</script>
<style scoped>
#creat4 {
  /* background: pink; */
  width: 100%;
  height: 100%;
  /* width: 600px;
  height: 700px; */
}
.content {
  width: 500px;
  height: 300px;
}
</style>
