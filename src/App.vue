<template>
  <div >
    <router-view class="body" />
  </div>
</template>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
.body{
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background:radial-gradient(circle at 50% 20%,rgb(42, 100, 207),rgb(1,17,42));
}
</style>
