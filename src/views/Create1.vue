<!-- 评价体系组件 -->
<!--单位生态子组件-->
<!-- author by: zhaosiyuan -->

<template>
  <div id="create1">
    <!-- 临时添加：点击确认按钮，出现市台联及相应的预览 -->
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
    <!-- 正常Create1主体区域 -->
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
import cityStraight from '@/views/Create1_children/cityStraight' // 引入市直子组件
import judgedBight from '@/views/Create1_children/judgedBight' // 引入综评曲线子组件
import cityJoin from '@/views/Create1_children/cityJoin' // 引入市台联子组件
import gradeCourse from '@/views/Create1_children/gradeCourse' // 引入综评曲线子组件

export default {
  data () {
    return {
      cityflag: false // 市台联页面显示不显示标志位
    }
  },
  created () {
    // 接收点击确认后，显示flag
    EventBus.$on('showFlag', data => {
      this.cityflag = data
    })
  },
  methods: {
    // 从子组件接收tab点击事件
    tabClick1 (flag) {
      // console.log(flag)
      this.tab_flag = flag
    },
    // 点击返回按钮，隐藏
    hiddenFlag_method (flag) {
      // console.log(flag)
      this.cityflag = flag
    }
    // title_input_change () {
    // this.$emit('title-input-change1') // 通过子组件将内容变化后的新值传给父组件
    // }
  },
  components: {
    cityStraight, // 市直子组件
    judgedBight, // 引入综评曲线子组件
    cityJoin, // 引入市台联子组件
    gradeCourse // 引入综评曲线子组件
  },
  mounted () {
  }
}
</script>
<style scoped>
#create1 {
  height: 100%;
}
/* create1主体区域 */
#create1 > .container {
  height: 100%;
  width: 100%;
  display: flex;
  float: left;
  /* background: pink; */
}
/* create1左边区域 */
#create1 > .container > .container_left {
  height: 100%;
  width: 35%;
  /* background: aquamarine; */
}
/* create1右边区域 */
#create1 > .container > .container_right {
    height: 100%;
    width: 65%;
    /* background: cadetblue; */
}
/* 点开确认按钮的页面 */
.charts_store_container {
    width: 100%;
    height: 100%;
    background: #666;
    display: flex;
    float: left;
    /* position: absolute; */
    z-index: 100;
    overflow: hidden;
}
/* 市台联左边区域 */
.charts_store_left {
    width: 35%;
    height: 100%;
    /* background: #ac2d2d; */
}
/* 市台联右边区域 */
.charts_store_right {
  width: 65%;
    height: 100%;
    background: white;
}
</style>
