// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class0_title:"手机数码",
    label_index:0,
    class_name:'',
    rightNames:["手机","电脑","ipad","手环","照相机","音响","蓝牙耳机","英语听力耳机"],
    class0:[
      {
        title:'手机数码',
        children:["手机","电脑","ipad","手环","照相机","音响","蓝牙耳机","英语听力耳机"]
      },
      {
        title:'图书',
        children:["大学教材","四六级英语","教资","考公","考研","小说","漫画绘本"]
      },
      {
        title:'美妆',
        children:["口红","粉底","隔离霜","眼影盘","眉笔","睫毛膏","化妆刷","指甲彩妆","香水"]
      },
      {
        title:'护肤',
        children:["卸妆","防晒","水乳","面霜","护手霜","面膜","眼霜"]
      },
      {
        title:'运动户外',
        children:["瑜伽垫","跳绳","球","滑板","滑冰","呼啦圈","弹力带","哑铃"]
      },
      {
        title:'女装',
        children:["女士外套","T恤","衬衫","长裤","短裤","打底裤","半身裙","连衣裙","女士正装"]
      },
      {
        title:'女鞋',
        children:["凉鞋","小白鞋","女士运动鞋","高跟鞋","靴子"]
      },
      {
        title:'男装',
        children:["男士外套","短袖","毛衣","卫衣","牛仔裤"]
      },
      {
        title:'男鞋',
        children:["运动鞋","板鞋","球鞋"]
      },
      {
        title:'家具收纳',
        children:["床上书桌","衣柜","桌面收纳","衣物收纳","移动书桌"]
      },
      {
        title:'小家电',
        children:["小冰箱","饮水机","洗衣机","挂烫机"]
      },
      {
        title:'服饰配件',
        children:["墨镜","鸭舌帽","渔夫帽","围巾","手套","背包","手表"]
      },
      {
        title:'游戏手办',
        children:["游戏账号","皮肤","游戏代练","动漫手办"]
      },
      {
        title:'卡券交易',
        children:["视频会员","电影票","外卖券","健身卡","演唱会","火锅折扣"]
      },
      {
        title:'二手车',
        children:["自行车","电动车","平板车"]
      },
      {
        title:'其他',
        children:["其他"]
      }
    ]
  },

  // 左侧list点击事件，获取左侧大分类下详细分类名称
  switchItem:function(e){
    const arr=e.currentTarget.dataset.item.children
    const index=e.currentTarget.dataset.index
    
    this.setData({
      rightNames:arr,//修改右侧分类列表
      label_index:index,
      class0_title:e.currentTarget.dataset.item.title
    })
    // console.log(this.data.rightNames)
  },
  //为分类标签设置点击事件，方便获取class_name
  gain:function(e){
    // 传值到publish页面
    var that=this
    that.setData({
      class_name:e.currentTarget.dataset.item
    })
    wx.setStorageSync('className', that.data.class_name)
    wx.navigateBack({
      delta:1
    })
    console.log(this.data.class_name)
  },
  // 点击右侧分类获取对应值
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