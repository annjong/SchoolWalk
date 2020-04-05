Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        link:'../study/study',
        url:'../../image/index/study.png',
      },
      {
        link:'../basketball/basketball',
        url:'../../image/index/basketball.png',
      },
      {
        link:'../townsman/townsman',
        url:'../../image/index/townsman.png',
      },   
    ],
    current: 0,
    animationData: {},
    animationData2: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.stretch(350)
  },
  onShow:function(options){
    this.setData({
      current: 1,
    })
  },
  change(e) {
    this.setData({
      current: e.detail.current
    })
    this.stretch(500)

    this.shrink(450)
  },
  // 收缩
  stretch(h) {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.height(h).step()
    this.setData({
      animationData: animation.export(),
    })
  },
  // 展开
  shrink(h) {
    var animation2 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation2 = animation2
    animation2.height(h).step()
    this.setData({
      animationData2: animation2.export()
    })
  },
  

})