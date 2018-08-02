<template>
  <div class="">
    <x-header class="header" :left-options="{backText: ''}">
      文章列表
      <router-link slot="right" :to="{ name: 'ArticleSend'}">新建</router-link>
    </x-header>
    <div class="content">
      <panel header="扶贫新闻" :list="list" :type="type" @on-img-error="onImgError"></panel>
    </div>
  </div>
</template>

<script>
import { XHeader, Panel } from 'vux'
export default {
  data() {
    return {
      type: '5',
      list: [{
        src: 'http://www.gov.cn/xinwen/2015-12/16/5024709/images/f85b55192be545b6984486b22a1cb76e.jpg',
        title: '深入帮扶贫困户精准扶贫暖人心',
        desc: Mock.mock('@cparagraph'),
        url: '/article',
        meta: {
          source: Mock.mock('@cname'),
          date: Mock.mock('@now')
        }
      }, {
        src: 'http://img3.utuku.china.com/498x0/news/20171104/51cfec10-d885-471d-9f26-4b8f13b336b5.jpg',
        title: Mock.mock('@ctitle'),
        desc: Mock.mock('@cparagraph'),
        url: '/article',
        meta: {
          source: Mock.mock('@cname'),
          date: Mock.mock('@now')
        }
      }],
    }
  },
  methods: {
    onImgError(item, $event) {
      console.log(item, $event)
    }
  },
  components: {
    XHeader, Panel

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
