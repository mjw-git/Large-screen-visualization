<template>
    <div :style="{width:'100%'}">
         <div :style="{height:'420px',width:'100%'}" ref="myEchart"></div>
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

</style>