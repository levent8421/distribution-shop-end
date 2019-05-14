<template>
  <div id="app">
    <app-header/>
    <router-view class="main-content"/>
    <app-tab-bar/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppTabBar from '@/components/AppTabBar'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppTabBar
  }
}
</script>

<style lang="less">
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F5F5F9;
    width: 100%;
    height: 100%;

    .main-content {
      padding-top: 40px;
      height: calc(100% - 40px);
      width: 100%;
    }
  }
</style>
