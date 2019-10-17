const cloud = require('wx-server-sdk')
const got = require('got')

cloud.init({ env: 'prod-70p4d', traceUser: true })
const db = cloud.database()
exports.main = async query => {
  const wxContext = cloud.getWXContext()
  console.log('query', query)
  var userInfo = JSON.parse(query.userInfo)
  console.log('query', query, userInfo)
  var user = {
    avatarUrl: userInfo.avatarUrl,
    nickName: userInfo.nickName,
    city: userInfo.city,
    country: userInfo.country,
    province: userInfo.province,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID
  }

  console.log('db', user)

  await db.collection('users').add({ data: user })

  return user
}

/**
let getResponse = await got('httpbin.org/get') //get请求 用httpbin.org这个网址做测试
  return getResponse.body
   */
