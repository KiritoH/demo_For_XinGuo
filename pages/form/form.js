var app = getApp()
Page({
  onLoad(option) {
    console.log("option")

    console.log(option)
  },
  data: {
    show: ""
  },
  json_json: function (res) {
    var that = this;
    console.log(res.detail.value)
    console.log(res.detail.value.username)
    console.log(res.detail.value.password)
    wx.request({
      url: 'http://localhost:8080/manage/user/login2.do',
      data: res.detail.value,
      method: 'POST',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        var show = {
          status: '' + res.data.status, 
          msg: '' + res.data.msg,
          data: '' + res.data.data
        }
        
        that.setData({
          show: 
            show.msg
                 
        })
      }
    })
  },
  onLoad: function () {
  }
})






