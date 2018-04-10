//app.js
App({
  onLaunch: function () {
    var thiz = this;
    // 展示本地存储能力
    if(wx.getStorageSync('readAppointment') != undefined) {
      if (wx.getStorageSync('readAppointment').length != 0) {
        this.globalData.readList.appointment = wx.getStorageSync('readAppointment');
      }
    }
    if(wx.getStorageSync('readOpportunity') != undefined) {
      if (wx.getStorageSync('readOpportunity').length != 0) {
        this.globalData.readList.opportunity = wx.getStorageSync('readOpportunity');
      }
    }
    wx.login({
      //获取code
      success: function (res) {
        var code = res.code; //返回code
        var appId = 'wxa9b01c5f7e4c5174';
        var secret = '0f5dcdae2ec4f7ba0442b6b650ff3350';
        if(!wx.getStorageSync('openId')){
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
              wx.setStorage({
                key: 'openId',
                data: openid,
              })
              if (thiz.getUserInfoCallback) {
                thiz.getUserInfoCallback(openid)
              }
            }
          })
        } else {
          // thiz.globalData.openID = wx.getStorageSync('openId');
        }
      }
    })//get wechat login info
  },
  globalData: {
    userInfo: null,
    openID: null,
    employeeName:null,
    readList:{
      appointment:[],
      opportunity:[]
    },
    fakeOpportunity:null
  }
})