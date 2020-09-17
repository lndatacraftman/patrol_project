<!-- 指标预警子组件 -->
<!-- author by: zhaosiyuan -->

<template>
  <div id="warningindex">
    <!-- 整体框架 -->
    <div class="warningindex_content">
      <!-- 标题框架 -->
      <div class="warningindex_title"></div>
      <!-- 水平线 -->
      <hr />
      <!-- 指标预警的内容布局 -->
      <div class="warningindex_main">
        <!-- 每条指标的框架 -->
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
        <div class="each_warning">,,</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
#warningindex {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: overlay;
}
/* 加滚动条 */
#warningindex ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background-color: #f5f5f5;
}
#warningindex ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #f5f5f5;
}
#warningindex ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  height: 20px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f2f2f2;
}
/* 整体布局 */
#warningindex > .warningindex_content {
  width: 90%;
  height: 100%;
  /* background: pink; */
}
/* 标题框架 */
#warningindex > .warningindex_content > .warningindex_title {
  width: 100%;
  height: 5%;
  /* background: chocolate; */
}
/* 指标预警的内容框架 */
#warningindex > .warningindex_content > .warningindex_main {
  width: 100%;
  height: 90%;
  /* display: flex;
  justify-content: center; */
  background: darkkhaki;
}
/* 每条指标预警的框架 */
#warningindex > .warningindex_content > .warningindex_main > .each_warning {
  width: 45rem;
  height: 7rem;
  border: 1px solid #e8eaec;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  /* background: darkorange; */
}
</style>
