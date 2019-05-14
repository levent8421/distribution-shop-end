<template>
  <div class="order">
    <img src="../../assets/icon_info.png" alt="" @click="toLogin">
    <p>敬请期待</p>
  </div>
</template>

<script>
export default {
  name: 'Index',
  created () {
  },
  methods: {
    toLogin () {
      this.$router.replace({name: 'Login'})
    }
  }
}
</script>

<style scoped lang="less">
  .order {
    img {
      width: 50%;
      margin: 100px auto 50px auto;
      display: block;
    }

    p {
      text-align: center;
      color: #666666;
    }
  }
</style>
