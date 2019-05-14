<template>
  <mt-tab-container v-model="selected" :active.sync="selected">
    <mt-tab-container-item id="home">
      <home v-if="selected === 'home'"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="order">
      <order v-if="selected === 'order'"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="verification">
      <verification v-if="selected === 'verification'"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="my">
      <my/>
    </mt-tab-container-item>
  </mt-tab-container>
</template>

<script>
import Home from './home/Index'
import Order from './order/Index'
import Verification from './verification/Index'
import My from './my/Index'

export default {
  name: 'Index',
  components: {
    Home,
    Order,
    Verification,
    My
  },
  created () {
  },
  data () {
    return {}
  },
  computed: {
    selected: {
      get () {
        return this.$store.state.app.tabbar
      },
      set (tab) {
        this.$store.dispatch('app/selectTab', tab)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .index {
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>
