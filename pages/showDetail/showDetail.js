// pages/appointments/show-detail.js
const app = getApp();
const util = require('../../utils/util.js');

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
        url: util.urlList.getDetail,
        data: option,
        success: (res) => {
          console.log(res)
        }
      })
  }
})
