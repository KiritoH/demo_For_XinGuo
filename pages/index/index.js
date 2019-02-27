import {HTTP} from '../../utils/http.js'


//必须先实例化类
let http =  new HTTP();

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    show: {
      middle: false
    }
  },

  onLoad: function () {
    
  },
  toggle(type) {
    this.setData({
      [`show.${type}`]: !this.data.show[type]
    });
  },

  /**
   * 获取发布项list
   */
  listReleaseItem(){
    //todo 利用http.js写一个异步请求！
    http.request({
      url:'article/list.do',
      data:{
        pageNum: '1',
      },
      method:'get',
      success:(res)=>{
        console.log(res);
      }
    })
  },
  search(){
    //todo 利用http.js写一个异步请求！
    http.request({
      url:'release/search.do',
      data:{
        keyword: "我",
        pageNum: '1',
      },
      method:'get',
      success:(res)=>{
        console.log(res);
      }
    })
  },
  print(){
    //todo 利用http.js写一个异步请求！
    http.request({
      url:'article/print.do',
      data:{
        articleNo: '1550740000610',
      },
      method:'get',
      success:(res)=>{
        console.log(res);
      }
    })
  },




  togglePopup() {
    this.toggle('middle');
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
