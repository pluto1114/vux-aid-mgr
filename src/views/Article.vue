<template>
  <div class="">
    <x-header class="header" :left-options="{backText: ''}">文章详情</x-header>
    <div class="content">
     
      <divider>{{article.title}}</divider>
      <card>
        <img slot="header" :src="article.img" style="width:100%;display:block;">
        <div slot="content" class="card-padding">
          <p style="color:#999;font-size:14px;">发布于 {{article.date}}</p>
          <p style="font-size:16px;line-height:2;">{{article.paragraph}}</p>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { XHeader,Divider,Card } from 'vux'
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      article:{
        title:'深入帮扶贫困户精准扶贫暖人心',
        img:'http://img.dahe.cn/qf/2016/5/13/106SJPWA9.jpg',
        date:Mock.mock('@now'),
        paragraph:Mock.mock('@cparagraph(10)')
      }
    }
  },
  components: {
    XHeader,Divider,Card

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
