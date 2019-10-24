import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { REQUEST_STATUS } from '../../constants'
export default class Pay extends Component {
  state = {
    context: {}
  }
  unifiedorder_data = null

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // getPayFUN() {
  //   Taro.cloud
  //     .callFunction({
  //       name: 'pay',
  //       data: { type: 'unifiedorder', data: { goodId: 'goods_1' } }
  //     })
  //     .then(res => {
  //       let { code, data } = res.result
  //       console.log('unifiedorder-->', code == REQUEST_STATUS.SUCCESS, { code, data })
  //       if (code == REQUEST_STATUS.SUCCESS) {
  //         this.unifiedorder_data = data
  //         console.log('this.unifiedorder_data', this.unifiedorder_data)

  //         this.openWen()
  //       }
  //     })
  // }

  // openWen() {
  //   let { time_stamp, nonce_str, prepay_id, sign_type, sign, package_str } = this.unifiedorder_data
  //   let _this = this
  //   console.log('1111,222')
  //   wx.requestPayment({
  //     timeStamp: time_stamp,
  //     nonceStr: nonce_str,
  //     package: package_str,
  //     signType: sign_type,
  //     paySign: sign,
  //     success() {
  //       console.log('支付成功')
  //       _this.queryOrder()
  //     },
  //     fail() {}
  //   })
  // }

  /**订单文档的status 0 未支付 1 已支付 2 已关闭 */
  queryOrder() {
    let { out_trade_no } = this.unifiedorder_data
    Taro.cloud
      .callFunction({
        name: 'pay',
        data: { type: 'payorder', data: { out_trade_no } }
      })
      .then(res => {
        let { code, data } = res.result
        console.log('payorder-->', code == REQUEST_STATUS.SUCCESS, { code, data })
        if (code == REQUEST_STATUS.SUCCESS) {
          this.setState({
            context: data
          })
        }
      })
  }

  render() {
    let { context } = this.state
    return (
      <View className='index'>
        <Button onClick={this.getPayFUN.bind(this)}>去支付</Button>
        {/* context:{JSON.stringify(context)} */}
      </View>
    )
  }
}
