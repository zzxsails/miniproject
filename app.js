// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // var name=wx.getStorageSync('username')
    // this.globalData.isLogin=name
    // console.log(this.globalData.isLogin)
  },
  globalData: {
    isLogin:'false',
    username:'',
    reqUrl:'http://localhost:3000/'
  }
})
