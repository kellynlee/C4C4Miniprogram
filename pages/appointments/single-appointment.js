// pages/appointments/single-appointment.js
const app = getApp();
var readlist = app.globalData.readList.appoitment;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    appointmentObj: {
      type:Object,
      value:{}
    },
    index: {
      type: Number,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isClick:false,
    isRead:false,
    rotateArrow:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dragDown:function () {
      if(this.properties.appointmentObj.isRead == undefined) {
        this.setData({
          isRead:true
        });
        this.properties.appointmentObj.isRead = true;
        app.globalData.readList.appointment.push(this.properties.appointmentObj.ID);
        console.log(app.globalData.readList.appointment)
      }

      if(this.data.isClick) {
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
        })
      }else {
        this.setData({
          isClick: true
        })
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
    showDetail:function (e) {
      // console.log(this.properties.appointmentObj)
      if (this.properties.appointmentObj.isRead == undefined) {
        this.setData({
          isRead: true
        });
        this.properties.appointmentObj.isRead = true;        
        app.globalData.readList.appointment.push(this.properties.appointmentObj.ID);
        console.log(app.globalData.readList.appointment)
      }
      var id = this.properties.appointmentObj.ObjectID
      
      wx.navigateTo({
        url: '/pages/showDetail/showDetail?key=' + id + '&entity=AppointmentCollection'
      })
    }
  },
  ready:function () {
    if (this.properties.appointmentObj.isRead != undefined && this.properties.appointmentObj.isRead === true) {
      this.setData({
        isRead:true
      })
    }
  }
})
