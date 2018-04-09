// pages/opportunity/opportunity.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    today: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    totalNum: 12,
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
    addBtnAnimation:'',
    opportunityList: [
      // {
      //   ProbabilityPercentage:40,
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity1'
      //   },
      //   AccountName: {
      //     content:'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate:'2017-12-24 14:00PM',
      //   CloseDate:'2017-12-24 17:30PM',
      //   isRead: false
      // },
      // {
      //   ProbabilityPercentage: 30,        
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity2'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 10,        
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity3'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 50,        
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity4'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 40,        
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity5'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 0,        
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity6'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 100,        
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity7'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 100,
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity7'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 100,
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity7'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 100,
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity7'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 100,
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity7'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 100,
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity7'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 100,
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity7'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }, {
      //   ProbabilityPercentage: 100,
      //   Subject: 'Driving Appointment',
      //   Owner: 'Jason Born',
      //   Name: {
      //     content: 'Opportunity7'
      //   },
      //   Account: {
      //     content: 'Jack Lee'
      //   },
      //   StatusCodeText: 'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDate: '2017-12-24 14:00PM',
      //   CloseDate: '2017-12-24 17:30PM',
      //   isRead: false
      // }
    ]
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
      delay:0
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
    wx,wx.navigateTo({
      url: '../../pages/createOpportunity/createOpportunity',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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
  onShow: function () {
    var openId = wx.getStorageSync('openId');
    if (this.data.opportunityList.length == 0) {
      wx.showLoading({
        title: 'loading',
        mask: true
      })
      try {
        wx.request({
          url: 'http://testc4cwc.duapp.com/mini/opportunity',
          data: {
            'openId': openId
          },
          success: res => {
            console.log(res)
            wx.hideLoading();
            var res = res.data.opportunities,
              length = res.length;
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
            }
            this.setData({
              opportunityList: res,
              totalNum: length
            })
          }
        })
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
            title: 'Error',
            mask: true,
            image: '../../icons/error.png'
          })
        }
      }, 31000)
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