const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    username:"",
    sex:"",
    num:"",
    grade:"",
    class:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.openid) {
      this.setData({
        openid: app.globalData.openid
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    this.onLoad();
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

  submitform:function(e){
    const db=wx.cloud.database()
    db.collection('user').add({
      data:{
        username:e.detail.value.username,
        sex:e.detail.value.sex,
        num:e.detail.value.num,
        grade:e.detail.value.grade,
        class:e.detail.value.class
      },
      success:res=>{
        this.setData({
          userId:res._id,
          username:e.detail.value.username,
          sex:e.detail.value.sex,
          num:e.detail.value.num,
          grade:e.detail.value.grade,
          class:e.detail.value.class
        })
        wx.showToast({
          title: '信息发布成功',
          icon:'success',
          duration:2000
        })
        console.log('新增数据成功，记录_id:',res._id)
        wx.switchTab({
          url: '../my/my?_id=res._openid',
          success:function(e){
            var page=getCurrentPages().pop();
            if(page ==undefined ||page==null) return;
            page.onLoad();
          }
        })
      },
      fail:err=>{
        wx.showToast({
          title: '信息发布失败',
          icon:'none'
        })
        console.error('信息发布失败',err)
      }
    })
  },
  clearInputEvent: function (res) {
    data:{
      inputValue: null
    }
    this.setData({
      'inputValue': ''
    })
  },



})