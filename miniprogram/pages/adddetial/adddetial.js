// pages/adddetial/adddetial.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    title:"",
    dese:"",
    show:"",
    num:"",
    price:"",
    local:"",
    others:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  submitform:function(e){
    const db=wx.cloud.database()
    db.collection('study').add({
      data:{
        title:e.detail.value.title,
        dese:e.detail.value.dese,
        show:e.detail.value.show,
        num:e.detail.value.num,
        price:e.detail.value.price,
        local:e.detail.value.local,
        others:e.detail.value.others
      },
      success:res=>{
        this.setData({
          studyId:res._id,
          title:e.detail.value.title,
          dese:e.detail.value.dese,
          show:e.detail.value.show,
          num:e.detail.value.num,
          price:e.detail.value.price,
          local:e.detail.value.local,
          others:e.detail.value.others
        })
        wx.showToast({
          title: '信息发布成功',
          icon:'success',
          duration:2000
        })
        console.log('新增数据成功，记录_id:',res._id)
        wx.redirectTo({
          url: '../study/study',
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