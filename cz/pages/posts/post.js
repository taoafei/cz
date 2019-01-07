var postsData = require('../../data/posts-data.js')//这里只能用相对路径不能用绝对路径

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //小程序总是会读取data对象来做数据绑定  ，这个动作我们称之为动作A
    //而这个动作A的执行，是在onload事件执行之后发生的
  },

  /**
   * 生命周期函数--监听页面加载页面初始化的同时向服务器请求数据
   */
  onLoad: function (options) {

    this.setData({
      posts_key: postsData.postlist
    })

  },

  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;//获取文章postid
    console.log(postId)
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId//给详情页面传递postid
    })

  },
  onSwiperTap: function (event) {
    //target 和 currentTarget
    //target指的是当前点击的组件  currentTarge指的是事件捕获的组件
    //target这里指的是image   currentTarget 指的是swiper组件
    var postId = event.target.dataset.postid;
    console.log(event)
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId
    })
  }

})