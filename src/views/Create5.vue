<!-- App内的主页组件 -->
<!--生活状况组件-->
<!-- author by: zhaosiyuan -->

<template>
  <div id="create5">
    <!-- 正常Create5主体区域 -->
    <div class="container5">
      <!-- 左边区域 -->
      <div class="container_left">
        <!-- 引入政治聚焦子组件 -->
        <politicalFocus />
      </div>
      <!-- 右边区域 -->
      <div class="container_right">
        <!-- 引入指标预警子组件 -->
        <warningIndex />
      </div>
    </div>
  </div>
</template>
<script>
import politicalFocus from "@/views/Create5_children/politicalFocus"; // 引入政治聚焦子组件
import warningIndex from "@/views/Create5_children/warningIndex"; // 引入指标预警子组件

export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    politicalFocus, // 政治聚焦子组件
    warningIndex, // 引入指标预警子组件
  },
  mounted() {},
};
</script>
<style scoped>
#create5 {
  width: 100%;
  height: 100%;
  /* background: cornflowerblue; */
}
#create5 > .container5 {
  width: 100%;
  height: 100%;
  display: flex;
  float: left;
}
/* create5左边区域 */
#create5 > .container5 > .container_left {
  height: 100%;
  width: 60%;
  /* background: aquamarine; */
}
/* create5右边区域 */
#create5 > .container5 > .container_right {
  height: 100%;
  width: 40%;
  /* background: cadetblue; */
}
</style>
