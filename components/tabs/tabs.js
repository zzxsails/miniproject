// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    classify:[
      {
        id:1,
        title:"二手手机",
        imgsrc:'../../pages/images/add.png'
      },
      {
        id:1,
        title:"二手图书",
        imgsrc:'../../pages/images/lose.png'
      },
      {
        id:1,
        title:"化妆品",
        imgsrc:'../../pages/images/index.png'
      },
      {
        id:1,
        title:"女装",
        imgsrc:'../../pages/images/mine.png'
      },
      {
        id:1,
        title:"全部",
        imgsrc:'../../pages/images/mine.png'
      }
    ]
  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
