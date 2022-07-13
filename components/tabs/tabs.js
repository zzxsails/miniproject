// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    classify:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  // data: {

  //   classify:[
  //     {
  //       id:1,
  //       title:"热门推荐",
  //       imgsrc:'../../pages/images/hot.png'
  //     },
  //     {
  //       id:2,
  //       title:"手机数码",
  //       imgsrc:'../../pages/images/digital.png'
  //     },
  //     {
  //       id:3,
  //       title:"女装",
  //       imgsrc:'../../pages/images/dress.png'
  //     },
  //     {
  //       id:4,
  //       title:"图书",
  //       imgsrc:'../../pages/images/book.png'
  //     },
  //     {
  //       id:5,
  //       title:"全部",
  //       imgsrc:'../../pages/images/list1.png'
  //     }
  //   ]
  // },

  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goTo:function(){
      wx.switchTab({
        url: '../../pages/list/list',
      })
    }
  }
})
