<template>
  <div class="">
    <x-header class="header" :left-options="{backText: ''}">新建项目</x-header>
    <div class="content">
      <group title="编辑" label-width="5.5em" label-margin-right="2em" label-align="justify">
        <x-input title="项目名称" placeholder="名称" v-model="name"></x-input>

        <x-textarea title="项目简介" placeholder="请填写详细信息" :show-counter="false" :rows="6"></x-textarea>
        <selector title="上传图片" placeholder="图片来源" :options="[{key:'1',value:'开始拍照'}, {key:'2',value:'打开相册'}]" v-model="resType"></selector>
        <selector title="项目类型" placeholder="选择项目类型" :options="[{key:'1',value:'开始拍照'}, {key:'2',value:'打开相册'}]" v-model="proType"></selector>
        <x-number title="扶贫人数" align="left" v-model="numberValue" button-style="round" :min="0"></x-number>
        <x-input title="负责人" placeholder="输入负责人姓名" v-model="leader"></x-input>
        <x-number title="预算" align="left" v-model="money" button-style="round" :min="0"></x-number>
      </group>
      <div style="padding:15px;">
        <x-button @click.native="onSubmit" type="primary">保 存</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, Group, XInput, Selector, XTextarea, XNumber, XButton } from 'vux'
export default {
  data() {
    return {
      name: '',
      resType: '',
      proType: '',
      numberValue: 0,
      leader: '',
      money: 0,
    }
  },
  methods:{
    onSubmit(){
      
    }
  },
  components: {
    XHeader, Group, XInput, Selector, XTextarea, XNumber, XButton

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
