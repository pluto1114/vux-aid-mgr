<template>
  <div class="">

    <swiper :list="swiperData" auto></swiper>
    <div class="bar"></div>
    <grid :cols="4">
      <grid-item :label="x.text" v-for="(x,i) in gridData" :key="i" @click.native="onGridClick(x)">
        <i slot="icon" class="fa fa-2x" :class="x.icon" :style="{color:x.color}"></i>
      </grid-item>
    </grid>
  

    <panel header="扶贫新闻" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>
import { Swiper, Grid, GridItem, Panel } from 'vux'
export default {
  data() {
    return {
      swiperData: [
        {
          url: 'javascript:',
          img: 'static/image/s1.jpg'
        }, {
          url: 'javascript:',
          img: 'static/image/s2.jpg'
        }
      ],
      gridData:[
        {
          text:'签到',
          icon:'fa-tags',
          color:'orange',
          link:'',
          func:'signIn'
        },
        {
          text:'发新闻',
          icon:'fa-newspaper-o',
          color:'#ff5555',
          link:'/article-send'
        },
        {
          text:'写日志',
          icon:'fa-edit',
          color:'#99cc99',
          link:'/article-send'
        },
        {
          text:'发通知',
          icon:'fa-paper-plane-o',
          color:'#9999ff',
          link:'/article-send'
        },
        {
          text:'项目管理',
          icon:'fa-magic',
          color:'#66C0FF',
          link:'/project-mgr'
        },
        {
          text:'新闻管理',
          icon:'fa-list',
          color:'#ff5555',
          link:'/article-mgr'
        },
        {
          text:'日志管理',
          icon:'fa-list-alt',
          color:'#99cc99',
          link:'/article-mgr'
        },
        {
          text:'通知管理',
          icon:'fa-outdent',
          color:'#9999ff',
          link:'/article-mgr'
        },
      ],
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
      footer: {
        title: '查看更多',
        url: 'http://vux.li'
      }
    }
  },
  methods: {
    onImgError(item, $event) {
      console.log(item, $event)
    },
    onGridClick(item){
      if(item.func){
        console.log(item.func)
        this[item.func]()
      }else{
        this.$router.push(item.link)
      }
      
    },
    signIn(){
      this.$vux.toast.show({
        text:"签到完成",
        type:"success"  
      })
    }
  },
  components: {
    Swiper,
    Grid, GridItem,
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
