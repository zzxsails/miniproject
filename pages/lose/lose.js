var QQMapWX = require('../../utils/qqmap-wx-jssdk'); //引入SDK核心类
var qqmapsdk;
Page({
  data:{
    
  },
  onLoad: function () {
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
          key: '2FFBZ-TNU6F-R6QJ3-JAUYU-HFRA3-HUFMO'
      });
      
  },
   onShow: function (options){
    this.getLocation(); 
    const windowInfo = wx.getWindowInfo()

console.log(windowInfo.pixelRatio)
console.log(windowInfo.screenWidth)
console.log(windowInfo.screenHeight)
console.log(windowInfo.windowWidth)
console.log(windowInfo.windowHeight)
console.log(windowInfo.statusBarHeight)
console.log(windowInfo.safeArea)
console.log(windowInfo.screenTop)
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
    }
  })