export default {
  initCharts (charts) {
    const option = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: {formatter: '{value}%'},
          data: [{value: 50, name: '完成率'}]
        }
      ]
    }
    setInterval(() => {
      option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
      charts.setOption(option)
    }, 1000)
  }
}
