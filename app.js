//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
    //使用
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.login({
            success: function (res) {
              var code = res.code;//登录凭证
              if (code) {
                //2、调用获取用户信息接口
                wx.getUserInfo({
                  success: function (res) {
                    console.log({ encryptedData: res.encryptedData, iv: res.iv, code: code })
                    //3.请求自己的服务器，解密用户信息 获取unionId等加密信息
                    wx.request({
                      url: 'http://www.hcfyww.net/XinGuo/user/login.do',//自己的服务接口地址
                      method: 'post',
                      header: {
                        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                      },
                      data: {
                        encryptedData: res.encryptedData, iv: res.iv, code: code
                      },
                      success: function (data) {
                        console.log(data.data.status)

                        //4.解密成功后 获取自己服务器返回的结果
                        if (data.data.status == 0) {
                          var userInfo_ = data.data.data;
                          console.log(userInfo_)


                          //设置sessionId,之后可以通过该get函数得到session
                          wx.setStorageSync("sessionId", data.data.msg)


                          console.log(data.data.msg)

                        } else {
                          console.log('解密失败')
                        }
                      },
                      fail: function () {
                        console.log('系统错误')
                      }
                    })
                  },
                  fail: function () {
                    console.log('获取用户信息失败')
                  }
                })

              } else {
                console.log('获取用户登录态失败！' + r.errMsg)
              }
            },
            fail: function () {
              console.log('登陆失败')
            }
          })

        } else {
          console.log('获取用户信息失败')

        }

      }
    })

  },


})