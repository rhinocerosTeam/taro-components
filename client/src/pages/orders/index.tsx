import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import PayUtils from '../../utils/payUtils'
/**订单文档的status 0 未支付 1 已支付 2 已关闭 */
const ORDER_STATUS = {
  0: '未支付',
  1: '已支付',
  2: '已关闭'
}
export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  state = {
    orders: []
  }

  componentWillMount() {}

  componentDidMount() {
    this.queryOrders()
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  async queryOrders() {
    // 利用云开发新接口，读取所有商品数据
    const db = Taro.cloud.database()
    const result = await db.collection('order').get()

    let data = result.data || []

    this.setState({
      orders: data
    })
  }

  goPay(out_trade_no) {
    PayUtils.requestPayment(
      out_trade_no,
      null,
      () => {
        console.log('支付成功')
        this.queryOrders()
      },
      () => {
        console.log('支付失败')
      }
    )
  }

  render() {
    let { orders } = this.state
    return (
      <View className='index'>
        {orders &&
          orders.map((obj, index) => {
            return (
              <View key={'orders' + obj._id}>
                <View>
                  {obj.body}-{obj.total_fee}-{ORDER_STATUS[obj.status]}
                </View>
                <View>{obj.status == 0 && <Button onClick={this.goPay.bind(this, obj.out_trade_no)}>去支付</Button>}</View>
              </View>
            )
          })}
      </View>
    )
  }
}
