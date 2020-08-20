<template>
 <div id="index_box1" @click="Click1()">
            <!-- 第一条一级指标的整体框架 -->
            <div class="index">
              <!-- 数字标号 -->
              <div class="index_num">I</div>
              <!-- 一级指标的文字 -->
              <div class="index_text">党的意识、政治建设</div>
            </div>
            <!-- 被折叠的内容--二级指标 -->
            <div class="show_index" v-show="showContent1">
              <div class="show_text">
                <span>II</span>
                <span>学习贯彻习近平总书记重要讲话和指示批示精神情况</span>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  data () {
    return {
      showContent1: false,
      n: 0
    }
  },
  methods: {
    Click1: function () {
      this.showContent1 = !this.showContent1
    }
  }
}
</script>

<style scoped>
#index_box1{
    width: 400px;
    height: 800px;
    border: 1px solid #ccc;
    background: aquamarine;
  }
#index_box1 > .index {
  width: 100%;
  height: 3rem;
  color: #f2f2f2;
  margin-bottom: 0.3rem;
  display: flex;
  float: left;
  cursor: pointer;
  background: #409eff;
  /* background-color: darkcyan; */
}
#index_box1 >.index > .index_num {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: cornflowerblue; */
}
#index_box1 > .index > .index_text {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background: coral; */
}
#index_box1 > .show_index {
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  /* margin-bottom: 0.3rem; */
  /* background: cornflowerblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
}
#index_box1 > .show_index :hover {
  background-color: #ffd385;
  cursor: pointer;
}
#index_box1 > .show_index > .show_num {
  width: 10%;
  height: 100%;
  color: #409eff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#index_box1 > .show_index > .show_text {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* margin-left: 1rem; */
  height: 100%;
}
</style>
