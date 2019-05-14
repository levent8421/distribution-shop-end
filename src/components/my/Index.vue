<template>
  <div class="my">
    <mt-cell class="field-row" v-for="f in fields" :key="f.name" :title="f.name" :value="f.value"/>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      fields: [
        {
          name: '店铺名称',
          value: 'Linus Torvalds的小店'
        },
        {
          name: '联系电话',
          value: '1452369689'
        },
        {
          name: '注册人姓名',
          value: '莱温特'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .my {
    padding-top: 20px;

    .field-row {
      border-bottom: 1px solid #DDDDDD;
    }
  }
</style>
