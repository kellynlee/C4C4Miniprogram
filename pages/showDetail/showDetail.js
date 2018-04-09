// pages/appointments/show-detail.js
Page({
  properties: {
    appointmentDetail:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  onLoad:function(option) {
      wx.request({
        url: 'http://testc4cwc.duapp.com/mini/getDataDetail',
        data: option,
        success: (res) => {
          console.log(res)
        }
      })
  }
})
