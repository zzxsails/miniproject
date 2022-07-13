var QQMapWX = require('../../utils/qqmap-wx-jssdk'); //引入SDK核心类
var qqmapsdk;
const app=getApp()
const baseUrl=app.globalData.reqUrl
Page({
  data:{
    // 获取搜索框内容
    inputVal:'',
    // 为右侧内容设置变量名称
    list0_title:"热门推荐",
    // 设置左侧active样式时用到
    label_index:0,
    // 为右侧内容设置初值
    rightmenu:[{name:"手机",img:baseUrl+'static/images/icon/shouji.png'},
    {name:"ipad",img:baseUrl+'static/images/icon/pingbandiannao.png'},
    {name:"电动车",img:baseUrl+'static/images/icon/a-01_diandongche.png'},
    {name:"滑板",img:baseUrl+'static/images/icon/huaban.png'},
    {name:"连衣裙",img:baseUrl+'static/images/icon/lianyiqun.png'},
    {name:"二手水卡",img:baseUrl+'static/images/icon/card.png'},
    {name:"外卖优惠券",img:baseUrl+'static/images/icon/waimaisongquan.png'},
    {name:"手环",img:baseUrl+'static/images/icon/shouhuan.png'},
    {name:"健身卡",img:baseUrl+'static/images/icon/jianshen.png'},
    {name:"口红",img:baseUrl+'static/images/icon/meizhuangleimu.png'},
],
    // 左侧list数据
    list0:[
      {
        id:0,
        title:'热门推荐',
        children:[
          {name:"手机",img:baseUrl+'static/images/icon/shouji.png'},
          {name:"ipad",img:baseUrl+'static/images/icon/pingbandiannao.png'},
          {name:"电动车",img:baseUrl+'static/images/icon/a-01_diandongche.png'},
          {name:"滑板",img:baseUrl+'static/images/icon/huaban.png'},
          {name:"连衣裙",img:baseUrl+'static/images/icon/lianyiqun.png'},
          {name:"二手水卡",img:baseUrl+'static/images/icon/card.png'},
          {name:"外卖优惠券",img:baseUrl+'static/images/icon/waimaisongquan.png'},
          {name:"手环",img:baseUrl+'static/images/icon/shouhuan.png'},
          {name:"健身卡",img:baseUrl+'static/images/icon/jianshen.png'},
          {name:"口红",img:baseUrl+'static/images/icon/meizhuangleimu.png'},
      ],
      },
      {
        id:1,
        title:'手机数码',
        children:[
          {name:"手机",img:baseUrl+'static/images/icon/shouji.png'},
          {name:"电脑",img:baseUrl+'static/images/icon/diannao.png'},
          {name:"ipad",img:baseUrl+'static/images/icon/pingbandiannao.png'},
          {name:"手环",img:baseUrl+'static/images/icon/shouhuan.png'},
          {name:"照相机",img:baseUrl+'static/images/icon/camera2.png'},
          {name:"音响",img:baseUrl+'static/images/icon/yinxiang.png'},
          {name:"蓝牙耳机",img:baseUrl+'static/images/icon/lanyaerji.png'},
          {name:"英语听力耳机",img:baseUrl+'static/images/icon/erji1.png'},
      ],
      },
      {
        id:2,
        title:'图书',
        children:[
          {name:"大学教材",img:baseUrl+'static/images/icon/book.png'},
          {name:"四六级英语",img:baseUrl+'static/images/icon/shuben.png'},
          {name:"教资",img:baseUrl+'static/images/icon/shuben1.png'},
          {name:"考公",img:baseUrl+'static/images/icon/shuben3.png'},
          {name:"考研",img:baseUrl+'static/images/icon/tushu.png'},
          {name:"小说",img:baseUrl+'static/images/icon/icon-test1.png'},
          {name:"漫画绘本",img:baseUrl+'static/images/icon/icon-test.png'},
      ],
      },
      {id:3,title:'美妆',
      children:[
        {name:"口红",img:baseUrl+'static/images/icon/meizhuangleimu.png'},
        {name:"粉底",img:baseUrl+'static/images/icon/fendi.png'},
        {name:"隔离霜",img:baseUrl+'static/images/icon/gelishuang.png'},
        {name:"眼影盘",img:baseUrl+'static/images/icon/meizhuang--yanyingpan.png'},
         {name:"眉笔",img:baseUrl+'static/images/icon/meibi.png'},
        {name:"睫毛膏",img:baseUrl+'static/images/icon/jiemaogao.png'},
        {name:"化妆刷",img:baseUrl+'static/images/icon/huazhuangshua.png'},
        {name:"指甲彩妆",img:baseUrl+'static/images/icon/zhijiayou.png'},
        {name:"香水",img:baseUrl+'static/images/icon/xiangshui.png'},
    ],
    },
      {id:4,title:'护肤',
      children:[
        {name:"卸妆",img:baseUrl+'static/images/icon/xiezhuang.png'},
        {name:"防晒",img:baseUrl+'static/images/icon/fangshaishuang.png'},
        {name:"水乳",img:baseUrl+'static/images/icon/shuiru.png'},
        {name:"面霜",img:baseUrl+'static/images/icon/mianshuang.png'},
        {name:"护手霜",img:baseUrl+'static/images/icon/hushoushuang.png'},
        {name:"面膜",img:baseUrl+'static/images/icon/mianmo.png'},
        {name:"眼霜",img:baseUrl+'static/images/icon/yanshuang.png'},
    ],},
      {id:5,title:'运动户外',
      children:[
        {name:"瑜伽垫",img:baseUrl+'static/images/icon/yuqiedian.png'},
        {name:"跳绳",img:baseUrl+'static/images/icon/tiaosheng.png'},
        {name:"球",img:baseUrl+'static/images/icon/zuqiu.png'},
        {name:"滑板",img:baseUrl+'static/images/icon/huaban.png'},
        {name:"滑冰",img:baseUrl+'static/images/icon/huabing.png'},
        {name:"呼啦圈",img:baseUrl+'static/images/icon/hulaquan.png'},
        {name:"弹力带",img:baseUrl+'static/images/icon/shengzi.png'},
        {name:"哑铃",img:baseUrl+'static/images/icon/yaling.png'},
    ],},
      {id:6,title:'女装',
      children:[
        {name:"外套",img:baseUrl+'static/images/icon/waitao.png'},
        {name:"T恤",img:baseUrl+'static/images/icon/Txu.png'},
        {name:"衬衫",img:baseUrl+'static/images/icon/chenshan.png'},

        {name:"长裤",img:baseUrl+'static/images/icon/changku.png'},
        {name:"短裤",img:baseUrl+'static/images/icon/duanku.png'},
        {name:"打底裤",img:baseUrl+'static/images/icon/dadiku.png'},
        {name:"半身裙",img:baseUrl+'static/images/icon/banshenqun.png'},
        {name:"连衣裙",img:baseUrl+'static/images/icon/lianyiqun.png'},
        {name:"女士正装",img:baseUrl+'static/images/icon/nvshixizhuang.png'},
    ],},
      {id:7,title:'女鞋',
      children:[
        {name:"凉鞋",img:baseUrl+'static/images/icon/nvshiliangxie.png'},
        {name:"小白鞋",img:baseUrl+'static/images/icon/xiaobaixie.png'},
        {name:"女士运动鞋",img:baseUrl+'static/images/icon/yundongxie.png'},
        {name:"高跟鞋",img:baseUrl+'static/images/icon/gaogenxie.png'},
        {name:"靴子",img:baseUrl+'static/images/icon/xuezi.png'},
        
    ],},
      {id:8,title:'男装',
      children:[
        {name:"男士外套",img:baseUrl+'static/images/icon/xizhuang-.png'},
        {name:"短袖",img:baseUrl+'static/images/icon/Txu1.png'},
        {name:"毛衣",img:baseUrl+'static/images/icon/changku1.png'},
        {name:"卫衣",img:baseUrl+'static/images/icon/weiyi.png'},
        {name:"牛仔裤",img:baseUrl+'static/images/icon/changku1.png'},
    ],},
      {id:9,title:'男鞋',
      children:[
        {name:"运动鞋",img:baseUrl+'static/images/icon/a-yundongxiexiezi.png'},
        {name:"板鞋",img:baseUrl+'static/images/icon/huabanxie.png'},
        {name:"球鞋",img:baseUrl+'static/images/icon/lanqiuxie-.png'},
    ],},
      {id:10,title:'家具收纳',
      children:[
        {name:"床上书桌",img:baseUrl+'static/images/icon/shuzhuo.png'},
        {name:"衣柜",img:baseUrl+'static/images/icon/yigui.png'},
        {name:"桌面收纳",img:baseUrl+'static/images/icon/shuzhuo.png'},
        {name:"衣物收纳",img:baseUrl+'static/images/icon/shounaxiang.png'},
        {name:"移动书桌",img:baseUrl+'static/images/icon/shuzhuo1.png'},
       
    ],},
      {id:11,title:'小家电',
      children:[
        {name:"小冰箱",img:baseUrl+'static/images/icon/bingxiang.png'},
        {name:"饮水机",img:baseUrl+'static/images/icon/yinshuiji.png'},
        {name:"洗衣机",img:baseUrl+'static/images/icon/xiyiji.png'},
        {name:"挂烫机",img:baseUrl+'static/images/icon/guatangji.png'},
        
    ],},
      {id:12,title:'服饰配件',
      children:[
        {name:"墨镜",img:baseUrl+'static/images/icon/mojing-.png'},
        {name:"鸭舌帽",img:baseUrl+'static/images/icon/maozi.png'},
        {name:"渔夫帽",img:baseUrl+'static/images/icon/maozi1.png'},
        {name:"围巾",img:baseUrl+'static/images/icon/weijin.png'},
        {name:"手套",img:baseUrl+'static/images/icon/huabankaobei.png'},
        {name:"背包",img:baseUrl+'static/images/icon/nvbao.png'},
        {name:"手表",img:baseUrl+'static/images/icon/shoubiao.png'},
    ],},
      {id:13,title:'游戏手办',
      children:[
        {name:"游戏账号",img:baseUrl+'static/images/icon/youxi.jpeg'},
        {name:"皮肤",img:baseUrl+'static/images/icon/pifu.webp'},
        {name:"游戏代练",img:baseUrl+'static/images/icon/dailian.jfif'},
        {name:"动漫手办",img:baseUrl+'static/images/icon/shouban.jfif'},
    ],},
      {id:14,title:'卡券交易',
      children:[
        {name:"视频会员",img:baseUrl+'static/images/icon/shipin.png'},
        {name:"电影票",img:baseUrl+'static/images/icon/dianyingpiao.png'},
        {name:"外卖券",img:baseUrl+'static/images/icon/waimaisongquan.png'},
        {name:"健身卡",img:baseUrl+'static/images/icon/jianshen.png'},
        {name:"演唱会",img:baseUrl+'static/images/icon/jiuba_iconyanchangpiao--.png'},
        {name:"火锅折扣",img:baseUrl+'static/images/icon/huoguo.png'},
        
    ],},
    {id:15,title:'二手车',
      children:[
        {name:"自行车",img:baseUrl+'static/images/icon/zihangchesaiche.png'},
        {name:"电动车",img:baseUrl+'static/images/icon/a-01_diandongche.png'},
        {name:"平板车",img:baseUrl+'static/images/icon/pingbanche-cemian.png'},
    ],},
    ],
  },
  onLoad: function () {
      // var allinfo=wx.getSystemInfoSync();
      // console.log(allinfo.windowWidth)
      // 实例化API核心类
      // qqmapsdk = new QQMapWX({
      //     key: '2FFBZ-TNU6F-R6QJ3-JAUYU-HFRA3-HUFMO'
      // });
      
  },
   onShow: function (options){
    // this.getLocation(); 
    
  },
  // 获取搜索框输入内容
  inputTyping:function (e) {
    this.setData({
      inputVal: e.detail.value
    })
    
  },
  // enter键触发搜索
  search:function(e){
    console.log(this.data.inputVal)
  },
  // 左侧list点击事件
  switchItem:function(e){
    const arr=e.currentTarget.dataset.item.children
    const index=e.currentTarget.dataset.index
    this.setData({
      rightmenu:arr,
      label_index:index,
      list0_title:e.currentTarget.dataset.item.title
    })
    // 打印出内容进行测试
    // console.log(e.currentTarget.dataset),
    // console.log(e.currentTarget.dataset.item.title)
    // console.log(e.currentTarget.dataset.item.children)
    // console.log(this.data.rightmenu)
  },
  //
  switchright:function(e){
    let clsname=e.currentTarget.dataset.item.name
    wx.setStorageSync('cls', clsname) 
  }
  
  //调用微信api获取经纬度然后传入地图API
    // getLocation: function(){
    //   let vm = this;
    //   wx.getLocation({
    //     type: 'wgs84',
    //     altitude: true,
    //     success: function(res) {
    //       console.log(res);
    //        var latitude = res.latitude;
    //         var longitude = res.longitude;
          
    //       //传入参数
    //       vm.getLocal(latitude, longitude)
    //     },
    //     fail: function(res){
    //       console.log('获取经纬度失败fail')
    //     }
    //   })
    // },
    //获取当前地理位置
    // getLocal: function (latitude, longitude){
    //   let vm = this;
    //   qqmapsdk.reverseGeocoder({
    //     location: {
    //       latitude: latitude,
    //       longitude: longitude
    //     },
    //     success: function (res) {
    //       console.log(res); 
         
    //       const addr=res.result.ad_info.city;
    //       console.log(addr);
    //       vm.setData({
    //           city:addr
    //       }) 
    //     },
    //     fail: function (res) {
    //       console.log('获取API定位信息失败');
    //     }
    //   })
    // }
  })