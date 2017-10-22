<template>
  <div class="hello">
    <x-header class="header" :left-options="{backText: ''}">花花世界</x-header>
     <div class="content">
       {{msg}}<br>
       <grid :cols="3">
  <grid-item label="Grid" v-for="i in 6" :key="i">
    <img slot="icon" src="../assets/logo.png">
  </grid-item>
</grid>
     </div>
  </div>
</template>

<script>
import { XHeader,Grid,GridItem} from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
        XHeader,
        Grid,GridItem
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
