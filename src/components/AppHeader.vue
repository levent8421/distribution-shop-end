<template>
  <mt-header fixed :title="title">
    <mt-button slot="left" icon="back">返回</mt-button>
    <mt-button slot="right" icon="more"></mt-button>
  </mt-header>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    title: {
      get () {
        return this.$store.state.app.title
      },
      set (v) {
        this.$store.dispatch('app/setTitle', v)
      }
    }
  }
}
</script>

<style scoped>

</style>
