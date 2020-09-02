<!-- 评价体系组件 -->
<!--单位生态子组件-->
<!-- author by: zhaosiyuan -->

<template>
  <div id="create4">
    <!-- 临时添加1：点击左边echarts图，出现市台联及相应的预览 -->
        <div class="charts_store_container box" v-show="cityflag">
            <!-- 左侧图形库区域 -->
            <div class="charts_store_left left">
                <!-- 市台联子组件 -->
                <cityJoin
                    @hiddenFlag="hiddenFlag_method"
                ></cityJoin>
            </div>
            <!-- 右侧预览区域 -->
            <div class="charts_store_right right">
                <!-- 评分历程子组件 -->
                <gradeCourse></gradeCourse>
            </div>
        </div>
        <!-- 临时添加2：点击左边echarts图下面的区县按钮，出现区县地图及相应的预览 -->
        <div class="districtsCounty_countainer box" v-show="cityflag1">
            <!-- 左侧图形库区域 -->
            <div class="districtsCounty_left left">
                <!-- 引入区县子组件 -->
                <districtsCounty
                    @hiddenFlag1="hiddenFlag_method1"
                ></districtsCounty>
            </div>
            <!-- 右侧预览区域 -->
            <div class="districtsCounty_right right">
                <!-- 引入评分结果子组件 -->
                <scoreResult />
            </div>
        </div>
    <!-- 正常Create4主体区域 -->
    <div class="container">
      <!-- 左边区域 -->
      <div class="container_left">
          <!-- 引入市直子组件 -->
        <cityStraight />
      </div>
      <!-- 右边区域 -->
      <div class="container_right">
          <!-- 引入综评曲线子组件 -->
          <judgedBight />
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/assets/js/EventBus'
import cityStraight from '@/views/Create4_children/cityStraight' // 引入市直子组件
import judgedBight from '@/views/Create4_children/judgedBight' // 引入综评曲线子组件
import cityJoin from '@/views/Create4_children/cityJoin' // 引入市台联子组件
import gradeCourse from '@/views/Create4_children/gradeCourse' // 引入综评曲线子组件
import districtsCounty from '@/views/Create4_children/districtsCounty' // 引入区县子组件
import scoreResult from '@/views/Create4_children/scoreResult' // 引入综评曲线子组件

export default {
  data () {
    return {
      cityflag: false, // 市台联页面显示不显示标志位
      cityflag1: false // 区县页面显示不显示标志位
    }
  },
  created () {
    // 接收点击确认后，显示flag
    EventBus.$on('showFlag', data => {
      this.cityflag = data
    })
    EventBus.$on('showFlag1', data => {
      this.cityflag1 = data
    })
  },
  methods: {
    // 从子组件接收tab点击事件
    tabClick4 (flag) {
      // console.log(flag)
      this.tab_flag = flag
    },
    // 点击返回按钮，隐藏
    hiddenFlag_method (flag) {
      // console.log(flag)
      this.cityflag = flag
    },
    // 点击返回按钮，隐藏
    hiddenFlag_method1 (flag) {
      // console.log(flag)
      this.cityflag1 = flag
    }
    // title_input_change () {
    // this.$emit('title-input-change4') // 通过子组件将内容变化后的新值传给父组件
    // }
  },
  components: {
    cityStraight, // 市直子组件
    judgedBight, // 引入综评曲线子组件
    cityJoin, // 引入市台联子组件
    gradeCourse, // 引入综评曲线子组件
    districtsCounty, // 区县子组件
    scoreResult // 引入综评曲线子组件
  },
  mounted () {
  }
}
</script>
<style scoped>
#create4 {
  height: 100%;
}
/* create4主体区域 */
#create4 > .container {
  height: 100%;
  width: 100%;
  display: flex;
  float: left;
  /* background: pink; */
}
/* create4左边区域 */
#create4 > .container > .container_left {
  height: 100%;
  width: 40%;
  /* background: aquamarine; */
}
/* create4右边区域 */
#create4 > .container > .container_right {
    height: 100%;
    width: 60%;
    /* background: cadetblue; */
}
/* 临时添加1：点开echarts图的页面 */
.charts_store_container {
    width: 100%;
    height: 100%;
    background: pink;
    display: flex;
    float: left;
    /* position: absolute; */
    z-index: 100;
    overflow: hidden;
}
/* 市台联左边区域 */
.charts_store_left {
    width: 40%;
    height: 100%;
    /* background: #ac2d2d; */
}
/* 市台联右边区域 */
.charts_store_right {
    width: 60%;
    height: 100%;
    background: white;
}
/* 临时添加2：点击区县按钮的页面 */
#create4 > .districtsCounty_countainer {
    width: 100%;
    height: 100%;
    /* background: #666; */
    display: flex;
    float: left;
    /* position: absolute;
    z-index: 100;
    overflow: hidden; */
}
/* 区县左边布局 */
.districtsCounty_left {
    width: 40%;
    height: 100%;
    display: flex;
    float: left;
}
/* 区县右边的布局 */
.districtsCounty_right {
    width: 60%;
    height: 100%;
    /* background: white; */
    display: flex;
    float: left;
}
</style>
