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
          <Image src={img.returnIcon} class='returnIcon'></Image>
        </View>
        <View class='goodsDescCont' alt='商品简单描述'>
          <View class='goodsPriceBox'>
            <View class='priceBox'>
              <View class='price'>
                <Text>¥</Text>12.72
              </View>
              <View class='oldPrice'>
                <Text>¥</Text>19.6
              </View>
            </View>
            <View class='shareBox'>
              <View class='buyNum'>7543人已买</View>
              <View class='share'>
                <Image src={img.shareIcon} class='shareIcon'></Image>
                <View class='shareBtn'>分享</View>
              </View>
            </View>
          </View>
          <View class='goodsName'>
            <View class='names'>【汁甜味浓】草木青黄金百香果50g/粒 </View>
            <View class='greytext'>草木青黄百香果</View>
          </View>
        </View>
        <View class='specificationsCont' alt='规格'>
          <View>
            <View>规格</View>
            <View>已选择:规格:1个</View>
          </View>
        </View>
        <View alt='评价'></View>
        <View class='detailCont' alt='商品详情'>
          <Image src={img.shareIcon} />
        </View>
        <View class='footerBox'>
          <View class='home button'>
            <Image src={img.homeIcon} />
            <View>首页</View>
          </View>
          <View class='kefu button'>
            <Image src={img.kefuIcon} />
            <View>客服</View>
          </View>
          <View class='buyBtnBox'>
            {/* <View class='button'>已售罄</View> */}
            <View class='buy'>立即购买</View>
          </View>
        </View>
      </View>
    )
  }
}
