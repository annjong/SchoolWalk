//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'xly-l8f6v',//修改为自己的环境ID
        traceUser: true,
      })
    }


  },
  globalData: {
    userInfo: null,
    juheKey:"d9c4efd2a35c4d12bdbe19249d496b04",
  },
})
