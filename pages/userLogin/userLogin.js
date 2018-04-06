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
    isAssigned:false,
  },

  // startInput: function (e) {
  //   this.setData({
  //     isInput:1
  //   })
  // },

  infoSubmit: function (e) { 
    if(this.data.isAssigned) {
      wx.switchTab({
        url: '/pages/appointments/appointments',
      })
    }else {
      var postData = e.detail.value;
      app.globalData.employeeName = e.detail.value.employeeName;//将employeeName注册为全局参数
      postData.openId = this.data.openID;
      wx.showLoading({
        title: 'assigning',
        mask: true
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
            icon: 'success',
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
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var employeeName = wx.getStorageSync('employeeName');  
    var openId = wx.getStorageSync('openId');
    if (employeeName) {          
      this.setData({
        isAssigned: true,
        employeeName: employeeName
      })
    }
    if(openId) {
      this.setData({
        openID: openId
      })
      wx.hideLoading()
    }else {
      wx.showLoading({
        title: 'Loading',
        mask: true
      });
      app.getUserInfoCallback = res => {
        this.setData ({
          openID: res
        });
        wx.hideLoading();
      }
    }
    // if (app.globalData.openID) {
    //   this.setData({
    //     openID: app.globalData.openID
    //   })
    //   wx.setStorage({
    //     key: 'openId',
    //     data: app.globalDa,
    //   })
    //   wx.hideLoading();
    // } else {
    //   app.getUserInfoCallback = res => {
    //     this.setData({
    //       openID: res
    //     })
    //     wx.hideLoading()
    //   }
    // }
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
   
  },
  
})