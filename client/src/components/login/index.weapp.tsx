import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Login extends Component {
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

  getLogin = userInfo => {
    Taro.cloud
      .callFunction({
        name: 'login',
        data: { userInfo: JSON.stringify(userInfo) }
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
        <Button openType='getUserInfo' onGetUserInfo={this.getUserInfo.bind(this)}>
          获取登录云函数
        </Button>
        <View>context：{JSON.stringify(this.state.context)}</View>
      </View>
    )
  }
}
