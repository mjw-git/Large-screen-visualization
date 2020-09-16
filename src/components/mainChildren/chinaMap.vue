<template>
    <div id="con">
         <div id="china"  ref="myEchart"></div>
         <div class="item"></div>
    </div>
</template>

<script>
import {option} from '../../config/echarts.config'
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