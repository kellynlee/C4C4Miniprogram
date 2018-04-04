// pages/userLogin/userLogin.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openID: null,
    employeeID: null,
    employeeName:null,
    isInput:0,
  },

  startInput: function (e) {
    this.setData({
      isInput:1
    })
  },

  infoSubmit: function (e) {
    var postData = e.detail.value;
    app.globalData.employeeName =  e.detail.value.employeeName;//将employeeName注册为全局参数
    postData.openId = this.data.openID;
    wx.showLoading({
      title: 'assigning',
      mask:true
    })
    wx.request({
      url: 'http://testc4cwc.duapp.com/mini/employee',
      data: postData,
      method: 'POST',
      success: function (res) {
        // console.log(res)
        // if (res == 'success') {
        wx.setStorageSync('employeeName', postData.employeeName)
          wx.hideLoading();
          wx.showToast({
            title: 'Success!',
            icon:'success',
            mask: true,
            success: (res) => {
              wx.switchTab({
                url: '/pages/appointments/appointments',
              })
            }
          })
          
        // }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.authorize({
      scope: 'scope.userInfo',
      success: res => {
        console.log(res)
      }
    })
    var app = getApp();
    console.log(app.globalData);
    if (app.globalData.openID) {
      this.setData({
        openID: app.globalData.openID
      })
    } else {
      app.getUserInfoCallback = res => {
        this.setData({
          openID: res
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})