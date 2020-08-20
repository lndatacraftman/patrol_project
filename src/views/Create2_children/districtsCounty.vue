<template>
  <div id="districtsCounty">
    <!-- <iframe src="/bmap.html" width="100%" height="800px"></iframe> -->
    <div class="content">
      <!-- 上面导航条框架 -->
      <div class="menu_content">
        <!-- 导航条 -->
        <div class="menu">
          <div class="menu_title">
            <span>市直</span>
          </div>
          <div class="menu_image">
            <img src="../../assets/images/双箭头.png" />
          </div>
          <div class="menu_title1">
            <span>区县</span>
          </div>
        </div>
      </div>
      <!-- 中间筛选框的框架 -->
      <div class="times_select">
        <!-- 筛选框1整体框架 -->
        <div class="selectbox">
          <!-- 筛选框前面的标题 -->
          <div class="select_title">
            <span>区县</span>
          </div>
          <!-- 筛选框 -->
          <div class="select_input">
            <Select v-model="model1" size="small">
            <Option
              v-for="item in periodList"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
          </div>
        </div>
        <!-- 筛选框2整体框架 -->
        <div class="inputbox">
          <Input suffix="ios-search" placeholder="请输入单位名称" size="small" class="input_unit"/>
        </div>
      </div>
      <!-- 下面图块框架 -->
      <div class="info_table">
        <iframe src="/bmap.html" width="100%" height="100%"></iframe>
        </div>
    </div>
  </div>
</template>
<script>
// import 'http://gallerybox.echartsjs.com/dep/echarts/latest/extension/bmap.min.js'
// import BaiduMap from 'vue-baidu-map'

export default {
  data () {
    return {
      // 届次筛选框里面的值
      periodList: [
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
      model1: ''
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style>
#districtsCounty {
  height: 100%;
  width: 100%;
  /* background: cornflowerblue; */
  display: flex;
  justify-content: center;
}
/* 整体框架 */
.content {
  height: 100%;
  width: 90%;
  /* display: flex;
  justify-content: center; */
  /* background: plum; */
}
/* 导航条的框架 */
.content > .menu_content {
  height: 10%;
  width: 100%;
  /* background: black; */
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 导航条 */
#districtsCounty > .content > .menu_content > .menu {
  height: 40%;
  width: 100%;
  display: flex;
  float: left;
  background-image: url("../../assets/images/导航条蓝.png");
}
/* 导航条的市直文字框架 */
.content > .menu_content > .menu > .menu_title {
  width: 12%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: burlywood; */
}
/* 导航条里的市直文字样式 */
.content > .menu_content > .menu > .menu_title > span {
  color: #ffffff;
}
/* 导航条的区县文字框架 */
.content > .menu_content > .menu > .menu_title1 {
  width: 12%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: burlywood; */
}
/* 导航条里的区县文字样式 */
.content > .menu_content > .menu > .menu_title1 > span {
  color: grey;
}
/* 导航条里的图片的框架 */
.content > .menu_content > .menu > .menu_image {
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: cornflowerblue; */
}
/* 导航条里的图片的样式 */
.content > .menu_content > .menu > .menu_image > img {
  width: 40%;
}
/* 中间筛选框的框架 */
#districtsCounty > .content > .times_select {
  width: 100%;
  height: 6%;
  /* background: white; */
}
/* 筛选框的整体框架 */
.content > .times_select > .selectbox {
  width: 30%;
  height: 100%;
  display: flex;
  float: left;
  margin-left: 1rem;
  /* background: blueviolet; */
}
/* 筛选框的标题框架 */
.content > .times_select > .selectbox > .select_title {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: burlywood; */
}
/* 输入框的框架 */
.content > .times_select > .inputbox {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: coral; */
}
/* 筛选框的标题文字样式 */
.content > .times_select > .selectbox > .select_title > span {
  color: grey;
}
/* 筛选框的框架 */
.content > .times_select > .selectbox > .select_input {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: cornflowerblue; */
}
/* 查询的输入框的样式 */
.content > .times_select > .inputbox > .input_unit {
  width: 80%;
}
/* 矩形树图的整体框架 */
.content > .info_table {
  width: 100%;
  height: 78%;margin-top: 4rem;
  /* background: coral; */
}
</style>
