// pages/menu/menu.js
const app = getApp()
const baseUrl=app.globalData.reqUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // cls:'',
    products:[
      {
        id:0,
        title:'南充旅游区景点门票三折转售',
        imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
        school:'重庆文理学院',
        price:'38'
      },
      // {
      //   id:1,
      //   title:'南充旅游区景点门票三折转售',
      //   imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
      //   school:'重庆文理学院',
      //   price:'38'
      // },
      // {
      //   id:2,
      //   title:'南充旅游区景点门票三折转售',
      //   imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
      //   school:'重庆文理学院',
      //   price:'38'
      // },
      // {
      //   id:3,
      //   title:'南充旅游区景点门票三折转售',
      //   imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
      //   school:'重庆文理学院',
      //   price:'38'
      // },
      // {
      //   id:4,
      //   title:'南充旅游区景点门票三折转售',
      //   imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
      //   school:'重庆文理学院',
      //   price:'38'
      // },
      // {
      //   id:5,
      //   title:'南充旅游区景点门票三折转售',
      //   imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
      //   school:'重庆文理学院',
      //   price:'38'
      // },
      // {
      //   id:6,
      //   title:'南充旅游区景点门票三折转售',
      //   imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
      //   school:'重庆文理学院',
      //   price:'38'
      // },
      // {
      //   id:7,
      //   title:'南充旅游区景点门票三折转售',
      //   imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
      //   school:'重庆文理学院',
      //   price:'38'
      // },
      // {
      //   id:8,
      //   title:'南充旅游区景点门票三折转售',
      //   imgSrc:'http://m.qpic.cn/psc?/V54GuHjJ1Ite3q03KoE34JODTl4JVMun/45NBuzDIW489QBoVep5mcQny8k07BJCS6Wz6msXaiPPlDjlb9DwUTIhw4caBh7ng7NlDh3XcspZrasaDWstM*f4u9*kfRxGzlhIaElO8kvM!/b&bo=gAJAAQAAAAABF*M!&rf=viewer_4"',
      //   school:'重庆文理学院',
      //   price:'38'
      // }
    ],
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
    let cls=wx.getStorageSync('cls')
    // this.setData({
    //   cls:cls
    // })
    //修改chat页面navigationbar标题
    wx.setNavigationBarTitle({
      title: cls,
    })
    let _this=this
    wx.request({
      url: baseUrl+'product/cls',
      data:{clsname:cls,
        message:'根据类名请求商品列表'
      },
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
          products:products
        })
        console.log(_this.data.products)
       
      },
      fail:function(err){
        console.log(err)
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