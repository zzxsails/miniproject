// index.js
// 获取应用实例
const app = getApp()
const baseUrl=app.globalData.reqUrl

Page({
  data: {
    name:'',
    password:'',
    tel:'',
    school:'',
    nickname:'',
    bgsrc:baseUrl+'static/images/registerBg.jpeg'
  },
  //返回入口页
  back:function(){
    wx.navigateBack({
      delta:1
    })
  },
  //获取学号，密码，手机号，学校，昵称属性值，修改data数据
  getName:function(e){
    this.setData({
      name:e.detail.value
    })
    // console.log(e.detail.value)
  },
  getPsd:function(e){
    this.setData({
      password:e.detail.value
    })
  },
  //手机号输入不符合规范时弹出提示框
   getTel:function(e){
    let tel=e.detail.value;
    if(!/^1[3456789]\d{9}$/.test(tel)){
     wx.showToast({
       title: '手机号码有误，请重新填写！',
       icon:'error'
     })
    }else{
      this.setData({
        tel:tel
    })
    // console.log(this.data.tel)
    }
  },
  getSchool:function(e){
    this.setData({
      school:e.detail.value
    })
  },
  getNk:function(e){
    this.setData({
      nickname:e.detail.value
    })
  },
  //用户注册事件，点击获取注册表中数据userinfo，发送到服务器
  register:function(){
    let name=this.data.name
    let password=this.data.password
    let tel=this.data.tel
    let school=this.data.school
    let nickname=this.data.nickname
    let userinfo={'name':name,'password':password,'tel':tel,'school':school,'nickname':nickname}
    if(name!=''&&password!=''&&tel!=''&&school!=''&&nickname!=''){
      wx.request({
        url: baseUrl+'api/register',
        data:userinfo,
        // 1、前端header设置application/json对数据进行 JSON 序列化
        // ==后端使用bodyParser.json解析post方式发送的（json）数据
        // 2、application/x-www-form-urlencoded会将数据转换成 query string 
        // ==后端使用bodyParser.urlencoded({ extended: false })
        header:{
          "Content-Type": "application/json" 
        },
        method:'post',
        success:function(res){
          console.log(res.data)
          if(res.data=='您已注册，请直接登录!'){
            wx.showToast({
              title:'用户已存在！',
              icon:'success'
            })  
          setTimeout(function(){
            wx.navigateTo({
              url: '../login/login'
            })
          },1000)
        }else{
          wx.navigateTo({
            url: '../login/login'
          })
        }

        },
        fail:function(err){
          console.log(err)
        }

      })
    }else{
      wx.showToast({
        title:'注册信息不完整！',
        icon:'error'
      })
    }

    
  }
})
  
