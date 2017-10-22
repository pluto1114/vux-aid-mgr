<template>
  <div class="">
    <x-header class="header" :left-options="{backText: ''}">项目详情</x-header>
    <div class="content">
      <form-preview :header-label="'项目名称'" :header-value="name" :body-items="list" :footer-buttons="buttons1" name="demo"></form-preview>
    </div>
     <card :header="{title:'相关信息'}">
      <img slot="content" :src="img" class="card-padding">
    </card>
  </div>
</template>

<script>
import { XHeader, FormPreview,Card } from 'vux'
export default {
  data() {
    return {
      name:Mock.mock("@ctitle"),
      list: [{
        label: '简介',
        value: Mock.mock('@cparagraph(3)')
      }, {
        label: '类型',
        value: Mock.mock('@cword(4)')
      }, {
        label: '启动时间',
        value: Mock.mock('@date')
      }, {
        label: '扶贫人数',
        value: Mock.mock('@integer(10, 30)')
      }, {
        label: '预算',
        value: Mock.mock('@integer(60, 100)')+'元'
      }, {
        label: '报账金额',
        value: Mock.mock('@integer(60, 100)')+'元'
      }, {
        label: '负责人',
        value: Mock.mock("@cname")
      }],
      buttons1: [{
        style: 'primary',
        text: '呼叫',
        onButtonClick: (name) => {
          alert(`clicking ${name}`)
        }
      }, {
        style: 'default',
        text: '返回列表',
        link: '/project-mgr'
      }],
      img:'http://www.gov.cn/xinwen/2015-12/16/5024709/images/f85b55192be545b6984486b22a1cb76e.jpg'
    }
  },
  components: {
    XHeader,
    FormPreview,
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
