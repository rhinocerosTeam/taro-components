import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button, Swiper, SwiperItem } from '@tarojs/components'
import './index.less'
import { img } from '../../constants'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  state = {
    orders: []
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='goodsDetail'>
        <View alt='轮播图' class='swiperBox'>
          <Swiper class='swiper' indicator-dots={true} autoplay={true} interval='5000' duration='1000' circular={true}>
            {[1, 2, 3].map((obj, index) => {
              return (
                <SwiperItem class='swiper-item' key={'item' + index}>
                  <Image src={img.homeIcon} />
                </SwiperItem>
              )
            })}
          </Swiper>
        </View>
        <View alt='商品简单描述'>
          <View></View>
        </View>
        <View alt='规格'></View>
        <View alt='评价'></View>
        <View alt='商品详情'></View>
      </View>
    )
  }
}
