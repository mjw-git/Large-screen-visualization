<template>
    <div  class="echarts" ref="myEchart">
    </div>
</template>

<script>
import {option} from '@/config/echart.config.js'
console.log(option)
    export default {
        mounted () {
            let myChart = this.$echarts.init(this.$refs.myEchart);
            myChart.setOption(option);
        },
    }
</script>

<style lang="less" scoped>
@import '../../assets/css/bottom.less';
</style>