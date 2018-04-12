// pages/createOpportunity.js
const app = getApp();
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocused: false,
    openId: '',
    employeeName:'',
    accountName:'',
    appointmentId:'',
    isConvert:false,
    opportunityData: {
      DocumentType: 'Opportunity',
      Type: '',
      Name: '',
      Account: '',
      PrimaryContact: '',
      Normal: '',
      ExpectedValue: '',
      StartDate: '',
      EndDate: '',
      SalesCircle: '',
      Probability: '',
      Category: '',
      Campaign: '',
      Owner: '',
      TerritpryID: '',
      SalesOrganization: '',
      SalseUnit: '',
      CustomStatus: '',
      SalesOrder: '',
    },
    currencyList: ["CNY", "USD", "EUR", "GBP", "JPY"],
    currencyIndex: 0,
    arr: []
  },

  bindPickerChange: function (e) {
    console.log(e.detail)
    this.setData({
      currencyIndex: e.detail.value
    })
  },

  submitOpportunity: function (e) {
    console.log(e.detail)
    var postData = e.detail.value;
    var index = this.data.currencyIndex;
    postData.currencyCode = this.data.currencyList[index];
    console.log(this.data.openId)
    util.setFormId(this.data.openId, e.detail.formId);
    if (!util.formValidator(postData.name)) {
      wx.showModal({
        title: 'Warning',
        content: 'Please Input Name!',
        confirmText: 'Confirm',
        showCancel: false
      })
      return false
    }
    if (!util.formValidator(postData.accountId)) {
      wx.showModal({
        title: 'Warning',
        content: 'Please Input Account!',
        confirmText: 'Confirm',
        showCancel: false
      })
      return false
    }

    if (!util.formValidator(postData.owner)) {
      wx.showModal({
        title: 'Warning',
        content: 'Please Input Owner!',
        confirmText: 'Confirm',
        showCancel: false
      })
      return false
    }

    if (!util.formValidator(postData.amount)) {
      postData.amount = '0'
    }

    if (!util.regValidator('num', postData.amount)) {
      wx.showModal({
        title: 'Warning',
        content: 'Expected Value Must be Number!',
        confirmText: 'Confirm',
        showCancel: false
      })
      return false
    }

    if (!util.regValidator('num', postData.probabilityPercent)) {
      wx.showModal({
        title: 'Warning',
        content: 'Probability Must be Number!',
        confirmText: 'Confirm',
        showCancel: false
      })
      return false
    } else {
      postData.probabilityPercent = postData.probabilityPercent + '.000000'
    }
    wx.showLoading({
      title: 'Saving',
    })
    /****************true request***************/
    wx.request({
      url: util.urlList.getOpportunity,
      data: postData,
      method: "POST",
      success: (res) => {
        wx.hideLoading()
        wx.showToast({
          title: 'Saved!',
          duration:3000,
          success: (res) => {
            wx.switchTab({
              url: '/pages/opportunity/opportunity',
            })
          }
        })
      }
    })
    /****************true request***************/

    /************fake for demo**************/
    // console.log(app.globalData.fakeOpportunity)
    // var date = new Date,
    //   start = util.dateSplice(date);
    // var data = {
    //   AccountName: { content: e.detail.value.account},
    //   CloseDate: start,
    //   LocationName:"Chengdu",
    //   Name: { content: e.detail.value.name },
    //   Owner: e.detail.value.owner,
    //   Phone:"+86 1234235",
    //   ProbabilityPercent: 50,
    //   StartDate: start,
    //   StatusCodeText:"InProcess",
    //   Subject: "Driving Appointment",
    //   isRead:false
    // }
    // app.globalData.fakeOpportunity.unshift(data);
    // setTimeout(() => {
    //   // console.log(app.globalData.fakeOpportunity)
    //   wx.hideLoading();
    //   wx.showToast({
    //     title: 'Success',
    //     success: (res) => {
    //       wx.switchTab({
    //         url: '/pages/opportunity/opportunity',
    //       })
    //     }
    //   });
    // }, 300)
    /************fake for demo**************/

  },

  clickInput: function (e) {
    // this.setData({
    //   isFocused:true
    // })
    console.log(e)
  },
  cancel: function () {
    wx.showModal({
      title: 'info',
      content: 'Do you want to go back?',
      showCancel: true,
      cancelText: 'Cancel',
      confirmText: 'Yes',
      success: (res) => {
        if (res.confirm) {
          wx.switchTab({
            url: '/pages/opportunity/opportunity',
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.account != undefined) {
      this.setData({
        accountName: options.account,
        isConvert: true
      })
    }
    if (options.Id != undefined) {
      this.setData({
        appointmentId: 'For AppointmentId:' + options.Id
      })
    }
    var employeeName = wx.getStorageSync('employeeName');
    this.setData({
      employeeName: employeeName
    })
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
    var openId = wx.getStorageSync('openId')
    this.setData({
      openId: openId
    })
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