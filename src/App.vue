<template>
  <div id="app" style="height:100%;">
    <transition :name="'fade'">
      <keep-alive>
      <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: #ffffff;
}
@media only screen{
  html,body{
    // max-width:480px;
  }
}
.header {
    position: fixed!important;
    width: 100%;
    z-index: 999;
}
.content{
  padding-top: 46px;
}
</style>
<style lang="less">

.fade-enter-active{
  transition: opacity .8s ease;
}

.fade-enter{
  opacity: 0
}
</style>

