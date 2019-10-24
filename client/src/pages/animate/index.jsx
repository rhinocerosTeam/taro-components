import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '动画'
  }
  state = { animationData: null, startCssAnimation: false }
  animation = null
  componentWillMount() {}

  async componentDidMount() {}

  start() {
    this.createAnimation()
    this.setState({
      startCssAnimation: true
    })
  }

  createAnimation() {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })

    this.animation = animation

    animation
      .translate(0, 0)
      .scale(1, 1)
      .rotate(180)
      .step()

    this.setState({
      animationData: animation.export()
    })

    animation
      .translate(150, 150)
      .scale(1, 2)
      .rotate(360)
      .step()
    this.setState({
      animationData: animation.export()
    })
  }

  render() {
    let { animationData, startCssAnimation } = this.state
    return (
      <View class='box'>
        <Button onClick={this.start.bind(this)}>创建动画</Button>
        <View class='blueviolet' animation={animationData}>
          js
        </View>
        <View class={`burlywood ${startCssAnimation ? 'cssAnimate' : ''}`}>css</View>
      </View>
    )
  }
}
