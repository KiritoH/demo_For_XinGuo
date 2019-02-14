var app = getApp()
Page({
  data: {
    show: ""
  },
  json_json: function (res) {
    var that = this;
    //sessionId在内
    var header = getApp().globalData.header; //获取app.js中的请求头
    wx.request({
      url: 'http://yww.nat300.top/test/testLogin.do',
      method: 'get',
      header: {
        //带上此请求头
        "Cookie" : "JSESSIONID="+wx.getStorageSync("sessionId"),
        "Content-Type": "application/json"
      },
      success: function (res) {
        var show = res.data.msg
        
        that.setData({
          show:
            show

        })
      }
    })
  },
  onLoad: function () {
  }
})






