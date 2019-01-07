var postsData = require('../../../data/posts-data.js');
var app = getApp();
Page({
  data: {
    
  },

  onLoad: function (option) {
    var globalData = app.globalData;
    var postId = option.id; //拿到从列表页传递过来的postid

    this.data.currentPostId = postId;
    //console.log(option)
    var postData = postsData.postlist[postId];
    //console.log(postData);



    this.setData({
      postData: postData
    })
    //把所有文章的缓存状态从缓存中读取出来
    var postsCollected = wx.getStorageSync('posts_collected')

    

  

  },

 
  tel:function(event){
    wx.makePhoneCall({
      phoneNumber: '18682071935',
    })
  },


  onShareTap: function (event) {
    var itemList = [
      "分享给微信好友",
      "分享到朋友圈",
      "分享到QQ",
      "分享到微博"
    ]
    wx.showActionSheet({
      itemList: itemList,
      itemColor: "red",
      success: function (res) {
        //res.cancel  用户是不是点击了取消按钮
        //res.tapIndex  数组元素的序号，从0开始
        wx.showModal({
          title: '用户' + itemList[res.tapIndex],
          content: '用户是否取消？' + res.cancel + "现在无法实现分享功能",
        })
      }
    })
  }

})