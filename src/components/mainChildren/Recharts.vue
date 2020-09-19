<template>
  <div class="r_con">
    <div class="box" ref="echart1"></div>
    <div class="box1" ref="echart2"></div>
    <div class="box2" ref="echart3"></div>
    <div class="box3" >
           <div class="heads">
               <div class="head">排名</div>
               <div class="head">公司名称</div>
               <div class="head">收益</div>
           </div>
           <div class="items" v-for="(item,index) in listData" :key="index">
               <div class="item">{{index+1}}</div>
               <div class="item">xxxx公司{{index+1}}</div>
               <div class="item">{{(10-index+1)*10}}万元</div>
           </div>
    </div>
    <div class="box4" ref="echart4"></div>
     <div class="box5" ref="echart5"></div>
     
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
import { option1, option2, option3,option4,option5 } from "../../config/Recharts.config";
export default {
  mounted() {
    let myChart = this.$echarts.init(this.$refs.echart1);
    myChart.setOption(option1);
    let myChart2 = this.$echarts.init(this.$refs.echart2);
    myChart2.setOption(option2);
    let myChart3 = this.$echarts.init(this.$refs.echart3);
    myChart3.setOption(option3);
     let myChart4 = this.$echarts.init(this.$refs.echart4);
    myChart4.setOption(option4);
      let myChart5 = this.$echarts.init(this.$refs.echart5);
    myChart5.setOption(option5);

  },
  components: {
    vueSeamlessScroll,
  },
  data() {
      return {
          listData:[1,2,3,4,5,6,7,8,9,10]
      }
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/right.less";
</style>