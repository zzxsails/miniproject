// pages/message/message.js
const app = getApp()
const baseUrl=app.globalData.reqUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgsrc:'../images/tom.jpg',
    //postid就是登陆用户id
    userId:'',
    toid:'',
    msg:[
      {
        id:'',  
        userId:'',
        pubUid:'',
        productId:'',
        lastcon:'',
        lasttime:''
      }
    ],
    proid:'',
    pubnk:''
  },
  goChat:function(e){
    console.log(e.currentTarget.dataset.id)
    let messageid=e.currentTarget.dataset.id
    let data=this.data.msg
    // console.log(data[0].id)
    let userid=this.data.userId
    for(let i=0;i<data.length;i++){
      if(data[i].id===messageid){
        if(data[i].pubUser===userid){
          this.setData({
            proid:data[i].productId,
            pubnk:data[i].userNk,
            toid:data[i].userId
          })  
        }else{

          this.setData({
            proid:data[i].productId,
            pubnk:data[i].pubNk,
            toid:data[i].pubUser
          })
        }     
      }
    }
    console.log(messageid)
    console.log(this.data.pubnk)
    wx.navigateTo({
      url: '../chat/chat?id='+messageid+'&proid='+this.data.proid+'&pubnk='+this.data.pubnk+'&pubuid='+this.data.toid+'&userid='+this.data.userId+'',
    })
   
   
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
    let userid=wx.getStorageSync('userId')
    let usernk=wx.getStorageSync('usernk')
    this.setData({
      userId:userid
    })
    console.log(userid)
    console.log(usernk)
    let _this=this
    wx.request({
      url: baseUrl+'msg/getmsglist',
      data:{userid:userid},
      header:{'content-type':'application/json'},
      method:'post',
      success:function(res){
        console.log(res.data) 
        let data=res.data
        for(let i=0;i<data.length;i++){
          if(userid===data[i].pubUser){
            data[i].img=data[i].pubHead
            data[i].nk=data[i].userNk
          }else{
            let userimg=wx.getStorageSync('userimg')
            data[i].img=userimg
            data[i].nk=data[i].pubNk
          }
        }
        _this.setData({
          msg:data
        }) 
      },
      fail:function(err){
        console.log(err)
      },
      
    })
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