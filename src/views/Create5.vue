<template>
<!-- 三级指标的整体框架 -->
  <div class="folding" @click="Click()">
    <!-- 第一条三级指标的整体框架 -->
    <div class="target1">
      <!-- 三级指标的数字标号 -->
      <div class="num3">I</div>
      <!-- 中间三级指标的框架 -->
    <div class="target1_text">1.开展</div>
    </div>
    <!-- 被折叠的内容 -->
    <div class="show_div" v-show="showContent">
        <div class="show_num">II</div>
        <div class="show_text">学习贯彻</div>
    </div>
    <div class="show_div" v-show="showContent">
        <div class="show_num">II</div>
        <div class="show_text">执行</div>
    </div>
  </div>
</template>

<script>
export default {
//   name: 'folding',
  data () {
    return {
      showContent: false,
      n: 0
    }
  },
  methods: {
    Click: function () {
      // const temp = this.message
      // temp[index].showContent = !temp[index].showContent
      this.showContent = !this.showContent
    }
  }
}
</script>

<style scoped>
/* 三级指标的整体框架 */
  .folding{
    width: 400px;
    height: 800px;
    border: 1px solid #ccc;
    background: aquamarine;
  }
  /* 第一条三级指标的整体框架 */
  .folding > .target1 {
    width: 100%;
    height: 3rem;
    background: cadetblue;
    display: flex;
    float: left;
    cursor: pointer;
  }
  /* 三级指标的数字标号 */
   .folding > .target1 > .num3 {
     width: 10%;
     height: 100%;
     background: #cecece;
     display: flex;
     justify-content: center;
     align-items: center;
   }
   /* 中间三级指标的框架 */
  .folding > .target1 > .target1_text {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgb(243, 243, 243);
  }
  /* 被折叠的内容 */
  .show_div {
    width: 100%;
    height: 3rem;
    background: chocolate;
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 200px; */
  }
  .show_div:hover {
       cursor: pointer;
       background-color: rgb(255, 171, 15);
   }
   /* .show_div:hover > .show_num{
       cursor: pointer;
       background-color: rgb(255, 171, 15);
   }
   .show_div:hover > .show_text{
       cursor: pointer;
       background-color: rgb(255, 171, 15);
   } */
   .show_div > .show_num {
       width: 10%;
       height: 100%;
       display: flex;
       justify-content: flex-end;
       align-items: center;
       /* background:red */
   }
   .show_div > .show_text {
       width: 90%;
       display: flex;
       align-items: center;
       justify-content: flex-start;
       margin-left: 1rem;
       height: 100%;
       /* background:blue */
   }
  </style>
