<template>
  <div class="verification">
    <div class="card">
      <h4>电子码：{{order.serialNo}}</h4>
      <p class="kv-pair"><span>交易单号：</span><b>{{order.orderNo}}</b></p>
      <p class="kv-pair"><span>交易时间：</span><b>{{order.createTime}}</b></p>
      <mt-cell :title="order.commodity.name" :label="order.commodity.description" class="commodity"/>
      <div class="user">
        <p class="name"><span>姓名</span><b>{{order.user.name}}</b></p>
        <p class="phone"><span>电话</span><b>{{order.user.phone}}</b></p>
      </div>
      <p class="amount">{{order.amount | toYuan}}</p>
      <div class="buttons">
        <mt-button class="btn btn-cancel" @click="reScan">重新扫描</mt-button>
        <mt-button class="btn btn-ok" @click="handleVerification">确认核销</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  name: 'Index',
  data () {
    return {
      order: {
        serialNo: '00121388421',
        orderNo: '201901020012001254',
        createTime: '2019-10-10 10:10:10',
        amount: '123.00',
        commodity: {
          name: '【爱化妆】美甲预约',
          description: '资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。'
        },
        user: {
          name: '莱温特',
          phone: '13235147452'
        }
      }
    }
  },
  methods: {
    handleVerification () {
      Toast({
        message: '执行核销操作',
        duration: 2000
      })
    },
    reScan () {
      Toast({
        message: '重新扫描',
        duration: 2000
      })
    }
  }
}
</script>

<style scoped lang="less">
  .verification {
    .card {
      margin: 30px;
      background-color: white;
      padding: 10px;
      border-radius: 9px;

      h4 {
        color: #333333;
        font-weight: normal;
        font-size: 1.5rem;
        margin: 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #DDDDDD;
      }

      .kv-pair {
        color: #666666;
        font-size: .8rem;
        margin: 0;
        padding: 5px 10px;
      }

      .commodity {
        margin: 10px 0;
      }

      .user {
        padding: 0 10px;

        .name {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: space-between;

          span {
            color: #333333;
            font-size: 1.1rem;
          }

          b {
            color: #333333;
            font-weight: normal;
          }
        }

        .phone {
          font-size: .9rem;
          display: flex;
          justify-content: space-between;
          color: #666666;
          margin: 5px 0;
          padding: 0;
        }
      }

      .amount {
        color: red;
        font-size: 1.3rem;
      }

      .buttons {
        display: flex;
        justify-content: space-between;

        .btn {
          width: 40%;
        }

        .btn-ok {
          background-color: #26A2FF;
          color: white;
        }
      }
    }
  }
</style>
