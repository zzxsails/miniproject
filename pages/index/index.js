// pages/index/index.js
const app = getApp()
var QQMapWX = require('../../utils/qqmap-wx-jssdk'); //引入SDK核心类
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
    banner:[                                                                                                
      "http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcXJp1RP4y.FCO9gT2STj.7cDc4UQr2AxJJWN8LSmqTAzT.Qb7a.IJP5iN5YSm2wIVC8WY3pIVn1YyXGiL0Lm0so!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcXJp1RP4y.FCO9gT2STj.7fCq5AkeIKvpgGxDhpBDTW97CbYt1InQmC57QYmKLl*sszoUbSr5Zki1yj..PXtmoU!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4",
     "http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcXJp1RP4y.FCO9gT2STj.7ds4f.5eqpAPK4ssspMdlCmd5J.2sAciKk6FBTNsbqCiyZastfym4S3yoqheqLZYOE!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcXJp1RP4y.FCO9gT2STj.7cNR1fUkBa37DYtcErETUI5o2V4sCSmvLRzPiz9sSLdzF1z6IT*sKOjZPMQEZvLL6U!/b&bo=gAJAAQAAAAACR6A!&rf=viewer_4"
      
    ],
    products:[
      {
        id:0,
        title:'南充旅游区景点门票三折转售',
        imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
        school:'重庆文理学院',
        price:'38'
      },
      {
        id:1,
        title:'南充旅游区景点门票三折转售',
        imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
        school:'重庆文理学院',
        price:'38'
      },
      {
        id:2,
        title:'南充旅游区景点门票三折转售',
        imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
        school:'重庆文理学院',
        price:'38'
      },
      {
        id:3,
        title:'南充旅游区景点门票三折转售',
        imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
        school:'重庆文理学院',
        price:'38'
      },
      {
        id:4,
        title:'南充旅游区景点门票三折转售',
        imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
        school:'重庆文理学院',
        price:'38'
      },
      {
        id:5,
        title:'南充旅游区景点门票三折转售',
        imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
        school:'重庆文理学院',
        price:'38'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: '2FFBZ-TNU6F-R6QJ3-JAUYU-HFRA3-HUFMO'
  });
  },


  search(){
    wx.switchTab({
      url: '/pages/lose/lose',
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