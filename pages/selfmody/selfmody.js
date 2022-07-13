// pages/selfmody/selfmody.js
const app= getApp();
const baseUrl=app.globalData.reqUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    nk:'',
    psd:'',
    tel:'',
    modyinfo:{}
  },
  submit(e) {
    let modyinfo=e.detail.value
    console.log(modyinfo)
    wx.request({
      url:baseUrl+'api/modify',
      data:modyinfo,
      header:{
        "Content-Type": "application/json" 
      },
      method:'post',
      success:function(res){
        console.log(res.data)  
        wx.switchTab({
          url: '../mine/mine',
        })
      },
      fail(err){
        console.log(err)
      }
    })
  },
  verify(e){
    console.log(e.detail.value)
    let tel=e.detail.value
    if(!/^1[3456789]\d{9}$/.test(tel)){
      wx.showToast({
        title: '手机号码有误！',
        icon:'error'
      })  
     }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let username=options.username
    let nk=options.nk
    let tel=options.tel
    let psd=options.psd
    this.setData({
      username:username,
      psd:psd,
      nk:nk,
      tel:tel
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

  }
})