import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import { REQUEST_STATUS } from '../../constants'
import PayUtils from '../../utils/payUtils'
import GoodsBox from '../../components/goodsBox'
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
    this.queryGoods()
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  async queryGoods() {
    // 利用云开发新接口，读取所有商品数据
    const db = Taro.cloud.database()
    const result = await db.collection('goods').get()

    let data = result.data || []

    this.setState({
      orders: data
    })

    console.debug(1111111)
  }

  unifiedorder(id) {}
  render() {
    let { orders } = this.state
    return (
      <View className='index'>
        <View class='goodsCont'>
          {orders &&
            orders.map(obj => {
              return <GoodsBox class='GoodsBox' data={obj} key={'goodsbox_' + obj._id} />
            })}
        </View>
      </View>
    )
  }
}
