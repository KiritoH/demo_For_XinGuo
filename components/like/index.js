// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
    },
    count:{
      type:Number,
      value:9
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //数据绑定
    likeUrl:"./images/like.png",
    dislikeUrl:"./images/like@dis.png"
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      //用this获取到properties的值
      //let是类似var的一种弱类型变量
      let like = this.properties.like
      let count = this.properties.count
      count = like?9:10
      //设置properties中的值
      this.setData({
        count:count,
        like:!like
      })
      
    }
  }
})
