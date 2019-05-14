<template>
  <div class="home">
    <div class="chart-wrapper">
      <canvas id="home-charts" width="500" height="280"></canvas>
    </div>
    <div class="data-list">
      <p class="title-text">统计数据</p>
      <mt-cell v-for="data in dataList" :key="data.name" :title="data.name" :value="data.value"/>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import homeCharts from './homeCharts'

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
  },
  mounted () {
    const ele = document.getElementById('home-charts')
    const charts = echarts.init(ele)
    homeCharts.initCharts(charts)
  }
}
</script>

<style scoped lang="less">
  .home {
    .chart-wrapper {
      margin: 20px auto;
      height: 200px;
      text-align: center;

      #home-charts {
        width: 100%;
        height: 100%;
      }
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
