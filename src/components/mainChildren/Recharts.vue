<template>
    <div class="r_con">
        <div class="box" ref="echart1"></div>
    </div>
</template>

<script>
import {option1} from '../../config/Recharts.config'
    export default {
        mounted () {
            let myChart = this.$echarts.init(this.$refs.echart1);
            myChart.setOption(option1);
        },
          
    }
</script>

<style lang="less" scoped>
@import '../../assets/css/right.less';
</style>