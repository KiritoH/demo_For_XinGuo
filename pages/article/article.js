// pages/article/article.js
import {HTTP} from '../../utils/http.js'


//必须先实例化类
let http =  new HTTP();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    //到时候用对应数组传值
    index_co:[100001,100002,100003,100004,100005],
    columns: ['家用电器', '数码3C', '服装箱包', '食品生鲜', '酒水饮料']
  },
  //改变选择器显示的值
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    //todo 利用http.js写一个异步请求！
    http.request({
      url:'article/save.do',
      data:{
        name: e.detail.value.name,
        categoryId: this.data.index_co[e.detail.value.category]
      },
      method:'POST',
      success:(res)=>{
        console.log(res);
      }
    })
  },
  formReset() {
    console.log('form发生了reset事件')
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})