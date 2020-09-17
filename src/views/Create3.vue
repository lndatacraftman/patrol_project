<!-- App内的主页组件 -->
<!--生活状况组件-->
<!-- author by: zhaosiyuan -->

<template>
  <div id="create3">
    <!-- 正常Create3主体区域 -->
    <div class="container3">
      <!-- 左边区域 -->
      <div class="container_left">
        <!-- 引入痛点问题子组件 -->
        <painProblem />
      </div>
      <!-- 中间区域 -->
      <div class="container_center">
        <!-- 引入政治巡查子组件 -->
        <politicalReview />
      </div>
      <!-- 右边区域 -->
      <div class="container_right">
        <!-- 引入共性问题子组件 -->
        <commonProblem />
      </div>
    </div>
  </div>
</template>
<script>
import painProblem from "@/views/Create3_children/painProblem"; // 引入痛点问题子组件
import politicalReview from "@/views/Create3_children/politicalReview"; // 引入政治巡查子组件
import commonProblem from "@/views/Create3_children/commonProblem"; // 引入共性问题子组件

export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    painProblem, // 引入痛点问题子组件
    politicalReview, // 引入政治巡查子组件
    commonProblem, // 引入共性问题子组件
  },
  mounted() {},
};
</script>
<style scoped>
#create3 {
  width: 100%;
  height: 100%;
  /* background: cornflowerblue; */
  background-image: url("../assets/images/create3/背景.png");
}
#create3 > .container3 {
  width: 100%;
  height: 100%;
  display: flex;
  float: left;
}
/* create3左边区域 */
#create3 > .container3 > .container_left {
  height: 100%;
  width: 30%;
  /* background: aquamarine; */
}
/* create3中间区域 */
#create3 > .container3 > .container_center {
  height: 100%;
  width: 40%;
  /* background: pink; */
}
/* create3右边区域 */
#create3 > .container3 > .container_right {
  height: 100%;
  width: 30%;
  /* background: cadetblue; */
}
</style>
