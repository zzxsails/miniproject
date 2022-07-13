// pages/mine/mine.js
const app= getApp();
const baseUrl=app.globalData.reqUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIndex:0,
    userId:'',
    userInfo:{},
    touimg:'',
    headimg:'../images/tom.jpg',
    bgSrc:baseUrl+'static/images/minebg.png',
    products:[
      
    ],
  },
  changeIndex:function(e){
    this.setData({
      navIndex:e.currentTarget.dataset.index
    })
  },
  //点击跳转资料修改界面
  gomody:function(){
    let username=this.data.userInfo.username
    let nk=this.data.userInfo.nickname
    let psd=this.data.userInfo.password
    let tel=this.data.userInfo.telphone
    console.log(username)
    wx.navigateTo({
      url: '../selfmody/selfmody?username='+username+'&psd='+psd+'&tel='+tel+'&nk='+nk+'',
    })
  },
  //修改头像，因时间原因暂时不会更新头像到数据库中，只展示可更改功能
  modytou(){
    let _this=this
    wx.chooseImage({
      count: 1,
      sizeType: ['original','compressed'],
      sourceType: ['album'],
      success: (res)=>{
        console.log(res.tempFilePaths)
        let src=res.tempFilePaths[0]
        // this.setData({
        //   srcArr:srcs
        // })
        wx.uploadFile({
          filePath: src,
          name: 'touimg',
          url: baseUrl+'api/modytou',
          success:function(res){
            console.log(res.data)
            let touimg=baseUrl+'static/tou/'+res.data
            _this.setData({
              touimg:touimg
            })
          },
          fail(err){
            console.log(err)
          },
          complete(res){
            let id=_this.data.userId
            let touimg=_this.data.touimg
            wx.request({
              url:baseUrl+'api/touimg' ,
              data:{id:id,touimg:touimg},
              header:{"Content-Type": "application/json" },
              method:'post',
              success:function(res){
                console.log(res.data)  
              }
            });
              // console.log(_this.data.touimg)
          }
        })
      },
      fail(err){
        console.log(err)
      },
    })
  },
  //发布点击事件
  getpubish:function(){
    let id=this.data.userId
    let _this=this
    wx.request({
      url:baseUrl+'product/userpub' ,
      data:{id},
      header:{"Content-Type": "application/json" },
      method:'post',
      success:function(res){
        console.log(res.data)
        let products=res.data
        for(let i=0;i<products.length;i++){
          let img=baseUrl+'static/uploads/'+products[i].imgSrc.substring(1,(products[i].imgSrc).length-1)
          products[i].imgSrc=img
        }
        _this.setData({
          products:products
        })
        console.log(_this.data.products)  
      }
    })
  },
  //收藏点击事件
  getcollect:function(){
    let id=this.data.userId
    let _this=this
    wx.request({
      url:baseUrl+'product/getcollect' ,
      data:{id},
      header:{"Content-Type": "application/json" },
      method:'post',
      success:function(res){
        // console.log(res.data)
        let products=res.data
        for(let i=0;i<products.length;i++){
          let img=baseUrl+'static/uploads/'+products[i].imgSrc.substring(1,(products[i].imgSrc).length-1)
          products[i].imgSrc=img
          products[i].id=products[i].productId
        }
        _this.setData({
          products:products
        })
        // console.log(_this.data.products)  
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
    let id=wx.getStorageSync('userId')
    this.setData({
      userId:id
    })
    let _this=this
    wx.request({
      url:baseUrl+'api/userinfo' ,
      data:{id},
      header:{"Content-Type": "application/json" },
      method:'post',
      success:function(res){
        console.log(res.data)
        let userinfo=res.data[0]
        let usernk=userinfo.nickname
        
        wx.setStorageSync('usernk',usernk)
        _this.setDataUserinfo(userinfo)  
      }
    });
    wx.request({
      url:baseUrl+'product/userpub' ,
      data:{id},
      header:{"Content-Type": "application/json" },
      method:'post',
      success:function(res){
        console.log(res.data)
        let products=res.data
        for(let i=0;i<products.length;i++){
          let img=baseUrl+'static/uploads/'+products[i].imgSrc.substring(1,(products[i].imgSrc).length-1)
          products[i].imgSrc=img
        }
        _this.setData({
          products:products
        })
        console.log(_this.data.products)  
      }
    })
  },
  //根据获取到个人信息修改data
  setDataUserinfo:function(data){
    let schimg=baseUrl+'static/images/'+data.schbadge
    data.schbadge=schimg
    this.setData({
      userInfo:data,
      headimg:data.headimg
    })
    // console.log(data)
    let school=this.data.userInfo.school
    let headimg=this.data.headimg
    console.log()
    wx.setStorageSync('school',school)
    wx.setStorageSync('userimg',headimg)
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