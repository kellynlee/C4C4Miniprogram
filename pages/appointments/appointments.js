//index.js
//获取应用实例
const app = getApp()

Date.prototype.dateSplice = function(date) {
  // console.log(this)
  // var date = new Date(timeStamp),
  var y = date.getFullYear() + '-',
  m = date.getMonth()+1 <= 10? '0' + (date.getMonth()+1) + '-':date.getMonth() + '-',
  d = date.getDay() < 10 ? '0' + date.getDay() + ' ' : date.getDay() + ' ',
  h = date.getHours()<10 ? '0' + date.getHours() + ':' : date.getHours() + ':',
  min = date.getMinutes()<10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':',
  s = date.getSeconds()<10?'0'+date.getSeconds() : date.getSeconds();
  // console.log(y + m + d + h + min + s)
  return y+m+d+h+min+s
}

Page({
  data: {
    userInfo: {},
    employName: null,
    hasUserInfo: false,
    today:'',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    totalNum:0,
    accountName: 'Jason Born',
    barHeight:200,
    scrollHeight:82,
    screenHeight:'', 
    background: 'background: linear-gradient(to bottom, #509AFF, #60bdfe);',
    startPos:'',
    isToTop:'',
    textFade:'',
    textShow:'',
    headerAnimation:'',
    isTranslated:false,
    listAnimation:'',
    appointmentList: [
      // {
      //   Subject:'Driving Appointment',
      //   Owner:{
      //     content: 'Jason Born'
      //   },
      //   StatusCodeText:'InProcess',
      //   Phone: '+86 1234235',
      //   LocationName: 'Chengdu',
      //   StartDateTime: {
      //     TimeZoneCode:'ZTC',
      //     content:'2017-12-24 14:00PM'
      //   },
      //   EndDateTime: {
      //     TimeZoneCode:'ZTC',
      //     content:'2017-12-24 17:30PM'
      //   },
      //   isRead:false
      // },
      // {
      //   Subject: 'Driving Appointment2',
      //   Owner: {
      //     content: 'Bruce Wayne'
      //   },
      //   StatusCodeText: 'Open',
      //   Phone: '+86 23 44235',
      //   LocationName: 'Gotham',
      //   StartDateTime: {
      //     TimeZoneCode: 'ZTC',
      //     content: '2017-03-24 22:00PM'
      //   },
      //   EndDateTime: {
      //     TimeZoneCode: 'ZTC',
      //     content: '2017-03-25 07:30AM'
      //   },
      //   isRead:false
      // },
      // {
      //   Subject: 'Kundenbesuch',
      //   Owner: {
      //     content: 'Peter Grün'
      //   },
      //   StatusCodeText: 'Completed',
      //   Phone: '+49 3073618914',
      //   LocationName: 'Darmstadt',
      //   StartDateTime: {
      //     TimeZoneCode: 'ZTC',
      //     content: '2017-03-24 22:00PM'
      //   },
      //   EndDateTime: {
      //     TimeZoneCode: 'ZTC',
      //     content: '2017-03-25 07:30AM'
      //   },
      //   isRead: false
      // }, {
      //   Subject: 'Kundenanfrage',
      //   Owner: {
      //     content: 'Peter Grün'
      //   },
      //   StatusCodeText: 'Completed',
      //   Phone: '+49 3073618909',
      //   LocationName: 'Frankfurt',
      //   StartDateTime: {
      //     TimeZoneCode: 'ZTC',
      //     content: '2017-03-24 22:00PM'
      //   },
      //   EndDateTime: {
      //     TimeZoneCode: 'ZTC',
      //     content: '2017-03-25 07:30AM'
      //   },
      //   isRead: false
      // }, {
      //   Subject: 'Workshop',
      //   Owner: {
      //     content: 'Peter Grün'
      //   },
      //   StatusCodeText: 'Completed',
      //   Phone: '+49 3073618905',
      //   LocationName: 'Heidelber',
      //   StartDateTime: {
      //     TimeZoneCode: 'ZTC',
      //     content: '2017-03-24 22:00PM'
      //   },
      //   EndDateTime: {
      //     TimeZoneCode: 'ZTC',
      //     content: '2017-03-25 07:30AM'
      //   },
      //   isRead: false
      // },
      // {
      //   Subject: 'Produktpräsentation',
      //   Owner: {
      //     content: 'Peter Grün'
      //   },
      //   StatusCodeText: 'Completed',
      //   Phone: '+49 3073618915',
      //   LocationName: 'Frankfurt',
      //   StartDateTime: {
      //     TimeZoneCode: 'ZTC',
      //     content: '2017-03-24 22:00PM'
      //   },
      //   EndDateTime: {
      //     TimeZoneCode: 'ZTC',
      //     content: '2017-03-25 07:30AM'
      //   },
      //   isRead: false
      // }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  toTop:function (e) {
    this.setData({
      isToTop: true
    })
    // console.log('top')
  },

  startPosition: function(e) {
    this.setData({
      startPos: e.changedTouches[0].clientY
    })
  },
  moveContent: function (e) {
    var thiz = this.data;
    var screenHeight = this.data.screenHeight,
     barHeight = this.data.barHeight,
     aimHeight = screenHeight * 0.1,
     leftHeight = Math.floor(barHeight - aimHeight*2),
    listLeftHeight = leftHeight ;
    let currentPos = e.changedTouches[0].clientY;
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
    
    if (currentPos - this.data.startPos < 0) {
      // console.log('up')
      if (this.data.isToTop) {
        this.setData({
          isToTop: false
        })
      }
      var textFade = wx.createAnimation({
        duration: 300,
        timingFunction: 'liner',
        delay: 0
      });
      var textShow = wx.createAnimation({
        duration: 300,
        timingFunction: 'liner',
        delay: 200
      });
      headerAnimation.translateY(-leftHeight).step();
      listAnimation.translateY(-listLeftHeight).step();
      textFade.opacity(0).step();
      textShow.opacity(1).step();
      this.setData({
        headerAnimation: headerAnimation.export(),
        listAnimation: listAnimation.export(),
        textShow: textShow.export(),
        textFade: textFade.export(),
        scrollHeight: 94,
        background: 'background-color:#509AFF;',
        isTranslated:true
      })
    }else{
      if(this.data.isTranslated && this.data.isToTop) {
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
        // console.log('down')
        headerAnimation.translateY(0).step();
        listAnimation.translateY(0).step();
        textFade.opacity(1).step();
        textShow.opacity(0).step();
        this.setData({
          headerAnimation: headerAnimation.export(),
          listAnimation: listAnimation.export(),
          textFade: textFade.export(),
          textShow: textShow.export(),
          scrollHeight: 82,
          background: 'background: linear-gradient(to bottom, #509AFF, #60bdfe);',
          isTranslated: false
        })
      }
    }
 },
 
  onReady: function () {
    var thiz = this;
    var systemInfo = wx.getSystemInfo({
      success: function(res) {
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
      today : weekDay + ',' + day + ' ' + month + ' ' + year
    })

  },

  onShow: function () {
    var openId = wx.getStorageSync('openId')
    var thiz = this;
    // try {
    //   var employeeName = wx.getStorageSync('employeeName');
    //   if (employeeName) {
    //     this.setData({
    //       employeeName:employeeName
    //     })
    //   }else {
    //     wx.showModal({
    //       title: 'Not Assign',
    //       content: 'Your WechatId has not assigned to C4C',
    //       success:(res) => {
    //         wx.navigateTo({
    //           url: '/pages/userLogin/userLogin',
    //         })
    //       }
    //     })
    //   }
    // } catch(e) {
    //   console.log(e)
    // }
    if(this.data.appointmentList.length == 0) {
        wx.showLoading({
          title: 'loading',
          mask: true
        })
        wx.request({
          url: 'http://testc4cwc.duapp.com/mini/appointment',
          data: {
            'openId': openId
          },
          success: res => {
            console.log(res)
            wx.hideLoading();
            var res = res.data.appointments,
              length = res.length;
            for (let i = 0; i < length; i++) {
              if (res[i].LocationName.length > 36) {
                res[i].LocationName = res[i].LocationName.slice(0, 36) + "..."
              }
              if (res[i].EndDateTime.content != null) {
                let date = new Date(parseInt(res[i].EndDateTime.content.match(/[\d]/g).join('')));
                res[i].EndDateTime.content = date.dateSplice(date);
              } else {
                res[i].EndDateTime.content = '';
              }
              if (res[i].StartDateTime.content != null) {
                let date = new Date(parseInt(res[i].StartDateTime.content.match(/[\d]/g).join('')));
                res[i].StartDateTime.content = date.dateSplice(date)
              } else {
                res[i].StartDateTime.content = '';
              }
            }
            thiz.setData({
              appointmentList: res,
              totalNum: length
            })
          }
        })
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
      // console.log('down')
      headerAnimation.translateY(0).step();
      listAnimation.translateY(0).step();
      textFade.opacity(1).step();
      textShow.opacity(0).step();
      this.setData({
        headerAnimation: headerAnimation.export(),
        listAnimation: listAnimation.export(),
        textFade: textFade.export(),
        textShow: textShow.export(),
        scrollHeight: 82,
        background: 'background: linear-gradient(to bottom, #509AFF, #60bdfe);',
        isTranslated: false
      })
    }

  },
})
