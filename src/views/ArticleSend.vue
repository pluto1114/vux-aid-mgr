<template>
  <div class="">
    <x-header class="header" :left-options="{backText: ''}">发文章</x-header>
    <div class="content">
      <group title="编辑" label-width="5.5em" label-margin-right="2em" label-align="justify">
        <x-input title="文章标题" placeholder="标题" v-model="title"></x-input>
        <selector title="上传图片" placeholder="图片来源" :options="[{key:'1',value:'开始拍照'}, {key:'2',value:'打开相册'}]" v-model="resType"></selector>
        <x-textarea title="文章内容" placeholder="请填写详细信息" :show-counter="false" :rows="6"></x-textarea>
      </group>
      <div style="padding:15px;">
        <x-button @click.native="onSubmit" type="primary">发 送</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, Group, XInput, Selector, XTextarea, XButton } from 'vux'
export default {
  data() {
    return {
      title: '',
      resType: ''
    }
  },
  mounted() {

  },
  methods: {
    onSubmit() {
      let _this = this
      this.$vux.toast.show({
        text: '发送成功',
        type: 'success',
        onHide() {
          // _this.$router.push({name:'ArticleMgr'})
          getPictureForApi({
            encodingType: 'jpg',
            mediaValue: 'pic',
            destinationType: 'url',
            allowEdit: true,
            quality: 50,
            targetWidth: 100,
            targetHeight: 100,
            saveToPhotoAlbum: false
          },ret=>{
            alert(JSON.stringify(ret))
          })
        }
      })
    }
  },
  components: {
    XHeader, Group, XInput, Selector, XTextarea, XButton

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
