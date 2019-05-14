<template>
  <div class="home">
    <div class="chart-wrapper">
      图表区域
    </div>
    <div class="data-list">
      <p class="title-text">统计数据</p>
      <mt-cell v-for="data in dataList" :key="data.name" :title="data.name" :value="data.value"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      dataList: [
        {
          name: '今日销售额',
          value: '1000.00'
        },
        {
          name: '最高销售额',
          value: '1000.00'
        },
        {
          name: '今日接单数',
          value: '50'
        },
        {
          name: '最高接单数',
          value: '60'
        }
      ]
    }
  },
  created () {
  }
}
</script>

<style scoped lang="less">
  .home {
    .chart-wrapper {
      width: 80%;
      margin: 20px auto;
      background-color: white;
      height: 200px;
      text-align: center;
    }

    .data-list {
      .title-text {
        padding-left: 10px;
        color: #666666;
        font-size: .8rem;
      }
    }
  }
</style>
