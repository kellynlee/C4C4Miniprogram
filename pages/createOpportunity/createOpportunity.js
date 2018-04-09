// pages/createOpportunity.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocused:false,
    openId:'',
    opportunityData:{
      DocumentType:'Opportunity',
      Type:'',
      Name:'',
      Account:'',
      PrimaryContact:'',
      Normal:'',
      ExpectedValue:'',
      StartDate:'',
      EndDate:'',
      SalesCircle:'',
      Probability:'',
      Category:'',
      Campaign:'',
      Owner:'',
      TerritpryID:'',
      SalesOrganization:'',
      SalseUnit:'',
      CustomStatus:'',
      SalesOrder:'',
    },
    currencyList: ["RMB", "USD", "EUR", "GBP", "JPY"],
    currencyIndex: 0,
    arr:[]
  },

  bindPickerChange :function (e) {
    console.log(e.detail)
    this.setData({
      currencyIndex: e.detail.value
    })
  },

  submitOpportunity:function (e) {
    var postData = e.detail.value;
    var index = this.data.currencyIndex;
    postData.currencyCode = this.data.currencyList[index];
    console.log(this.data.openId)
    wx.request({
      url: 'http://testc4cwc.duapp.com/mini/formid',
      data: {
        ids: e.detail.formId,
        openId: this.data.openId
      },
      method: 'POST',
      success: (res) => {
        console.log(res)
      }
    })
    // if (postData.name.length == 0) {
    //   wx.showModal({
    //     title: 'Warning',
    //     content: 'Please Input Name!',
    //     confirmText: 'Confirm',
    //     showCancel: false
    //   })
    //   return false
    // }

    // if (postData.account.length == 0) {
    //   wx.showModal({
    //     title: 'Warning',
    //     content: 'Please Input Account!',
    //     confirmText: 'Confirm',
    //     showCancel: false
    //   })
    //   return false
    // }

    // if (postData.owner.length == 0) {
    //   wx.showModal({
    //     title: 'Warning',
    //     content: 'Please Input Owner!',
    //     confirmText: 'Confirm',
    //     showCancel: false
    //   })
    //   return false
    // }

    // var reg = /^[0-9]*$/;

    // if(!reg.test(postData.amount)) {
    //   wx.showModal({
    //     title: 'Warning',
    //     content: 'Expected Value Must be Number!',
    //     confirmText: 'Confirm',
    //     showCancel: false
    //   })
    //   return false
    // }

    // if (!reg.test(postData.probabilityPercentage)) {
    //   wx.showModal({
    //     title: 'Warning',
    //     content: 'Probability Must be Number!',
    //     confirmText: 'Confirm',
    //     showCancel: false
    //   })
    //   return false
    // } else {
    //   postData.probabilityPercentage = postData.probabilityPercentage + '.000000'
    // }
    // wx.showLoading({
    //   title: 'Saving',
    // })
    // wx.request({
    //   url: 'http://testc4cwc.duapp.com/mini/opportunity',
    //   data: postData,
    //   method: "POST",
    //   success: (res) => {
    //     wx.hideLoading()
    //     wx.showToast({
    //       title: 'Saved!',
    //       duration:3000,
    //       success: (res) => {
    //         wx.switchTab({
    //           url: '/pages/opportunity/opportunity',
    //         })
    //       }
    //     })
    //   }
    // })
  },

  clickInput: function (e) {
    // this.setData({
    //   isFocused:true
    // })
    console.log(e)
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