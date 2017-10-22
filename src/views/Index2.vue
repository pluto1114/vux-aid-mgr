<template>
  <div class="">

    <grid :cols="3">
      <grid-item :label="x.text" v-for="(x,i) in gridData" :key="i" @click.native="onGridClick(x)">
        <i slot="icon" class="fa fa-2x" :class="x.icon" :style="{color:x.color}"></i>
      </grid-item>
    </grid>
    <divider>村庄概况</divider>
    <div class="pad">
      <cell :title="x.label" :value="x.value" v-for="(x,i) of list" :key="i" :is-link="x.link.length>1" :link="x.link"></cell>
    </div>
    <divider>村庄介绍</divider>
    <div class="pad">
      <p>{{desc}}</p>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem,Divider,Cell } from 'vux'
export default {
  data() {
    return {
      gridData:[
        {
          text:'发通知',
          icon:'fa-paper-plane-o',
          color:'#9999ff',
          link:'/article-send'
        },
        {
          text:'反馈诉求',
          icon:'fa-edit',
          color:'#99cc99',
          link:'/article-send'
        },
        {
          text:'精准识别贫困户',
          icon:'fa-newspaper-o',
          color:'#ff5555',
          link:'/pool-persons'
        },
        
      ],
      list: [{
        label: '总户数',
        value: 199,
        link:''
      }, {
        label: '总人数',
        value: 672,
        link:''
      }, {
        label: '贫困户数',
        value: 17,
        link:'/pool-persons'
      }, {
        label: '贫困人口数',
        value: 32,
        link:'/pool-persons'
      }, {
        label: '投入资金',
        value: 10001+'万元',
        link:''
      }, {
        label: '扶贫项目数',
        value: '132',
        link:'/project-mgr'

      }],
      desc:Mock.mock('@cparagraph')
    }
  },
  methods: {
   
    onGridClick(item){
      if(item.func){
        console.log(item.func)
        this[item.func]()
      }else{
        this.$router.push(item.link)
      }
      
    },
   
  },
  components: {
    Grid, GridItem,Divider,Cell
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
