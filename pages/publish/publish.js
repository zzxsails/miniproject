// pages/publish/publish.js
var util=require('../../utils/util')
const app=getApp()
const baseUrl=app.globalData.reqUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:'',
    school:'',
    //传递到后台的图片
    srcArr:[],
    //后台返回图片名
    imgsrcs:[],
    className:'',
    detailTxt:'',
    degree:'',
    price:''
  },
  //获取详情文字
  getDetail:function(e){
    this.setData({
      detailTxt:e.detail.value
    })
    // console.log(e.detail.value)
  },
  //获取成色
  getDegree:function(e){
    this.setData({
      degree:e.detail.value
    })
    // console.log(e.detail.value)
  },
  //获取学校名
  getSchool:function(){
    var school=wx.getStorageSync('school')
    this.setData({
      school:school
    })
  },
  //获取价格
  getPrice:function(e){
    this.setData({
      price:e.detail.value
    })
    // console.log(e.detail.value)
  },
  //点击上传图片事件,只能一次选择多个图片，一次选择一个图片
  gotoShow:function(){
    var _this=this
    wx.chooseImage({
      count: 5,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success: (res)=>{
        var srcs=res.tempFilePaths
        this.setData({
          srcArr:srcs
        })
        // var tempFilePaths=new Array(srcs.length)
        for (let i=0;i<srcs.length;i++){
          //上传图片到服务器
          wx.uploadFile({
            filePath: srcs[i],
            name: 'photos',
            header:{"content-type":"multipart/form-data"},
            url: baseUrl+'product/imgsupload',
            FormData:{},
            success:function(res){
              console.log(res)
            },
            fail:function(res){
              console.log(res)
            }
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{
        // console.log(this.data.srcArr);
        var data=this.data.srcArr;
        var imgsrcs=[]
        for(let i=0;i<data.length;i++){
          let length=data[i].length
          let imgsrc=data[i].substring(11,length)
          imgsrcs.push(imgsrc)
        }
        this.setData({
          imgsrcs:imgsrcs
        })
        // console.log(this.data.imgsrcs)
      }
    });
  },
  //点击发布向服务器发送商品信息
  addProduct:function(){
    let userId=this.data.userId
    let school=this.data.school
    let detailTxt=this.data.detailTxt
    let imgsrcs=this.data.imgsrcs
    let className=this.data.className
    let degree=this.data.degree
    let price=this.data.price
    let productinfo={
      'userId':userId,'school':school, 'text':detailTxt,'imgsrcs':imgsrcs,
      'classname':className,'degree':degree,'price':price
    }
    wx.request({
      url: baseUrl+'product/add',
      data:productinfo,
      header:{'content-type':'application/json'},
      method:'post',
      success:function(res){
        console.log(res)
      },
      fail:function(err){
        console.log(err)
      },
      complete(res){
        wx.switchTab({
          url: '../index/index',
        })
      }

    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //   var className=wx.getStorageSync('className')
  //     this.setData({
  //       className:className
  //     })
  //     console.log(this.data.className)
  // },
   
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
    //通过wx缓存获取class页面传来的商品分类名
    var className=wx.getStorageSync('className')
    var userId = wx.getStorageSync('userId')
      this.setData({
        className:className,
        userId:userId,
      })
      // console.log(this.data.school)
    
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