<template>
    <div id="con">
         <div id="china"  ref="myEchart"></div>
         <div class="items">
             <div class="item">
                  <h3 :style="{color:'rgb(8,199,241)'}">578</h3>
                 <div :style="{color:'white'}">当前在线人数</div>
             </div>
             <div class="item">
                 <h3 :style="{color:'rgb(255,199,46)'}">3211</h3>
                   <div :style="{color:'white'}">总注册人数</div>
             </div>
             <div class="item">
                 <h3 :style="{color:'rgb(8,199,241)'}">442</h3>
                   <div :style="{color:'white'}">会员数</div>
             </div>
             <div class="item">
                  <h3 :style="{color:'rgb(255,199,46)'}">46</h3>
                   <div :style="{color:'white'}">加盟店铺数</div>
             </div>
         </div>
    </div>
</template>

<script>
import {option} from '../../config/chinaMap.config'
import 'echarts/map/js/china'
    export default {
        mounted () {
            let myChart = this.$echarts.init(this.$refs.myEchart);
            myChart.setOption(option)
        },
    }
</script>

<style lang="less" scoped>
@import '../../assets/css/map.less';
</style>