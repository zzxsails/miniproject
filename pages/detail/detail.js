// pages/detail/detail.js
const app = getApp()
const baseUrl=app.globalData.reqUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ID:'',
    selectId:1,
    collectId:'',
    degree:'',
    detail:'',
    price:'',
    time:'',
    imgsrcs:[],
    productId:'',
    userid:'',
    nickname:'',
    school:'',
    headimg:'../images/tom.jpg',
    schbadge:'',
    messageid:'',
    chat:true
  },
  goMine:function(){
    wx.switchTab({
      url: '../mine/mine',
    })
  },
  payment:function(){
    wx.navigateTo({
      url: '../payment/payment',
    })
  },
  collect:function(e){
    let selectId=this.data.selectId
    let userId=this.data.ID
    let collectId=this.data.collectId
    let productId=this.data.productId
    if(selectId===1){
      this.setData({
        selectId:0
      })
    }else{
      this.setData({
        selectId:1
      })
    }
    wx.request({
      url: baseUrl+'product/collect',
      data:{selectid:selectId,userid:userId,productid:productId,collectid:collectId},
      header:{'content-type':'application/json'},
      method:'post',
      success:function(res){
        console.log(res.data)  
      },
      fail:function(err){
        console.log(err)
      }
    })

  },
  goChat:function(){
    let pubuid=this.data.userid
    let pubnk=this.data.nickname
    let productid=this.data.productId
    let pubhead=this.data.headimg
    let userid=this.data.ID
    let usernk=wx.getStorageSync('usernk')
    let _this=this
    //创建会话
    wx.request({
      url: baseUrl+'msg/connect',
      data:{pubuid:pubuid,pubnk:pubnk,productid:productid,userid:userid,usernk:usernk,pubhead:pubhead},
      header:{'content-type':'application/json'},
      method:'post',
      success:function(res){
        console.log(res.data)
        let id=res.data.insertId
        console.log(id)
        _this.setData({
          messageid:id
        })
        //  
      },
      fail:function(err){
        console.log(err)
      },
      complete:function(){
        wx.navigateTo({
          url: '../chat/chat?id='+_this.data.messageid+'&userid='+userid+'&pubuid='+pubuid+'&proid='+productid+'&pubnk='+pubnk+'&pubhead='+pubhead+'',
        })
      }
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
    //获取缓存商品信息
    let id=wx.getStorageSync('productId')
    let ID=wx.getStorageSync('userId')
    this.setData({
      ID:ID
    })
    // console.log(ID)
    //获取缓存
    let  _this=this
    setTimeout(function(){
      let userid=wx.getStorageSync('PUid')
      let degree= wx.getStorageSync('degree')
      let detail=  wx.getStorageSync('detail')
      let price=  wx.getStorageSync('price')
      let time=  wx.getStorageSync('pubtime')
      let imgs=  wx.getStorageSync('imgsrcs')
      let createtime=time.substring(0,10)
      let imgsrcs=[]
      for(let i=0;i<imgs.length;i++){
        let img0=baseUrl+'static/uploads/'+imgs[i]
        imgsrcs.push(img0)
      }
      _this.setData({
        degree:degree,
        detail:detail,
        price:price,
        time:createtime,
        imgsrcs:imgsrcs,
        productId:id,
        userid:userid,
      })
      //设置如果用户id==商品发布用户id相等，不显示chat按钮
      if(ID==userid){
        _this.setData({
          chat:false
        })
      }
      // console.log(_this.data.imgsrcs)
      //请求数据库用户信息
      wx.request({
        url: baseUrl+'product/uid',
        data:{userid:userid},
        header:{'content-type':'application/json'},
        method:'post',
        success:function(res){
          let userinfo=res.data
          console.log(userinfo)
          let schbadge=baseUrl+'static/images/'+userinfo.schbadge
          let headimg=userinfo.headimg
          _this.setData({
            nickname:userinfo.nickname,
            school:userinfo.school,
            schbadge:schbadge,
            headimg:headimg, 
          })
         
        },
        fail:function(err){
          console.log(err)
        }
      })
      //请求商品收藏信息
      wx.request({
        url: baseUrl+'product/collection',
        data:{userid:ID,productid:id},
        header:{'content-type':'application/json'},
        method:'post',
        success:function(res){
          console.log(res.data)
          
          if(res.data!==null){  
            _this.setData({
              selectId:0,
              collectId:res.data.id
            })
            console.log(_this.data.collectId)
          }
        },
        fail:function(err){
          console.log(err)
        }
      })      
    },1000)
    
    
    
    
    
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