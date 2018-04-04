//app.js
App({
  onLaunch: function () {
    var thiz = this;
    // 展示本地存储能力
    wx.login({
      //获取code
      success: function (res) {
        var code = res.code; //返回code
        var appId = 'wxa9b01c5f7e4c5174';
        var secret = '0f5dcdae2ec4f7ba0442b6b650ff3350';
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
          data: {},
          header: {
            'content-type': 'json'
          },
          success: function (res) {
            console.log('get openId successfully')
            var openid = res.data.openid //返回openid
            thiz.globalData.openID = openid;
            if (thiz.getUserInfoCallback) {
              thiz.getUserInfoCallback(openid)
            }
          }
        })
      }
    })//get wechat login info
  },
  globalData: {
    userInfo: null,
    openID: null,
    employeeName:null
  }
})