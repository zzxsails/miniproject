// pages/chat/chat.js
const util=require('../../utils/util.js')
const app = getApp()
const baseUrl=app.globalData.reqUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid:'',
    nk:'小小乌龙茶',
    usernk:'',
    pubhead:'',
    imgsrca:'../images/tom.jpg',
    imgsrcb:'',
    messageid:'',
    postid:'',
    toid:'',
    productid:'',
    msg:'你好，在吗？',
    products:{},
    msgList:[
      // {
      //   id:'',
      //   code:'',
      //   nk:'',
      //   usernk:'',
      //   time:'',
      //   content:''
      // }
    ],
    inputValue:'',
  },
  getValue:function(e){
    this.setData({
      inputValue:e.detail.value
    })
    console.log(e.detail.value)
    console.log(this.data.inputValue)
  },
  sendmsg:function(){
    let chatmsg={
      messageid:this.data.messageid,
      postid:this.data.postid,
      toid:this.data.toid,
      content:this.data.inputValue
    }
    this.setData({
      inputValue:''
    })
    console.log(chatmsg)
    //存储发送消息，并返回消息列表
    let _this=this
    wx.request({
      url: baseUrl+'msg/sendchat',
      data:chatmsg,
      header:{'content-type':'application/json'},
      method:'post',
      success:function(res){
        let userid=_this.data.userid
        console.log(userid)
        console.log(_this.data.nk)
        console.log(res.data) 
        let data=res.data
        for(let i=0;i<data.length;i++){
          if(data[i].postId==userid){
            data[i].code=0
          }else{
            data[i].code=1
          }
        }
        _this.setData({
          msgList:data
        })
        console.log(_this.data.msgList)
      },
      fail:function(err){
        console.log(err)
      },
      
    })
    // // websocket发送消息,(暂不需要)
    // wx.sendSocketMessage({
    //   data:JSON.stringify(chatmsg)
    // })
    // let _this=this
    // setTimeout(function(){
    //   let chatmsg=JSON.parse(_this.data.dataa)
    //   _this.setData({
    //     msgList:chatmsg
    //   })
    // },1500)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      messageid:options.id,
      postid:options.userid,
      toid:options.pubuid,
      productid:options.proid,
      nk:options.pubnk,
      pubhead:options.pubhead
    })
    //修改chat页面navigationbar标题
    wx.setNavigationBarTitle({
      title: this.data.nk,
    })
    //连接socket(最后不需要使用这个功能)
    // wx.connectSocket({
    //   url:"ws://localhost:3000/ws",
    //   header:{
    //     'content-type': 'application/json'
    //   },
    // })
    // wx.onSocketOpen((result) => {
    //   console.log('已连接') 
    // })
    // let _this=this
    // wx.onSocketMessage(function (res) {
    //   console.log('收到服务器内容：' + res.data)
    //   _this.setData({
    //     dataa:res.data
    //   })
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let proid=this.data.productid
    let _this=this
    wx.request({
      url: baseUrl+'product/procard',
      data:{proid:proid},
      header:{'content-type':'application/json'},
      method:'post',
      success:function(res){
        let products=res.data
        let img=baseUrl+'static/uploads/'+products.imgSrc.substring(1,(products.imgSrc).length-1)
        products.imgSrc=img        
        _this.setData({
          products:products
        })
        // console.log(_this.data.products)
      },
      fail:function(err){
        console.log(err)
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let usernk=wx.getStorageSync('usernk')
    let userid=wx.getStorageSync('userId')
    let selfimg=wx.getStorageSync('userimg')
    this.setData({
      usernk:usernk,
      userid:userid,
      imgsrcb:selfimg
    })
    // console.log(this.data.imgsrcb)
    let messageid=this.data.messageid
    let _this=this
    wx.request({
      url: baseUrl+'msg/getchat',
      data:{messageid},
      header:{'content-type':'application/json'},
      method:'post',
      success:function(res){
        console.log(res.data)
        let userid=_this.data.userid
        console.log(userid)
        console.log(_this.data.nk)
        console.log(res.data) 
        let data=res.data
        for(let i=0;i<data.length;i++){
          if(data[i].postId==userid){
            data[i].code=0
          }else{
            data[i].code=1
          }
        }
        _this.setData({
          msgList:data
        })
        console.log(_this.data.msgList)
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