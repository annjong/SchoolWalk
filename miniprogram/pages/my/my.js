// pages/my/my.js
const db=wx.cloud.database()
const userInfo=db.collection('userInfo')
const userCollection=db.collection('user')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  getUserInfo:function(result){
    wx.cloud.callFunction({
      name:'getOpenId',
      complete:res=>{
        var countNum= userInfo.where({
          _openid:res.result.openId
        }).count().then(res=>{
          if(res.total ==0){
            userInfo.add({
              data:result.detail.userInfo,
            }).then(res=>{
              wx.navigateTo({
                url: '../info/info',
              })
            }).catch(err=>{
              console.error(err)
            })
          }else{
            wx.navigateTo({
              url: '../my/my',
            })
          }
        });
       }
    })

    
   }
})