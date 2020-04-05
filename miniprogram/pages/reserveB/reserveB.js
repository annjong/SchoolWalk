// pages/reserveB/reserveB.js
const db=wx.cloud.database()
const basketballCollection=db.collection('basketball')
const userInfo=db.collection('userInfo')
const userCollection=db.collection('user')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    basketballCollection.doc(options._id).get({
      success:res=>{
        this.setData({
          basketball:res.data
        })
      }
    })
    userInfo.get().then(res=>{
      console.log(res.data)
      this.setData({
        userList:res.data
      })
    })
    userCollection.get().then(res=>{
      console.log(res.data)
      this.setData({
        user:res.data
      })
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

  },
  onSubmit:function(){
    wx.showToast({
      title: '预约成功',
      icon:'success',
      duration:2000
    })
    
  }
})