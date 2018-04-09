// pages/appointments/single-appointment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    opportunityObj: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isClick: false,
    isRead: false,
    rotateArrow: {},
    percentageImage:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dragDown: function () {
      if (this.properties.opportunityObj.isRead == undefined) {
        this.setData({
          isRead: true
        })
      }
      if (this.data.isClick) {
        this.setData({
          isClick: false
        })
        // var animation = wx.createAnimation({
        //   duration: 400,
        //   timingFunction:'ease'
        // })

        // animation.translateY(100).step();

        // this.setData({
        //   rotateArrow: animation.export()
        // })
        var animation = wx.createAnimation({
          duration: 400,
          timingFunction: 'ease',
          transformOrigin: '50% 50% 0'
        });

        animation.rotate(0).step();

        this.setData({
          rotateArrow: animation.export(),
          //  padding: '0rpx 0rpx 0rpx 60rpx;'
        })
      } else {
        this.setData({
          isClick: true
        })
        // this.setData({
        //   padding: '20rpx 40rpx 20rpx 60rpx;'
        // })
        var animation = wx.createAnimation({
          duration: 400,
          timingFunction: 'ease',
          transformOrigin: '50% 50% 0'
        });

        animation.rotate(180).step();

        this.setData({
          rotateArrow: animation.export()
        })
      }
    },
    showDetail: function (e) {
      var id = this.properties.opportunityObj.ID

      wx.navigateTo({
        url: '/pages/showDetail/showDetail?id=' + id,
      })
    },
    
  },
  ready: function() {
    // const ctx = wx.createCanvasContext('circleBg', this);
    // const ctxP = wx.createCanvasContext('percentage', this);
    // const percentageNum = Math.floor(this.data.opportunityObj.ProbabilityPercentage);
    // var percentage = percentageNum * Math.PI * 0.02;
    // ctx.setLineWidth(4);
    // ctx.setStrokeStyle('#cccccc')
    // // ctx.lineWidth = 10;
    // ctx.beginPath();
    // ctx.arc(20, 20, 16, 0, Math.PI * 2, false);
    // // ctx.closePath();
    // ctx.stroke();
    // ctx.draw();

    // ctxP.save();
    // ctxP.setLineWidth(4);
    // ctxP.setStrokeStyle("#FFA726");
    // ctxP.beginPath();
    // ctxP.arc(20, 20, 16, -90 * Math.PI / 180, percentage-90 * Math.PI / 180, false);
    // ctxP.stroke();
    
    // ctxP.restore();
    // ctxP.setFillStyle("#FFA726");
    // ctxP.setFontSize(10);
    // if(percentageNum == 0) {
    //   ctxP.fillText(percentageNum + '%', 15, 25);
    // }else if (percentageNum == 100) {
    //   ctxP.fillText(percentageNum + '%', 6, 25);
    // }else {
    //   ctxP.fillText(percentageNum + '%', 10, 25);

    // }
    

    // ctxP.draw()
    const percentageNum = Math.floor(this.data.opportunityObj.ProbabilityPercentage);
    console.log(percentageNum);
    switch (percentageNum) {
      case 0:
      this.setData({
        percentageImage:'../../icons/0.png'
        });
      break;
      case 10:
        this.setData({
          percentageImage: '../../icons/10.png'
        });
        break;
      case 20:
        this.setData({
          percentageImage: '../../icons/20.png'
        });
        break;
      case 30:
        this.setData({
          percentageImage: '../../icons/30.png'
        });
        break;
      case 40:
        this.setData({
          percentageImage: '../../icons/40.png'
        });
        break;
      case 50:
        this.setData({
          percentageImage: '../../icons/50.png'
        });
        break;
      case 60:
        this.setData({
          percentageImage: '../../icons/60.png'
        });
        break;
      case 70:
        this.setData({
          percentageImage: '../../icons/70.png'
        });
        break;
      case 80:
        this.setData({
          percentageImage: '../../icons/80.png'
        });
        break;
      case 90:
        this.setData({
          percentageImage: '../../icons/90.png'
        });
        case 100:
        this.setData({
          percentageImage: '../../icons/100.png'
        });
      
    }

  }
  
})
