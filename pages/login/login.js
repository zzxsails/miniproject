// pages/login/login.js
const app = getApp()
const baseUrl=app.globalData.reqUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    password:"",
    bgSrc:baseUrl+'static/images/loginBg.jpeg'
  },
  //返回入口页
  back:function(){
    wx.navigateBack({
      delta:1
    })
  },
  //获取用户名
  getName:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  //获取密码
  getPsd:function(e){
    this.setData({
      password:e.detail.value
    })
  },
  //login登录事件
  login:function(){
    let name=this.data.name
    let password=this.data.password
    let userinfo={'name':name,'password':password}
    if(name!=''&&password!=''){
      wx.request({
        url:baseUrl+'api/login',
        data:userinfo,
        header:{
          "Content-Type": "application/json" 
        },
        method:'get',
        success:function(res){
          if(res.data=='用户不存在！'){
            wx.showToast({
              title: '用户不存在！',
              icon:'error'
            })
          }else if(res.data=='密码错误！'){
            wx.showToast({
              title: '密码错误！',
              icon:'error'
            })
          }else{
            let userId=res.data[0].id
            console.log(userId)
            wx.setStorageSync('isLogin',true)
            wx.setStorageSync('userId',userId)
            wx.switchTab({
              url: '../index/index',
            })
            
          }
          
        }
      })
    }else{
      wx.showToast({
        title: '登录信息不完整！',
        icon:'error'
      })
    }
  }
 
})