<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="home">
      <img slot="icon" src="../assets/icon_setting.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="order">
      <img slot="icon" src="../assets/icon_setting.png">
      订单
    </mt-tab-item>
    <mt-tab-item id="verification">
      <img slot="icon" src="../assets/icon_setting.png">
      核销
    </mt-tab-item>
    <mt-tab-item id="my">
      <img slot="icon" src="../assets/icon_setting.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'AppTabBar',
  data () {
    return {
      selected: 'home'
    }
  },
  watch: {
    selected (tab) {
      this.$store.dispatch('app/selectTab', tab)
    }
  }
}
</script>

<style scoped>

</style>
