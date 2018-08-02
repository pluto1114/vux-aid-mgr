<template>
  <div class="login">

    <x-header class="header" :left-options="{showBack: false}">精准扶贫</x-header>
    <div class="content">

      <div class="pad">
        <x-input title="手机号码" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile">
          <i slot="label" class="fa fa-mobile" />
        </x-input>
        <x-input title="密码" v-model="password" placeholder="请输入密码" keyboard="number" type="password">
          <i slot="label" class="fa fa-lock" />
        </x-input>
        <x-button @click.native="login()" type="primary"> 登录</x-button>
      </div>

    </div>
    <div class="bg">

    </div>
  </div>
</template>

<script>
import { XHeader, Group, Blur, XInput, XButton } from 'vux'
export default {
  data() {
    return {
      mobile: '18698401720',
      password: '123456',
      url: "https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg"
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", { mobile: this.mobile, password: this.password }).then((resp) => {
        var data = resp.data.itemMap
        if (resp.data.errCode == '001') {
          this.$vux.toast.show("用户名或密码错误")
        } else {
          //  success. Let's load up the dashboard
          console.log(data.token)
          if (window.localStorage) {
            // window.localStorage.setItem('user', JSON.stringify(data.user))
            window.localStorage.setItem('token', data.token)
          }

          this.$router.push("/")
        }

      })
    }
  },
  components: {
    XHeader, Group, Blur, XInput, XButton

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.fa {
  padding-right: 15px;
}

.login {
  height: 100%;
  background: rgb(105, 155, 200);

  background: radial-gradient(ellipse at top left, rgba(105, 155, 200, 1) 0%, rgba(181, 197, 216, 1) 57%);
  .content {
    padding-top: 150px;
    color: white;
  }
}
</style>
