// components/products/products.js
const app=getApp()
const baseUrl=app.globalData.reqUrl
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    products:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    productId:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goTo:function(e){
      let productid=e.currentTarget.dataset.id
      wx.setStorageSync('productId', productid)
      console.log(productid)
      this.setData({
        productId:productid
      })
      wx.request({
        url: baseUrl+'product/sid',
        data:{productId:productid},
        header:{'content-type':'application/json'},
        method:'post',
        success:function(res){
          let products=res.data
          console.log(products)
          wx.setStorageSync('PUid',products.userid)
          wx.setStorageSync('Pcls',products.classname)
          wx.setStorageSync('degree',products.degree)
          wx.setStorageSync('detail',products.detail)
          wx.setStorageSync('price',products.price)
          wx.setStorageSync('pubtime',products.pubtime)
          wx.setStorageSync('imgsrcs',products.imgsrcs)
        },
        fail:function(err){
          console.log(err)
        }
      })
       
    },
    del:function(e){
      let productid=e.currentTarget.dataset.id
      console.log(productid)
      let _this=this
      wx.request({
        url: baseUrl+'product/pubdel',
        data:{productid},
        header:{
          "Content-Type": "application/json" 
        },
        method:'post',
        success:function(res){
          console.log(res.data)
        },
        fail:function(err){
          console.log(err)
        }
      })
    }
    
  }
})
