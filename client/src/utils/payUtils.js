import Taro, { Component, Config } from '@tarojs/taro'
export default {
  async requestPayment(orderNo, formId, successCallback, errorCallback) {
    const db = Taro.cloud.database()
    let res = await db
      .collection('order')
      .where({ out_trade_no: orderNo })
      .get()
    console.log(res)
    let data = (res.data && res.data[0]) || null
    if (data) {
      console.log('======>', data)
      // 调用微信支付方法
      wx.requestPayment({
        timeStamp: data.time_stamp,
        nonceStr: data.nonce_str,
        package: data.package,
        signType: data.sign_type,
        paySign: data.sign,
        success() {
          Taro.cloud.callFunction({ name: 'pay', data: { type: 'payorder', data: { out_trade_no: orderNo } } }).then(res => {
            console.log(res)
          })

          successCallback()
        },
        fail() {
          errorCallback()
        }
      })
    }
  }
}
