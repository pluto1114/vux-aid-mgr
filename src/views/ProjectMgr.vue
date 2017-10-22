<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.phead{
  .name{
    font-size: 18px;
  }
  .type-name{
    color:#1166ff;
  }
}
.pcon{
  
  img{
    margin-top:6px;
    width:120px;
    height:90px;
  }
  .info{
    padding-left: 10px;
    .leader{
      line-height: 2.4em;
    }
    .time{
      font-size: 14px;
      color:#999;
    }
  }
}
</style>

<template>
  <div class="">
    <x-header class="header" :left-options="{backText: ''}">
      项目
      <router-link slot="right" :to="{ name: 'ProjectSend'}">新建</router-link>
    </x-header>
    <div class="content">
      <ul>
        <li class="pad" v-for="(x,i) of list" :key="i" @click="$router.push({name:'Project'})">
          <div class="phead ub">
            <div class="name uf-1">{{x.name}}</div>
            <div class="type-name">{{x.type_name}}</div>
          </div>
          <div class="pcon ub">
            <div><img :src="x.img" alt=""></div>
            <div class="info">
              <div class="desc line-text-2">{{x.desc}}</div>
              <div class="leader">负责人：{{x.leader}}</div>
              <div class="time">{{x.updatetime}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    var Random = Mock.Random
    this.list = Mock.mock({
      "arr|2-10": [
        {
          "name": "@ctitle",
          "type_name":"@cword(4)",
          "img":Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
          "desc":Mock.mock("@cparagraph"),
          leader:Mock.mock("@cname"),
          updatetime:Mock.mock("@now")
        }
      ]
    }).arr
  },
  components: {
    XHeader,

  }
}
</script>

