<template>
    <div class="container">
        <div class="w">
            <div id="box1"></div>
            <div id="time">{{time}}</div>
        </div>
        <div class="wcenter">
            <div class="line"></div>
            <div class="tc">
                <div class="title">XXX科技有限公司</div>
                <div class="line3"></div>
            </div>
            <div class="line1"></div>
        </div>
        <div class="w">
            <div id="box2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {
            //时间初始化
            this.timer=setInterval(() => {
               this.time=new Date().toLocaleString() 
            }, 1000);
        },
        data() {
            return {
                timer:null,
                time:''
            }
        },
        beforeDestroy () {
            clearInterval(this.timer);
        },

    }
</script>

<style lang="less" scoped>
@import '../assets/css/header.less';
</style>