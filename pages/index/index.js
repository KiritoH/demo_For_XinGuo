//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',

  },

  onLoad: function () {
    
  },

  ClickToForm: function (e) {
    wx.navigateTo({
      url: '../form/form'
    })
  },
  ClickToLogin: function (e) {
    wx.navigateTo({
      url: '../login/login'
    })
  },

  ClickToTest: function (e) {
    wx.navigateTo({
      url: '../test/test'
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()){
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})
