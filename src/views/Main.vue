<template>
  <div class="hello">
    <x-header class="header" :left-options="{showBack: false}">精准扶贫</x-header>
    <div class="content" style="padding-bottom:55px;">
      <transition name="fade">
        <router-view class="router-view"></router-view>
      </transition>
    </div>

    <tabbar class="vux-tabbar" icon-class="vux-center" v-show="true" slot="bottom">
      <tabbar-item :link="{path:'/index'}" selected>
        <i class="fa fa-home" slot="icon"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/index2'}" badge="9">
        <i class="fa fa-bookmark-o" slot="icon"></i>
        <span slot="label">
          村务
        </span>
      </tabbar-item>
      <tabbar-item :link="{path:'/index3'}" show-dot>
        <i class="fa fa-user-o" slot="icon"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { XHeader, Grid, GridItem, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      index: 1
    }
  },
  created(){
    this.$router.push('/index')
  },
  components: {
    XHeader,
    Grid, GridItem,
    Tabbar, TabbarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
