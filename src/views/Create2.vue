<!-- App内的主页组件 -->
<!--生活状况组件-->
<!-- author by: zhaosiyuan -->

<template>
  <div id="create2">
    <!-- 正常Create2主体区域 -->
    <div class="container2">
      <!-- 左边区域 -->
      <div class="container_left">
          <!-- 引入区县子组件 -->
        <districtsCounty />
      </div>
      <!-- 右边区域 -->
      <div class="container_right">
          <!-- 引入评分结果子组件 -->
          <scoreResult />
      </div>
    </div>
  </div>
</template>
<script>
import districtsCounty from '@/views/Create2_children/districtsCounty' // 引入区县子组件
import scoreResult from '@/views/Create2_children/scoreResult' // 引入综评曲线子组件

export default {
  data () {
    return {}
  },
  created () {
  },
  methods: {
  },
  components: {
    districtsCounty, // 区县子组件
    scoreResult // 引入综评曲线子组件
  },
  mounted () {
  }
}
</script>
<style scoped>
#create2 {
  width: 100%;
  height: 100%;
  /* background: cornflowerblue; */
}
#create2 > .container2 {
  width: 100%;
  height: 100%;
  display: flex;
  float: left;
}
/* create2左边区域 */
#create2 > .container2 > .container_left {
  height: 100%;
  width: 35%;
  /* background: aquamarine; */
}
/* create2右边区域 */
#create2 > .container2 > .container_right {
    height: 100%;
    width: 65%;
    /* background: cadetblue; */
}
</style>
