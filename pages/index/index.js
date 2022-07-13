// pages/index/index.js
const app = getApp()
const baseUrl=app.globalData.reqUrl
var QQMapWX = require('../../utils/qqmap-wx-jssdk'); //引入SDK核心类
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSelect:false,
    select:0,
    school:['文理','财经','城市'],
    city:'',
    userId:'',
    banner:[                                                                                                
      "http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcXJp1RP4y.FCO9gT2STj.7cDc4UQr2AxJJWN8LSmqTAzT.Qb7a.IJP5iN5YSm2wIVC8WY3pIVn1YyXGiL0Lm0so!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcXJp1RP4y.FCO9gT2STj.7fCq5AkeIKvpgGxDhpBDTW97CbYt1InQmC57QYmKLl*sszoUbSr5Zki1yj..PXtmoU!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4",
     "http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcXJp1RP4y.FCO9gT2STj.7ds4f.5eqpAPK4ssspMdlCmd5J.2sAciKk6FBTNsbqCiyZastfym4S3yoqheqLZYOE!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcXJp1RP4y.FCO9gT2STj.7cNR1fUkBa37DYtcErETUI5o2V4sCSmvLRzPiz9sSLdzF1z6IT*sKOjZPMQEZvLL6U!/b&bo=gAJAAQAAAAACR6A!&rf=viewer_4"
      
    ],
    classify:[
      {
        id:1,
        title:"热门推荐",
        imgsrc:'../../pages/images/hot.png'
      },
      {
        id:2,
        title:"手机数码",
        imgsrc:'../../pages/images/digital.png'
      },
      {
        id:3,
        title:"女装",
        imgsrc:'../../pages/images/dress.png'
      },
      {
        id:4,
        title:"图书",
        imgsrc:'../../pages/images/book.png'
      },
      {
        id:5,
        title:"全部",
        imgsrc:'../../pages/images/list1.png'
      }
    ],
    products:[
      
    ],
    keyword:'',
    curPage:2,
    pageSize:10,
    total:''
  },
  //展开下拉列表
  drow(){
    this.setData({
      isSelect:!this.data.isSelect
    })
  },
  //选择学校，向后台获取当前校区商品
  getschool(e){
    let school=e.currentTarget.dataset.index
    this.setData({
      city:school,
      isSelect:!this.data.isSelect
    })
    let _this=this
    wx.request({
      url: baseUrl+'product/school',
      data:{school:school},
      header:{
        "Content-Type": "application/json" 
      },
      method:'post',
      success:function(res){
        console.log(res.data)
        let products=res.data
        for(let i=0;i<products.length;i++){
          let img=baseUrl+'static/uploads/'+products[i].imgSrc.substring(1,(products[i].imgSrc).length-1)
          products[i].imgSrc=img
         }
         _this.setData({
           products:products,
           curPage:2
         })
      },
      fail:function(err){
        console.log(err)
      },     
    })
  },
  //获取后台数据,只获取十条数据
  getData(id){
    let _this=this
    wx.request({
      url: baseUrl+'product/all',
      data:{userid:id,
        message:'请求所有商品信息'
      },
      header:{
        "Content-Type": "application/json" 
      },
      method:'post',
      success:function(res){
        // console.log(res.data.length)
        let products=res.data
        for(let i=0;i<products.length;i++){
          let img=baseUrl+'static/uploads/'+products[i].imgSrc.substring(1,(products[i].imgSrc).length-1)
          products[i].imgSrc=img
         }
         _this.setData({
           products:products,
           curPage:2
         })
      },
      fail:function(err){
        console.log(err)
      },
      complete(res){
        setTimeout(function(){
          wx.hideLoading();
          wx.hideNavigationBarLoading();
          wx.stopPullDownRefresh()
        },1500)
            
      }        
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.removeStorageSync('products')
    qqmapsdk = new QQMapWX({
      key: '2FFBZ-TNU6F-R6QJ3-JAUYU-HFRA3-HUFMO'
    });

    //  获取用户id
    let id=wx.getStorageSync('userId')
    this.setData({
      userId:id
    })
    let _this=this
    //请求后台数据
    _this.getData(id)
  },
  // search(){
  //   wx.switchTab({
  //     url: '/pages/lose/lose',
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //获取地址信息
    this.getLocation();
    
  },
  //调用微信api获取经纬度然后传入地图API
  getLocation: function(){
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function(res) {
        console.log(res);
         var latitude = res.latitude;
          var longitude = res.longitude;
        
        //传入参数
        vm.getLocal(latitude, longitude)
      },
      fail: function(res){
        console.log('获取经纬度失败fail')
      }
    })
  },
  //获取当前地理位置
  getLocal: function (latitude, longitude){
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log(res); 
        
        const addr=res.result.ad_info.city;
        console.log(addr);
        vm.setData({
            city:addr
        }) 
      },
      fail: function (res) {
        console.log('获取API定位信息失败');
      }
    })
  },
  //获取搜索框内关键字
  keyInput:function (e) {
    this.setData({
      keyword:e.detail.value
    })
  },
  //点击搜索按钮获取关键字进行搜索
  search:function () {
    let keyword=this.data.keyword
    let _this=this
    wx.request({
      url: baseUrl+'product/key',
      data:{keyword:keyword},
      header:{
        "Content-Type": "application/json" 
      },
      method:'post',
      success:function(res){
        console.log(res.data)
        let products=res.data
        for(let i=0;i<products.length;i++){
          let img=baseUrl+'static/uploads/'+products[i].imgSrc.substring(1,(products[i].imgSrc).length-1)
          products[i].imgSrc=img
         }
         _this.setData({
           products:products,
           curPage:2
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
  //1.刷新
  onRefresh(){
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: '刷新中...',
    })
    let id=this.data.userId
    this.getData(id)
  },
  
  onPullDownRefresh: function () {
    this.onRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let curPage=this.data.curPage
    let pageSize=this.data.pageSize
    let _this=this
    wx.request({
      url: baseUrl+'product/uploading',
      data:{
        curPage:curPage,
        pageSize:pageSize
      },
      header:{
        "Content-Type": "application/json" 
      },
      method:'post',
      success:function(res){
        if(res.data==='没有数据了！'){
          wx.showToast({
            title: '没有数据啦！',
          })
        }else{
          let curpage1=parseInt(curPage+1)
          console.log(curpage1)
          let products=res.data
          for(let i=0;i<products.length;i++){
            let img=baseUrl+'static/uploads/'+products[i].imgSrc.substring(1,(products[i].imgSrc).length-1)
            products[i].imgSrc=img
          }
          _this.setData({
            products:products,
            curPage:curpage1
          })
        }
        
      }  
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})