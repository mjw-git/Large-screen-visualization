<template>
    <div class="main">
        <div class="con">
            <div class="l_top">
                <Map></Map>
            </div>
        </div>
        <div class="con"></div>
    </div>
</template>

<script>
import Map from './mainChildren/chinaMap'
    export default {
        components: {
            Map,
        },
    }
</script>

<style lang="less" scoped>
@import '../assets/css/main.less';
</style>