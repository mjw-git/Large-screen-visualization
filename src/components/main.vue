<template>
  <div class="main">
    <div class="con">
      <div class="l_top">
        <Map></Map>
      </div>
      <div class="l_bottom">
        <div class="box">
          <Lb></Lb>
        </div>
        <div class="box">
          <Lbr></Lbr>
        </div>
      </div>
    </div>
    <div class="con"></div>
  </div>
</template>

<script>
import Lb from "./mainChildren/LBecharts";
import Lbr from './mainChildren/LBRecharts';
import Map from "./mainChildren/chinaMap";
export default {
  components: {
    Map,
    Lb,
    Lbr
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/main.less";
</style>