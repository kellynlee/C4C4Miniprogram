// pages/appointments/single-appointment.js
const app = getApp();
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
    showDetail: function (e) {
      if (this.properties.opportunityObj.isRead == undefined || this.properties.opportunityObj.isRead == false) {
        this.setData({
          isRead: true
        });
        this.properties.opportunityObj.isRead = true;
        app.globalData.readList.opportunity.push(this.properties.opportunityObj.OpportunityID);
        console.log(app.globalData.readList.opportunity)
      }
      var id = this.properties.opportunityObj.OpportunityID
      wx.navigateTo({
        url: '/pages/opportunityShowDetail/showDetail?key=' + id + '&entity=OpportunityCollection',
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
    var percentageNum = parseInt(this.data.opportunityObj.ProbabilityPercent)
    percentageNum = Math.floor(percentageNum);
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

    if (this.properties.opportunityObj.isRead != undefined && this.properties.opportunityObj.isRead === true) {
      this.setData({
        isRead: true
      })
    }
  }
  
})
