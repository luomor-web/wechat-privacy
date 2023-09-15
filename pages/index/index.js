Page({
    data:{
      content: '说明：使用 wx.getPrivacySetting 和 <button open-type="agreePrivacyAuthorization"> 在首页处理隐私弹窗逻辑'
    },
    agree(e){
      console.log("用户同意隐私授权, 接下来可以调用隐私协议中声明的隐私接口")
      wx.getClipboardData({
        success(res) {
          console.log("getClipboardData success", res)
        },
        fail(res) {
          console.log("getClipboardData fail", res)
        },
      })
    },
    disagree(e){
      console.log("用户拒绝隐私授权, 未同意过的隐私协议中的接口将不能调用")
    },
})
