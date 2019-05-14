<template>
  <div class="login">
    <div class="avatar">
      <img src="../assets/icon_setting.png" alt="">
    </div>
    <div class="form-wrapper">
      <mt-field v-model="username" placeholder="请输入账户名"/>
      <mt-field v-model="password" placeholder="请输入密码" type="password"/>
    </div>
    <mt-button type="primary" class="btn-login" @click="login">登录</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created () {
    this.$store.dispatch('app/hideTabbar')
  },
  methods: {
    login () {
      const username = this.username
      const password = this.password
      if (!username) {
        Toast('请输入用户名')
        return
      }
      if (!password) {
        Toast('请输入密码')
        return
      }
      Toast('登录成功')
      this.$router.replace({name: 'Index'})
    }
  }
}
</script>

<style scoped lang="less">
  .login {
    overflow: hidden;

    .avatar {
      width: 100px;
      height: 100px;
      margin: 100px auto 50px auto;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .form-wrapper {
      width: 90%;
      margin: 0 auto;
    }

    .btn-login {
      display: block;
      width: 90%;
      margin: 10px auto auto auto;
    }
  }
</style>
