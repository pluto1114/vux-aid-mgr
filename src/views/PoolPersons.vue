<template>
  <div class="">
    <x-header class="header" :left-options="{backText: ''}">识别户</x-header>
    <div class="content">
      <div class="pad">
        <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>
      </div>
      <div style="postion:relative;">
        <x-table :cell-bordered="false" :content-bordered="true" style="background-color:#fff;">
          <thead>
            <tr style="background-color: #F7F7F7">
              <th>姓名</th>
              <th>人数</th>
              <th>识别标准</th>
              <th style="width:120px;">致贫原因</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(x,i) of persons" :key="i">
              <td>{{x.name}}</td>
              <td>{{x.num}}</td>
              <td>{{x.tag}}</td>
              <td style="line-height:1.5em;font-size:14px;">{{x.reason}}</td>
            </tr>

          </tbody>
        </x-table>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, Search, XTable } from 'vux'
export default {
  data() {
    return {
      persons: [],
      results: [],
      value: 'test'
    }
  },
  created() {
    var Random = Mock.Random
    this.persons = Mock.mock({
      "arr|10-30": [
        {
          "name": "@cname",
          "num": "@integer(1,3)",
          "tag": '省定',
          "reason": Mock.mock("@csentence"),

        }
      ]
    }).arr
  },
  methods: {
    setFocus() {
      this.$refs.search.setFocus()
    },
    resultClick(item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult(val) {
      // this.results = val ? getResult(this.value) : []
    },
    onSubmit() {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus() {
      console.log('on focus')
    },
    onCancel() {
      console.log('on cancel')
    }
  },
  components: {
    XHeader,
    Search,
    XTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
