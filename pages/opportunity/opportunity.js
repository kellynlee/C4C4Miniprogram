// pages/opportunity/opportunity.js
const app = getApp();
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    today: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    totalNum: '',
    accountName: 'Jason Born',
    barHeight: 200,
    scrollHeight: 82,
    screenHeight: '',
    background: 'background: linear-gradient(to bottom, #509AFF, #60bdfe);',
    startPos: '',
    isToTop: '',
    textFade: '',
    textShow: '',
    headerAnimation: '',
    isTranslated: false,
    listAnimation: '',
    addBtnAnimation: '',
    opportunityList: []
  },

  toTop: function (e) {
    this.setData({
      isToTop: true
    })
    // console.log('top')
  },

  startPosition: function (e) {
    this.setData({
      startPos: e.changedTouches[0].clientY
    })
  },

  moveContent: function (e) {
    var thiz = this.data;
    var screenHeight = this.data.screenHeight,
      barHeight = this.data.barHeight,
      aimHeight = screenHeight * 0.1,
      leftHeight = Math.floor(barHeight - aimHeight * 2),
      listLeftHeight = leftHeight;
    let currentPos = e.changedTouches[0].clientY;
    var headerAnimation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out',
      delay: 0
    });
    var listAnimation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out',
      delay: 0
    });
    var btnAnimation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out',
      delay: 0
    });
    if (currentPos - this.data.startPos < 0) {
      // console.log('up')
      if (this.data.isToTop) {
        this.setData({
          isToTop: false
        })
      }
      var textFade = wx.createAnimation({
        duration: 200,
        timingFunction: 'liner',
        delay: 0
      });
      var textShow = wx.createAnimation({
        duration: 200,
        timingFunction: 'liner',
        delay: 100
      });
      headerAnimation.translateY(-leftHeight).step();
      listAnimation.translateY(-listLeftHeight).step();
      textFade.opacity(0).step();
      textShow.opacity(1).step();
      btnAnimation.translateY(20).step();
      this.setData({
        headerAnimation: headerAnimation.export(),
        listAnimation: listAnimation.export(),
        textShow: textShow.export(),
        textFade: textFade.export(),
        addBtnAnimation: btnAnimation.export(),
        scrollHeight: 94,
        background: 'background-position: 100% -200%; transition:background 1s ease-out;',
        isTranslated: true
      })
    } else {
      if (this.data.isTranslated && this.data.isToTop) {
        var textFade = wx.createAnimation({
          duration: 200,
          timingFunction: 'liner',
          delay: 100
        });
        var textShow = wx.createAnimation({
          duration: 200,
          timingFunction: 'liner',
          delay: 0
        });
        // console.log('down')
        headerAnimation.translateY(0).step();
        listAnimation.translateY(0).step();
        textFade.opacity(1).step();
        textShow.opacity(0).step();
        btnAnimation.translateY(0).step();
        this.setData({
          headerAnimation: headerAnimation.export(),
          listAnimation: listAnimation.export(),
          textFade: textFade.export(),
          textShow: textShow.export(),
          addBtnAnimation: btnAnimation.export(),
          scrollHeight: 82,
          background: 'background-position: 100% 80%; transition:background 1s ease-out;',
          isTranslated: false
        })
      }
    }
  },

  addNew: function () {
    wx.redirectTo({
      url: '../../pages/createOpportunity/createOpportunity',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var thiz = this;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var thiz = this;
    var systemInfo = wx.getSystemInfo({
      success: function (res) {
        thiz.setData({
          screenHeight: res.screenHeight
        })
      }
    })
    var date = new Date,
      day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear(),
      weekDay = date.getDay();
    switch (weekDay) {
      case 0:
        weekDay = 'Sunday';
        break;
      case 1:
        weekDay = 'Monday';
        break;
      case 2:
        weekDay = 'Tuseday';
        break;
      case 3:
        weekDay = 'Wednsday';
        break;
      case 4:
        weekDay = 'Thusday';
        break;
      case 5:
        weekDay = 'Friday';
        break;
      case 6:
        weekDay = 'Sunday';
        break;
    }
    this.setData({
      today: weekDay + ',' + day + ' ' + month + ' ' + year
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    var openId = wx.getStorageSync('openId');
    var readList = wx.getStorageSync('readOpportunity');
    /**********fake for demo************/
    // wx.showLoading({
    //   title: 'loading',
    // })
    // let fakeData = [
    //   {
    //     ID: '3748',
    //     ProbabilityPercent: 40,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity1'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '3746',
    //     ProbabilityPercent: 30,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity2'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '37481',
    //     ProbabilityPercent: 10,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity3'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '37443',
    //     ProbabilityPercent: 50,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity4'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '374843',
    //     ProbabilityPercent: 40,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity5'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '3748890',
    //     ProbabilityPercent: 0,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity6'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '374887',
    //     ProbabilityPercent: 90,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity7'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '374854',
    //     ProbabilityPercent: 100,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity7'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '374844',
    //     ProbabilityPercent: 70,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity7'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '3748123',
    //     ProbabilityPercent: 50,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity7'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '3748000',
    //     ProbabilityPercent: 30,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity7'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '3748452',
    //     ProbabilityPercent: 70,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity7'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '3748234',
    //     ProbabilityPercent: 40,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity7'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   },
    //   {
    //     ID: '37489056',
    //     ProbabilityPercent: 50,
    //     Subject: 'Driving Appointment',
    //     Owner: 'Jason Born',
    //     Name: {
    //       content: 'Opportunity7'
    //     },
    //     AccountName: {
    //       content: 'Jack Lee'
    //     },
    //     StatusCodeText: 'InProcess',
    //     Phone: '+86 1234235',
    //     LocationName: 'Chengdu',
    //     StartDate: '2017-12-24 14:00PM',
    //     CloseDate: '2017-12-24 17:30PM',
    //     isRead: false
    //   }
    // ];
    // if (app.globalData.fakeOpportunity == null) {
    //   app.globalData.fakeOpportunity = fakeData;
    // }
    // // console.log(app.globalData.fakeOpportunity);
    // // setTimeout(() => {
    // wx.hideLoading();
    // this.setData({
    //   opportunityList: app.globalData.fakeOpportunity,
    //   totalNum: app.globalData.fakeOpportunity.length
    // });
    // var length = this.data.totalNum;
    // for(let i = 0;i < length;i++) {
    //   if (readList.indexOf(this.data.opportunityList[i].ID) != -1) {
    //     this.setData({
    //       'opportunityList[i].isRead' : true
    //     })
    //   }
    // }
    // console.log(this.data.opportunityList)
    // // }, 300)
    // console.log(this.data.opportunityList);
    /**********fake for demo************/

    if (this.data.opportunityList.length == 0) {
      wx.showLoading({
        title: 'loading',
        mask: true
      })
      try {
        /**********true request************/
        wx.request({
           url: util.urlList.getOpportunity,
           data: {
             'openId': openId
           },
           success: res => {
             console.log(res)
             wx.hideLoading();
             var res = res.data.opportunities;
             if(res != undefined) {
               var length = res.length;
             }else {
               var length = 0
             }

             for (let i = 0; i < length; i++) {
               if (res[i].CloseDate!= null) {
                 let date = new Date(parseInt(res[i].CloseDate.match(/[\d]/g).join('')));
                 res[i].CloseDate = util.dateSplice(date);
               } else {
                 res[i].CloseDate = '';
               }
               if (res[i].StartDate != null) {
                 let date = new Date(parseInt(res[i].StartDate.match(/[\d]/g).join('')));
                 res[i].StartDate = util.dateSplice(date)
               } else {
                 res[i].StartDate = '';
               }
               if (res[i].Name.content.length > 35) {
                 res[i].Name.content = res[i].Name.content.slice(0,35) + '...'
               }
               if (readList.indexOf(res[i].OpportunityID) != -1) {
                  res[i].isRead = true;
                }
             }
             this.setData({
               opportunityList: res,
               totalNum: length
             })
           }
         })
        /**********true request************/
      } catch (e) {
        // console.log(e)
        // wx.hideLoading();
        // wx.showToast({
        //   title: 'Error',
        // })
      }
      setTimeout(() => {
        if (this.data.opportunityList.length == 0) {
          wx.hideLoading();
          wx.showToast({
            title: 'No Data',
            mask: true,
            image: '../../icons/error.png'
          })
        }
      }, 41000)
    }
    if (this.data.isTranslated) {
      var headerAnimation = wx.createAnimation({
        duration: 400,
        timingFunction: 'ease-out',
        delay: 0
      });
      var listAnimation = wx.createAnimation({
        duration: 400,
        timingFunction: 'ease-out',
        delay: 0
      });
      var textFade = wx.createAnimation({
        duration: 200,
        timingFunction: 'liner',
        delay: 200
      });
      var textShow = wx.createAnimation({
        duration: 200,
        timingFunction: 'liner',
        delay: 0
      });
      var btnAnimation = wx.createAnimation({
        duration: 400,
        timingFunction: 'ease-out',
        delay: 0
      });
      // console.log('down')
      headerAnimation.translateY(0).step();
      listAnimation.translateY(0).step();
      btnAnimation.translateY(0).step();
      textFade.opacity(1).step();
      textShow.opacity(0).step();
      this.setData({
        headerAnimation: headerAnimation.export(),
        listAnimation: listAnimation.export(),
        addBtnAnimation: btnAnimation.export(),
        textFade: textFade.export(),
        textShow: textShow.export(),
        scrollHeight: 82,
        background: 'background: linear-gradient(to bottom, #509AFF, #60bdfe);',
        isTranslated: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var read = app.globalData.readList.opportunity;
    wx.setStorage({
      key: 'readOpportunity',
      data: read,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
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