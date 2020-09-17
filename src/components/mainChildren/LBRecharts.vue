<template>
    <div class="con1">
        <div class="top" ref="top"></div>
        <div class="bottom" ref="bottom"></div>
    </div>
</template>

<script>
import {option1,option2} from '../../config/lbrecharts.config'
    export default {
        mounted () {
            let myChart = this.$echarts.init(this.$refs.top);
            myChart.setOption(option1);
            let mychart=this.$echarts.init(this.$refs.bottom);
            mychart.setOption(option2);
        },
    }
</script>

<style lang="less" scoped>
@import '../../assets/css/bottom.less';
</style>