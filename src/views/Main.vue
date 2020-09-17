<!-- App内的Main组件，在这里面写主体内容，避免App.vue中内容过多 -->
<!--包括顶部导航和下方主体内容-->
<!-- author by: zhaosiyuan -->

<template>
  <div id="layout">
    <Layout style="height: 100%; min-width: 1368px; min-height: 643.3875px">
      <Header
        :style="{ position: 'fixed', width: '100%', height: '40px' }"
        class="head"
      >
        <Menu mode="horizontal" active-name="1" class="menu_head" theme="dark">
          <div class="layout-title">
            <span>大数据分析评价系统</span>
          </div>
          <div class="layout-nav">
            <Submenu name="1">
              <template slot="title"> 分析研判 </template>
              <MenuItem name="1-1" to="/create1">分析预警</MenuItem>
              <MenuItem name="1-2" to="/create2">单位画像</MenuItem>
              <MenuItem name="1-3" to="/create3">生态概况</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title"> 评价体系 </template>
              <MenuItem name="2-1" to="/create4">单位生态</MenuItem>
              <MenuItem name="2-2" to="/create5">政治聚焦</MenuItem>
            </Submenu>
            <MenuItem name="3" to="/create6"> 数据管理 </MenuItem>
            <MenuItem name="4" to="/create7"> 系统管理 </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content
        :style="{
          margin: '37pt 0 0',
          background: '#fff',
          minHeight: '550px',
          height: '750px',
        }"
      >
        <router-view></router-view>
      </Content>
      <!-- <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> -->
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "/" + this.$route.path.split("/")[1], // /home | /create | /setting
    };
  },
  methods: {
    // routeTo (e) {
    //   this.$route.push(e)
    // }
  },
  created() {
    // let addr = this.$route.path.split('/')
    // addr = '/' + addr[1]
    // console.log(addr)
  },
};
</script>
<style scoped>
#layout {
  border: 1px solid #d7dde4;
  /* background: #f5f7f9; */
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  min-width: 1368px;
  min-height: 643.3875px;
}
.head {
  padding: 0;
}
/* 页面头部的左侧的标题的框架 */
.layout-title {
  width: 70%;
  height: 37pt;
  display: flex;
  align-items: center;
  /* line-height: 50pt; */
  color: #eeffff;
  border-radius: 3px;
  float: left;
}
.layout-title > span {
  font-family: 阿里黑体;
  font-size: 15pt;
}
/* 页面头部的整体框架 */
.menu_head {
  height: 37pt;
  width: 100%;
  display: flex;
  float: left;
  background-image: url("../assets/images/head_background.png");
}
/* 页面头部右侧导航栏的框架 */
.layout-nav {
  width: 45rem;
  height: 37pt;
  line-height: 37pt;
  margin: 0 auto;
  /* color: white; */
  /* margin-right: 20px; */
}
/* 页面头部右侧导航栏的每个导航标题 */
/* .navigation {
  color: white;
} */
/* .layout-footer-center {
  text-align: center;
} */
</style>
