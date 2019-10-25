import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.less'
class GoodsBox extends Component {
  state = {
    context: {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let { _id, name, pic, price } = this.props.data

    return (
      <View className='goods'>
        <Image src={pic} class='coverImg'></Image>
        <View class='name'>我和哦的开始懂了开始登记反馈两室的荆防颗粒京东方{name}</View>
        <View class='priceBox'>
          <View class='price'>
            <Text>¥</Text>
            {price}4444
          </View>
          <Button>去购买</Button>
        </View>
      </View>
    )
  }
}
GoodsBox.defaultProps = {
  data: {}
}
GoodsBox.propTypes = {
  data: PropTypes.object
}
export default GoodsBox
