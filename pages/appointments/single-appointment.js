// pages/appointments/single-appointment.js
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
        })
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
          //  padding: '0rpx 0rpx 0rpx 60rpx;'
        })
      }else {
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
    showDetail:function (e) {
      var index = this.properties.index
      var thiz = this;
      
      wx.navigateTo({
        url: '/pages/showDetail/showDetail',
      })
    }
  }
})
