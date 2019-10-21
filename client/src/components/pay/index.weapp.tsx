import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Pay extends Component {
  state = {
    context: {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getUserInfo(v) {
    this.getLogin(v.detail.userInfo)
  }

  getPay = userInfo => {
    Taro.cloud
      .callFunction({
        name: 'pay',
        data: { type: '111' }
      })
      .then(res => {
        this.setState({
          context: res.result
        })
      })
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.getPay.bind(this)}>去支付</Button>
      </View>
    )
  }
}
